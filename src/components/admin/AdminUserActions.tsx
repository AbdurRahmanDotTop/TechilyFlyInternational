import React, { useState } from 'react';
import { Trash2, UserCog } from 'lucide-react';

interface User {
  id: string;
  email: string;
  role: string;
}

export function AdminUserActions({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);

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
        onClick={handleDelete} 
        disabled={loading}
        title="Delete User"
        className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center gap-1"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
