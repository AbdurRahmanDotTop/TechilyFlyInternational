import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-teal-600 tracking-tight">
                Techily Fly
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
                Find Jobs
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-teal-600 font-medium">
                Candidate Sign In
              </Link>
              <Link href="/employer" className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md font-medium transition-colors">
                Employer Portal
              </Link>
            </nav>
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </header>
      <main className="flex-1 bg-slate-50">
        {children}
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 Techily Fly International. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
