export default function SparkleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="sparkle-gradient absolute inset-0 opacity-90" />
      <div className="sparkle-field absolute inset-0">
        <span className="sparkle sparkle-1" />
        <span className="sparkle sparkle-2" />
        <span className="sparkle sparkle-3" />
        <span className="sparkle sparkle-4" />
        <span className="sparkle sparkle-5" />
        <span className="sparkle sparkle-6" />
      </div>
    </div>
  );
}
