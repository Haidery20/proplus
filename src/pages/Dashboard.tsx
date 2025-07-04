import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DoctorDashboard from '../components/DoctorDashboard';
import PatientDashboard from '../components/PatientDashboard';
import Patients from '../components/Patients';
import Appointments from '../components/Appointments';
import Records from '../components/Records';
import Analytics from '../components/Analytics';
import Messages from '../components/Messages';
import Settings from '../components/Settings';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userRole, setUserRole] = useState<'doctor' | 'patient'>('doctor');

  // Role switcher for demo purposes - in real app this would come from auth
  const toggleRole = () => {
    setUserRole(userRole === 'doctor' ? 'patient' : 'doctor');
    setActiveTab('dashboard'); // Reset to dashboard when switching roles
  };

  const renderContent = () => {
    if (userRole === 'doctor') {
      switch (activeTab) {
        case 'dashboard':
          return <DoctorDashboard />;
        case 'patients':
          return <Patients />;
        case 'appointments':
          return <Appointments />;
        case 'records':
          return <Records />;
        case 'analytics':
          return <Analytics />;
        case 'messages':
          return <Messages />;
        case 'settings':
          return <Settings />;
        default:
          return <DoctorDashboard />;
      }
    } else {
      switch (activeTab) {
        case 'dashboard':
          return <PatientDashboard />;
        case 'appointments':
          return <PatientAppointments />;
        case 'health-records':
          return <PatientHealthRecords />;
        case 'medications':
          return <PatientMedications />;
        case 'test-results':
          return <PatientTestResults />;
        case 'telemedicine':
          return <PatientTelemedicine />;
        case 'messages':
          return <Messages />;
        case 'settings':
          return <Settings />;
        default:
          return <PatientDashboard />;
      }
    }
  };

  return (
    <div className="relative">
      {/* Role Switcher - Demo purposes only */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleRole}
          className={`px-4 py-2 rounded-lg font-medium text-white shadow-lg transition-all duration-200 ${
            userRole === 'doctor' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          Switch to {userRole === 'doctor' ? 'Patient' : 'Doctor'} View
        </button>
      </div>

      <DashboardLayout
        userRole={userRole}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      >
        {renderContent()}
      </DashboardLayout>
    </div>
  );
};

// Patient-specific components (simplified versions)
const PatientAppointments: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-600">Patient appointments view - showing upcoming and past appointments</p>
    </div>
  </div>
);

const PatientHealthRecords: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">My Health Records</h1>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-600">Patient health records view - showing medical history, diagnoses, and treatments</p>
    </div>
  </div>
);

const PatientMedications: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">My Medications</h1>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-600">Patient medications view - showing current prescriptions and medication schedule</p>
    </div>
  </div>
);

const PatientTestResults: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Test Results</h1>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-600">Patient test results view - showing lab results, imaging, and other diagnostic tests</p>
    </div>
  </div>
);

const PatientTelemedicine: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Telemedicine</h1>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-600">Patient telemedicine view - showing video consultation options and history</p>
    </div>
  </div>
);

export default Dashboard;