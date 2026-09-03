import React, { useState } from 'react';
import { Pencil, Trash2, CheckCircle, XCircle } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  description: string;
  city: string | null;
  country: string | null;
  status: string;
  slug: string;
  employerId: string;
  acceptingApplications: boolean;
  expiryAt: string;
  publishedAt?: string;
  closedAt?: string;
}

export function AdminJobActions({ job }: { job: Job }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(job);

  const handleStatusChange = async (newStatus: string) => {
    if (!confirm(`Are you sure you want to ${newStatus.toLowerCase()} this job?`)) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/jobs/${job.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) window.location.reload();
      else alert('Failed to update status');
    } catch (e) {
      alert('Error updating status');
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to permanently delete this job? This action cannot be undone.')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/jobs/${job.id}`, {
        method: 'DELETE'
      });
      if (res.ok) window.location.reload();
      else alert('Failed to delete job');
    } catch (e) {
      alert('Error deleting job');
    }
    setLoading(false);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/jobs/${job.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsEditing(false);
        window.location.reload();
      } else alert('Failed to update job');
    } catch (e) {
      alert('Error updating job');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-2">
      {job.status !== 'PUBLISHED' && (
        <button 
          onClick={() => handleStatusChange('PUBLISHED')} 
          disabled={loading}
          title="Approve"
          className="p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors"
        >
          <CheckCircle size={16} />
        </button>
      )}
      {job.status !== 'REJECTED' && (
        <button 
          onClick={() => handleStatusChange('REJECTED')} 
          disabled={loading}
          title="Reject"
          className="p-1.5 text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
        >
          <XCircle size={16} />
        </button>
      )}
      
      <button 
        onClick={() => setIsEditing(true)} 
        disabled={loading}
        title="Edit"
        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
      >
        <Pencil size={16} />
      </button>

      <button 
        onClick={handleDelete} 
        disabled={loading}
        title="Delete"
        className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
      >
        <Trash2 size={16} />
      </button>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-muted/30">
              <h2 className="text-xl font-bold">Edit Job</h2>
              <button onClick={() => setIsEditing(false)} className="text-muted-foreground hover:text-foreground">
                <XCircle size={20} />
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="overflow-y-auto p-6 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input 
                    type="text" 
                    value={formData.city || ''} 
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input 
                    type="text" 
                    value={formData.country || ''} 
                    onChange={e => setFormData({...formData, country: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input 
                    type="text" 
                    value={formData.slug || ''} 
                    onChange={e => setFormData({...formData, slug: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Employer ID</label>
                  <input 
                    type="text" 
                    value={formData.employerId || ''} 
                    onChange={e => setFormData({...formData, employerId: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input 
                    type="date" 
                    value={formData.expiryAt ? new Date(formData.expiryAt).toISOString().split('T')[0] : ''} 
                    onChange={e => setFormData({...formData, expiryAt: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Published Date</label>
                  <input 
                    type="date" 
                    value={formData.publishedAt ? new Date(formData.publishedAt).toISOString().split('T')[0] : ''} 
                    onChange={e => setFormData({...formData, publishedAt: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select 
                    value={formData.status} 
                    onChange={e => setFormData({...formData, status: e.target.value})}
                    className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  >
                    <option value="DRAFT">DRAFT</option>
                    <option value="PUBLISHED">PUBLISHED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <input 
                    type="checkbox" 
                    id="acceptingApplications"
                    checked={formData.acceptingApplications} 
                    onChange={e => setFormData({...formData, acceptingApplications: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <label htmlFor="acceptingApplications" className="text-sm font-medium">Accepting Applications</label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description (Markdown/Text)</label>
                <textarea 
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full border border-input bg-background px-3 py-2 rounded-md min-h-[200px]"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-border rounded-md hover:bg-muted"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
