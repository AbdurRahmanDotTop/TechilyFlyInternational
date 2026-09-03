import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function JobDetails({ slug }: { slug: string }) {
  // Mock data for MVP
  const job = {
    title: "Senior Software Engineer",
    employer: "Tech Corp Gulf",
    country: "United Arab Emirates",
    city: "Dubai",
    expiry: "2024-12-31",
    status: "EXPIRED", 
    isVerified: true,
    description: "We are looking for a Senior Software Engineer with 5+ years of experience in React and Node.js to join our expanding team in Dubai."
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
            <div className="flex items-center text-xl text-gray-600 mb-4">
              {job.employer}
              {job.isVerified && (
                <span className="ml-2 flex items-center text-blue-600" title="Verified Employer">
                  <CheckCircle2 className="h-5 w-5 fill-blue-600 text-white" />
                </span>
              )}
            </div>
          </div>
          {job.status === "EXPIRED" ? (
            <Button size="lg" variant="secondary" className="bg-gray-300 text-gray-600 cursor-not-allowed" disabled>
              Applications Closed
            </Button>
          ) : (
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">Apply Now</Button>
          )}
        </div>
        
        <div className="flex space-x-6 text-sm text-gray-500 mb-8 pb-8 border-b">
          <div className="flex items-center">
            <span className="font-semibold mr-2">Location:</span> {job.city}, {job.country}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Expires:</span> {job.expiry}
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>
      </div>
    </div>
  );
}
