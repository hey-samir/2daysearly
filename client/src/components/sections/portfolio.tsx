export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        We're proud to invest our time and money in operators at these startups:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold">JUNO</h3>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold">waldo</h3>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-600">
        *To build the best community we can for our members, we're limiting access to current and former Chime employees only at this time
      </p>
    </section>
  );
}
