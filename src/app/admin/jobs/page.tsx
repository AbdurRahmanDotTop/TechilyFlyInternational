export default function AdminJobsPage() {
  const mockJobs = [
    { id: '1', title: 'Frontend Developer', employer: 'employee@techilyfly.com', status: 'PUBLISHED', expiry: '2026-12-31' },
    { id: '2', title: 'Backend Engineer', employer: 'employee@techilyfly.com', status: 'EXPIRED', expiry: '2023-12-31' },
    { id: '3', title: 'DevOps Intern', employer: 'admin@techilyfly.com', status: 'DRAFT', expiry: '2027-01-01' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Platform Jobs</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Force Expiry Engine (Cron Test)</button>
      </div>
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockJobs.map(job => (
              <tr key={job.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.employer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${job.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' : 
                      job.status === 'EXPIRED' ? 'bg-red-100 text-red-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.expiry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button className="text-blue-600 hover:text-blue-900">View</button>
                  {job.status === 'PUBLISHED' && <button className="text-red-600 hover:text-red-900">Expire</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
