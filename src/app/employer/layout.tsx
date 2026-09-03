export default function EmployerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Employer Hub</h2>
        <nav className="space-y-2">
          <a href="/employer" className="block px-4 py-2 rounded bg-blue-800">Dashboard</a>
          <a href="/employer/jobs" className="block px-4 py-2 rounded hover:bg-blue-800">My Jobs</a>
          <a href="/employer/applicants" className="block px-4 py-2 rounded hover:bg-blue-800">Applicants</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-blue-50/30">
        {children}
      </main>
    </div>
  );
}
