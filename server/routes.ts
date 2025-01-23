import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // API routes go here
  // prefix all routes with /api

  // Catch-all route for client-side routing
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: './client/dist' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
