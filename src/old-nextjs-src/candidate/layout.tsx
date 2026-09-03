export default function CandidateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-teal-600">Candidate Portal</h2>
        <nav className="space-x-4">
          <a href="/candidate" className="text-sm font-medium">Dashboard</a>
          <a href="/candidate/profile" className="text-sm font-medium">Profile</a>
          <a href="/candidate/applications" className="text-sm font-medium">My Applications</a>
        </nav>
      </header>
      <main className="flex-1 p-8 bg-slate-50">
        {children}
      </main>
    </div>
  );
}
