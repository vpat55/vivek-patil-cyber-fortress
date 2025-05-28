
import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Shield, X } from 'lucide-react';

interface AdminLoginProps {
  onClose: () => void;
}

const AdminLogin = ({ onClose }: AdminLoginProps) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin } = useAdmin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(id, password)) {
      onClose();
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-black border-2 border-green-400 p-6 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-green-400 font-mono text-xl flex items-center gap-2">
            <Shield size={20} />
            ADMIN ACCESS
          </h2>
          <button onClick={onClose} className="text-green-400 hover:text-red-400">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-green-300 font-mono text-sm mb-2">ID</label>
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="bg-black border-green-400 text-green-300 font-mono"
              placeholder="Enter admin ID"
            />
          </div>

          <div>
            <label className="block text-green-300 font-mono text-sm mb-2">PASSWORD</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border-green-400 text-green-300 font-mono"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="text-red-400 font-mono text-sm">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full bg-green-400 text-black hover:bg-green-300 font-mono"
          >
            ACCESS GRANTED
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
