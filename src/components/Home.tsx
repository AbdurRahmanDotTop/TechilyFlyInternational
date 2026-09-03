import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const jobs = [
    {
      id: '1',
      slug: 'senior-software-engineer-dubai',
      title: 'Senior Software Engineer',
      employer: 'Tech Corp Gulf',
      isVerified: true,
      location: 'Dubai, UAE',
      posted: '2 days ago',
      type: 'Full-time'
    },
    {
      id: '2',
      slug: 'marketing-director-riyadh',
      title: 'Marketing Director',
      employer: 'Desert Oasis Group',
      isVerified: false,
      location: 'Riyadh, Saudi Arabia',
      posted: '1 week ago',
      type: 'Full-time'
    },
    {
      id: '3',
      slug: 'civil-engineer-doha',
      title: 'Civil Engineer',
      employer: 'Al-Khaleej Constructions',
      isVerified: true,
      location: 'Doha, Qatar',
      posted: '3 hours ago',
      type: 'Contract'
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Find Your Next Career in the Gulf
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Connect with top verified employers across the UAE, Saudi Arabia, Qatar, and beyond.
          </p>
          
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Job title, keyword, or company" 
                className="pl-10 h-12 text-lg border-0 focus-visible:ring-0 text-black"
              />
            </div>
            <div className="hidden md:block w-px bg-gray-200 my-2"></div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="City or Country" 
                className="pl-10 h-12 text-lg border-0 focus-visible:ring-0 text-black"
              />
            </div>
            <Button size="lg" className="h-12 px-8 bg-teal-600 hover:bg-teal-700 text-lg">
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Recommended Roles</h2>
        <div className="space-y-4">
          {jobs.map(job => (
            <a href={`/jobs/${job.slug}`} key={job.id} className="block">
              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <span className="font-medium">{job.employer}</span>
                    {job.isVerified && (
                      <span className="ml-1.5 flex items-center text-blue-600" title="Verified Employer">
                        <CheckCircle2 className="h-4 w-4 fill-blue-600 text-white" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                      {job.type}
                    </span>
                    <span>{job.posted}</span>
                  </div>
                </div>
                <Button variant="outline" className="shrink-0 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-200">
                  View Details
                </Button>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
