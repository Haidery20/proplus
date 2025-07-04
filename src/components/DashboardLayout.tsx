import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Activity,
  MessageSquare,
  Settings,
  User,
  Heart,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
  Stethoscope,
  Pill,
  ClipboardList,
  Video,
  Phone,
  Shield
} from 'lucide-react';

interface DashboardLayoutProps {
  userRole: 'doctor' | 'patient';
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  userRole, 
  activeTab, 
  onTabChange, 
  children 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const doctorMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const patientMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    { id: 'health-records', label: 'Health Records', icon: FileText },
    { id: 'medications', label: 'Medications', icon: Pill },
    { id: 'test-results', label: 'Test Results', icon: ClipboardList },
    { id: 'telemedicine', label: 'Telemedicine', icon: Video },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const menuItems = userRole === 'doctor' ? doctorMenuItems : patientMenuItems;

  const userInfo = userRole === 'doctor' 
    ? { name: 'Dr. Sarah Wilson', role: 'Primary Care Physician', avatar: 'SW' }
    : { name: 'John Smith', role: 'Patient', avatar: 'JS' };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className={`p-2 rounded-lg ${userRole === 'doctor' ? 'bg-blue-600' : 'bg-green-600'}`}>
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ProPlus</h1>
              <p className="text-xs text-gray-500 capitalize">{userRole} Portal</p>
            </div>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onTabChange(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                      activeTab === item.id
                        ? userRole === 'doctor'
                          ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                          : 'bg-green-50 text-green-700 border-r-4 border-green-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-200 ${
                        activeTab === item.id
                          ? userRole === 'doctor'
                            ? 'text-blue-600'
                            : 'text-green-600'
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors duration-200">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
              userRole === 'doctor' ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {userInfo.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{userInfo.name}</p>
              <p className="text-xs text-gray-500 truncate">{userInfo.role}</p>
            </div>
          </div>
          <Link 
            to="/"
            className="w-full mt-2 flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-100 h-16 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={userRole === 'doctor' ? 'Search patients, appointments...' : 'Search records, appointments...'}
                  className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Quick Actions */}
            {userRole === 'doctor' && (
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <Stethoscope className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                  <Video className="w-5 h-5" />
                </button>
              </div>
            )}

            {userRole === 'patient' && (
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <Video className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                userRole === 'doctor' ? 'bg-blue-600' : 'bg-green-600'
              }`}>
                {userInfo.avatar}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;