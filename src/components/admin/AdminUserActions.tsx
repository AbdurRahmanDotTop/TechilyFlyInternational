import React, { useState } from 'react';
import { Trash2, UserCog, Pencil, XCircle } from 'lucide-react';

interface User {
  id: string;
  email: string;
  role: string;
}

export function AdminUserActions({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsEditing(false);
        window.location.reload();
      } else alert('Failed to update user');
    } catch (e) {
      alert('Error updating user');
    }
    setLoading(false);
  };

  const handleRoleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value;
    if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) {
      e.target.value = user.role; // reset
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) window.location.reload();
      else alert('Failed to update role');
    } catch (error) {
      alert('Error updating role');
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm(`DANGER: Are you sure you want to permanently delete user ${user.email}? This will ALSO delete their profile, jobs, and applications. This action CANNOT be undone.`)) return;
    
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'DELETE'
      });
      if (res.ok) window.location.reload();
      else alert('Failed to delete user');
    } catch (error) {
      alert('Error deleting user');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center">
        <UserCog size={16} className="absolute left-2 text-muted-foreground pointer-events-none" />
        <select
          value={user.role}
          onChange={handleRoleChange}
          disabled={loading}
          className="pl-8 pr-2 py-1 text-xs border border-border rounded-md bg-background hover:bg-muted/50 cursor-pointer appearance-none transition-colors"
        >
          <option value="CANDIDATE">CANDIDATE</option>
          <option value="EMPLOYER">EMPLOYER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
      </div>

      <button 
        onClick={() => setIsEditing(true)} 
        disabled={loading}
        title="Edit User"
        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex items-center gap-1"
      >
        <Pencil size={16} />
      </button>

      <button 
        onClick={handleDelete} 
        disabled={loading}
        title="Delete User"
        className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center gap-1"
      >
        <Trash2 size={16} />
      </button>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-muted/30">
              <h2 className="text-xl font-bold">Edit User</h2>
              <button onClick={() => setIsEditing(false)} className="text-muted-foreground hover:text-foreground">
                <XCircle size={20} />
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-input bg-background px-3 py-2 rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select 
                  value={formData.role} 
                  onChange={e => setFormData({...formData, role: e.target.value})}
                  className="w-full border border-input bg-background px-3 py-2 rounded-md"
                >
                  <option value="CANDIDATE">CANDIDATE</option>
                  <option value="EMPLOYER">EMPLOYER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
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
