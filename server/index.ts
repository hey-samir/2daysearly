import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import type { Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from attached_assets directory with proper path resolution
app.use('/attached_assets', express.static(path.join(__dirname, '..', 'attached_assets')));

interface ExtendedResponse extends Response {
  json: (body: any, ...args: any[]) => Response;
}

// Middleware to log API requests
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  (res as ExtendedResponse).json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

class ServerError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'ServerError';
  }
}

// Error handling middleware
const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ServerError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    const status = 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  }
  console.error(err);
};

const startServer = async () => {
  try {
    const server = registerRoutes(app);

    app.use(errorHandler);

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      log(`Server running at http://localhost:${PORT}`);
      log('Server is ready to handle requests');
    });

    setupServerErrorHandling(server);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

const setupServerErrorHandling = (server: Server) => {
  server.on('error', (error: NodeJS.ErrnoException) => {
    log(`Server error: ${error.message}`);
    if (error.code === 'EADDRINUSE') {
      log('Address already in use, retrying...');
      setTimeout(() => {
        server.close();
        server.listen(process.env.PORT || 5000);
      }, 1000);
    }
  });
};

startServer();

export { app };