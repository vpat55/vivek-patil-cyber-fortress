
import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import { Settings } from 'lucide-react';

const AdminTrigger = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const { isAdminAuthenticated } = useAdmin();

  const handleClick = () => {
    if (isAdminAuthenticated) {
      setShowPanel(true);
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed top-4 right-4 z-40 bg-green-400/20 border border-green-400 rounded-full p-3 hover:bg-green-400/30 transition-all duration-300 group"
        title="Admin Panel"
      >
        <Settings 
          size={20} 
          className="text-green-400 group-hover:rotate-90 transition-transform duration-300" 
        />
      </button>

      {showLogin && (
        <AdminLogin onClose={() => setShowLogin(false)} />
      )}

      {showPanel && (
        <AdminPanel isOpen={showPanel} onClose={() => setShowPanel(false)} />
      )}
    </>
  );
};

export default AdminTrigger;
