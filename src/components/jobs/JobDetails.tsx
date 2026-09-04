import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface JobProps {
  id: string;
  title: string;
  employer: string;
  isVerified: boolean;
  country: string | null;
  city: string | null;
  expiry: string;
  status: string;
  acceptingApplications: boolean;
  description: string;
}

export default function JobDetails({ job, user }: { job: JobProps, user: any }) {
  const isClosed = job.status !== 'PUBLISHED' || !job.acceptingApplications;
  const [isApplying, setIsApplying] = useState(false);
  const [applyMessage, setApplyMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleApply = async () => {
    if (!user) {
      window.location.href = `/login?redirectTo=/jobs/${job.id}`;
      return;
    }
    if (user.role !== 'CANDIDATE') {
      setApplyMessage({ type: 'error', text: 'Only candidates can apply for jobs.' });
      return;
    }

    setIsApplying(true);
    setApplyMessage(null);
    try {
      const res = await fetch(`/api/jobs/${job.id}/apply`, {
        method: 'POST',
      });
      const data = await res.json() as any;
      if (!res.ok) {
        throw new Error(data.error || 'Failed to apply');
      }
      setApplyMessage({ type: 'success', text: 'Application submitted successfully!' });
    } catch (err: any) {
      setApplyMessage({ type: 'error', text: err.message });
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
            <div className="flex items-center text-xl text-muted-foreground mb-4">
              {job.employer}
              {job.isVerified && (
                <span className="ml-2 flex items-center text-primary" title="Verified Employer">
                  <CheckCircle2 className="h-5 w-5 fill-blue-600 text-white" />
                </span>
              )}
            </div>
          </div>
          {isClosed ? (
            <Button size="lg" variant="secondary" className="bg-muted text-muted-foreground cursor-not-allowed" disabled>
              Applications Closed
            </Button>
          ) : (
            <div className="flex flex-col items-end gap-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleApply} disabled={isApplying}>
                {isApplying ? 'Applying...' : 'Apply Now'}
              </Button>
              {applyMessage && (
                <div className={`text-sm ${applyMessage.type === 'success' ? 'text-green-600' : 'text-destructive'}`}>
                  {applyMessage.text}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex space-x-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
          <div className="flex items-center">
            <span className="font-semibold mr-2">Location:</span> {job.city}, {job.country}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Expires:</span> {job.expiry}
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Job Description</h2>
          <p className="text-foreground/80 leading-relaxed">{job.description}</p>
        </div>

        <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3">नौकरी के लिए अपना CV भेजें</h3>
          <p className="text-foreground/80 mb-6 text-lg">
            नौकरी के लिए अपना CV, पासपोर्ट और पासपोर्ट साइज फोटो भेजें।<br/>
            अगर नौकरी या प्रक्रिया से जुड़ी कोई जानकारी चाहिए, तो बेझिझक हमसे संपर्क करें।
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/918825164657" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Apply via WhatsApp (+91 88251)
            </a>
            <a href="https://wa.me/917320085578" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Apply via WhatsApp (+91 73200)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
