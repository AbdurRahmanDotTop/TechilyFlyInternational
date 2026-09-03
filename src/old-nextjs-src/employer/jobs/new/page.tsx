import JobCreationForm from './job-creation-form';

export default function NewJobPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Vacancy</h1>
      <JobCreationForm />
    </div>
  );
}

export const runtime = 'edge';
