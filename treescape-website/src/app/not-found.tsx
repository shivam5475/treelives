import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-serif text-neutral-900 mb-4">Page Not Found</h1>
      <p className="text-xl text-neutral-600 mb-8">
        We couldn&apos;t find the page you were looking for.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          href="/" 
          className="bg-neutral-900 text-white px-8 py-3 rounded hover:bg-neutral-800 transition-colors"
        >
          Return Home
        </Link>
        <a 
          href="https://wa.me/917665554027" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-neutral-200 text-neutral-900 px-8 py-3 rounded hover:bg-neutral-300 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </main>
  );
}
