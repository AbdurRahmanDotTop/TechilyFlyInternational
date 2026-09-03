export default function ExpiredJobsPage() {
  const expiredJobs = [
    { id: '2', title: 'Backend Engineer', employer: 'Tech Corp Gulf', expiry: '2023-12-31' },
    { id: '4', title: 'HR Manager', employer: 'Emirates Groups', expiry: '2024-01-15' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Expired Vacancies Archive</h1>
      <p className="text-gray-600 mb-8">
        These job postings have reached their expiration date and are no longer accepting new applications.
        They are kept visible for transparency and historical record.
      </p>

      <div className="space-y-4">
        {expiredJobs.map(job => (
          <div key={job.id} className="bg-gray-50 border p-6 rounded-lg shadow-sm flex justify-between items-center opacity-80">
            <div>
              <h2 className="text-xl font-bold text-gray-700">{job.title}</h2>
              <p className="text-gray-500">{job.employer}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold bg-red-100 text-red-800 px-3 py-1 rounded-full">EXPIRED</span>
              <p className="text-xs text-gray-500 mt-2">Expired: {job.expiry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const runtime = 'edge';
