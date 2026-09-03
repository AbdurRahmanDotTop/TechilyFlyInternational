import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, CheckCircle2, Building, Briefcase, ArrowRight } from 'lucide-react';

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
    },
    {
      id: '4',
      slug: 'finance-manager-manama',
      title: 'Finance Manager',
      employer: 'Global Investments Gulf',
      isVerified: true,
      location: 'Manama, Bahrain',
      posted: '12 hours ago',
      type: 'Full-time'
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 flex items-center justify-center min-h-[70vh]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-background overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px] mix-blend-multiply"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Over 5,000+ Active Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Find Your Next <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9b85]">Career in the Gulf</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Connect with top verified employers across the UAE, Saudi Arabia, Qatar, and beyond.
          </p>
          
          {/* Glassmorphism Search Bar */}
          <div className="bg-white/70 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 flex flex-col md:flex-row gap-3 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Job title, keyword, or company" 
                className="pl-12 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 shadow-none font-medium placeholder:font-normal text-foreground"
              />
            </div>
            <div className="hidden md:block w-px bg-border my-2"></div>
            <div className="relative flex-1 group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="City or Country" 
                className="pl-12 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 shadow-none font-medium placeholder:font-normal text-foreground"
              />
            </div>
            <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg shadow-primary/25 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-24 px-4 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Recommended Roles</h2>
              <p className="text-muted-foreground text-lg">Curated opportunities matching your profile</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-primary font-bold hover:gap-2 transition-all gap-1 mt-4 md:mt-0">
              View all jobs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map(job => (
              <a href={`/jobs/${job.slug}`} key={job.id} className="block group">
                <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Building className="w-6 h-6 text-foreground/50" />
                      </div>
                      <span className="bg-secondary px-3 py-1.5 rounded-md text-xs font-bold text-foreground">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                      {job.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-6">
                      <span className="font-medium text-foreground/80">{job.employer}</span>
                      {job.isVerified && (
                        <span className="ml-1.5 flex items-center" title="Verified Employer">
                          <CheckCircle2 className="h-4 w-4 fill-primary text-primary-foreground" />
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-foreground/40" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-foreground/40" />
                        {job.posted}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
              View all jobs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to accelerate your hiring?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of companies using Techily Fly International to build their dream teams across the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-lg font-bold rounded-xl transition-transform hover:scale-105">
              Post a Job Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-xl border-white/20 hover:bg-white/10 hover:text-white transition-colors bg-transparent text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
