export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin" className="block px-4 py-2 rounded bg-slate-800">Dashboard</a>
          <a href="/admin/jobs" className="block px-4 py-2 rounded hover:bg-slate-800">Jobs Queue</a>
          <a href="/admin/users" className="block px-4 py-2 rounded hover:bg-slate-800">Users</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-slate-50">
        {children}
      </main>
    </div>
  );
}
