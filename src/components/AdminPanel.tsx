
import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Settings, Plus, Edit, Trash2, LogOut } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const { logoutAdmin } = useAdmin();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [editingItem, setEditingItem] = useState<any>(null);

  const sections = [
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' }
  ];

  const handleLogout = () => {
    logoutAdmin();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] bg-black border-l-green-400 text-green-300 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-green-400 font-mono flex items-center gap-2">
            <Settings size={20} />
            ADMIN CONTROL PANEL
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-mono text-sm">SESSION ACTIVE</span>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black"
            >
              <LogOut size={14} className="mr-1" />
              LOGOUT
            </Button>
          </div>

          <div className="border border-green-400 p-4 rounded">
            <h3 className="font-mono text-green-400 mb-3">QUICK ACTIONS</h3>
            <div className="space-y-2">
              <Button className="w-full bg-green-400 text-black hover:bg-green-300 font-mono text-sm">
                <Plus size={14} className="mr-2" />
                ADD NEW PROJECT
              </Button>
              <Button className="w-full bg-cyan-400 text-black hover:bg-cyan-300 font-mono text-sm">
                <Plus size={14} className="mr-2" />
                ADD CERTIFICATION
              </Button>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-mono text-sm">
                <Edit size={14} className="mr-2" />
                UPDATE SKILLS
              </Button>
            </div>
          </div>

          <div className="border border-green-400 p-4 rounded">
            <h3 className="font-mono text-green-400 mb-3">SECTIONS</h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-2 rounded border font-mono text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-green-400 text-black border-green-400'
                      : 'border-green-400 text-green-300 hover:bg-green-400/10'
                  }`}
                >
                  {section.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-green-400 p-4 rounded">
            <h3 className="font-mono text-green-400 mb-3">CONTENT MANAGER</h3>
            {activeSection === 'dashboard' && (
              <div className="space-y-3">
                <div className="text-green-300 font-mono text-sm">
                  <div>Total Projects: 3</div>
                  <div>Total Certifications: 5</div>
                  <div>Last Updated: {new Date().toLocaleDateString()}</div>
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="space-y-3">
                <Button className="w-full bg-green-400 text-black font-mono text-sm">
                  <Plus size={14} className="mr-2" />
                  ADD NEW SKILL
                </Button>
                <div className="text-green-300 font-mono text-xs">
                  Current Skills: Python, JavaScript, Kali Linux, etc.
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="space-y-3">
                <Button className="w-full bg-green-400 text-black font-mono text-sm">
                  <Plus size={14} className="mr-2" />
                  ADD NEW PROJECT
                </Button>
                <div className="space-y-2">
                  {['Biometric Authentication System', 'Threat Intelligence Platform', 'Smart Resume Analyzer'].map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border border-green-400/30 rounded">
                      <span className="text-green-300 font-mono text-xs">{project}</span>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" className="border-green-400 text-green-400 h-6 w-6 p-0">
                          <Edit size={10} />
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-400 text-red-400 h-6 w-6 p-0">
                          <Trash2 size={10} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'certifications' && (
              <div className="space-y-3">
                <Button className="w-full bg-green-400 text-black font-mono text-sm">
                  <Plus size={14} className="mr-2" />
                  ADD CERTIFICATION
                </Button>
                <div className="space-y-2">
                  {['Introduction to Cyber Security', 'Cyber Security Fundamentals', 'Mobile App Development'].map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border border-green-400/30 rounded">
                      <span className="text-green-300 font-mono text-xs">{cert}</span>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" className="border-green-400 text-green-400 h-6 w-6 p-0">
                          <Edit size={10} />
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-400 text-red-400 h-6 w-6 p-0">
                          <Trash2 size={10} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border border-cyan-400 p-4 rounded">
            <h3 className="font-mono text-cyan-400 mb-3">SYSTEM STATUS</h3>
            <div className="font-mono text-xs space-y-1">
              <div className="text-green-400">● Website Online</div>
              <div className="text-green-400">● Admin Panel Active</div>
              <div className="text-green-400">● All Systems Operational</div>
              <div className="text-yellow-400">● Resume Download: FIXED</div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdminPanel;
