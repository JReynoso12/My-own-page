import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-white mb-2">404</h1>
      <p className="text-glass-secondary text-lg mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full btn-active text-white font-semibold transition-all hover:shadow-[0_4px_20px_rgba(0,122,255,0.5)]"
      >
        Back to Home
      </Link>
    </main>
  );
}
