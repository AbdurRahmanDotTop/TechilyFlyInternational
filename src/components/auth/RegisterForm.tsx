import React, { useState } from 'react';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CANDIDATE');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to register');
      }

      // Redirect based on role
      if (data.role === 'EMPLOYER') window.location.href = '/employer';
      else if (data.role === 'ADMIN') window.location.href = '/admin';
      else window.location.href = '/candidate';
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Register</h1>
          <p className="text-muted-foreground">Create a new account</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <div className="p-3 text-sm text-white bg-destructive rounded">{error}</div>}
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-2 border rounded" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 border rounded" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 border rounded" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select 
            className="w-full p-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="CANDIDATE">Candidate</option>
            <option value="EMPLOYER">Employer</option>
          </select>
          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white p-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
