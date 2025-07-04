import React from 'react';
import {
  Users,
  Calendar,
  Activity,
  TrendingUp,
  Clock,
  UserCheck,
  AlertTriangle,
  Heart,
  Stethoscope,
  FileText,
  MessageSquare,
  Video,
  Plus,
  ArrowRight,
  CheckCircle,
  XCircle
} from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Patients',
      value: '1,248',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Today\'s Appointments',
      value: '24',
      change: '+3',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Active Cases',
      value: '156',
      change: '-8%',
      changeType: 'negative',
      icon: Activity,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'Recovery Rate',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    }
  ];

  const todayAppointments = [
    { 
      id: '1', 
      patient: 'Emily Johnson', 
      time: '9:00 AM', 
      type: 'Consultation', 
      status: 'confirmed',
      avatar: 'EJ',
      condition: 'Hypertension Follow-up'
    },
    { 
      id: '2', 
      patient: 'Michael Chen', 
      time: '10:30 AM', 
      type: 'Follow-up', 
      status: 'confirmed',
      avatar: 'MC',
      condition: 'Diabetes Management'
    },
    { 
      id: '3', 
      patient: 'Sarah Davis', 
      time: '2:00 PM', 
      type: 'Checkup', 
      status: 'pending',
      avatar: 'SD',
      condition: 'Annual Physical'
    },
    { 
      id: '4', 
      patient: 'Robert Wilson', 
      time: '3:30 PM', 
      type: 'Emergency', 
      status: 'urgent',
      avatar: 'RW',
      condition: 'Chest Pain Evaluation'
    },
  ];

  const recentPatients = [
    { 
      id: '1', 
      name: 'Alice Cooper', 
      condition: 'Hypertension', 
      lastVisit: '2 days ago', 
      status: 'stable',
      avatar: 'AC',
      nextAction: 'Medication Review'
    },
    { 
      id: '2', 
      name: 'John Smith', 
      condition: 'Diabetes Type 2', 
      lastVisit: '1 week ago', 
      status: 'monitoring',
      avatar: 'JS',
      nextAction: 'Lab Results Review'
    },
    { 
      id: '3', 
      name: 'Maria Garcia', 
      condition: 'Asthma', 
      lastVisit: '3 days ago', 
      status: 'stable',
      avatar: 'MG',
      nextAction: 'Inhaler Refill'
    },
    { 
      id: '4', 
      name: 'David Brown', 
      condition: 'Arthritis', 
      lastVisit: '5 days ago', 
      status: 'improving',
      avatar: 'DB',
      nextAction: 'Physical Therapy'
    },
  ];

  const quickActions = [
    { icon: Plus, label: 'New Patient', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Calendar, label: 'Schedule Appointment', color: 'bg-green-600 hover:bg-green-700' },
    { icon: FileText, label: 'Create Record', color: 'bg-purple-600 hover:bg-purple-700' },
    { icon: Video, label: 'Start Video Call', color: 'bg-orange-600 hover:bg-orange-700' },
  ];

  const alerts = [
    {
      id: '1',
      type: 'critical',
      message: 'Patient John Doe has critical lab results requiring immediate attention',
      time: '5 minutes ago',
      icon: AlertTriangle
    },
    {
      id: '2',
      type: 'warning',
      message: 'Medication interaction detected for patient Sarah Wilson',
      time: '15 minutes ago',
      icon: AlertTriangle
    },
    {
      id: '3',
      type: 'info',
      message: 'New message from patient Emily Johnson',
      time: '30 minutes ago',
      icon: MessageSquare
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Good morning, Dr. Wilson</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your practice today.</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <div className="text-right">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`${action.color} text-white p-4 rounded-xl flex items-center space-x-3 transition-all duration-200 transform hover:scale-105 shadow-lg`}
            >
              <Icon className="w-6 h-6" />
              <span className="font-medium">{action.label}</span>
            </button>
          );
        })}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-4">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Today's Appointments</h2>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">{todayAppointments.length} scheduled</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{appointment.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{appointment.patient}</p>
                      <p className="text-sm text-gray-500">{appointment.condition}</p>
                      <p className="text-xs text-gray-400">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {appointment.status}
                    </span>
                    <div className="flex items-center space-x-1 mt-2">
                      <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <XCircle className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Video className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-2 py-2">
              <span>View All Appointments</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Alerts & Notifications</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert) => {
                const Icon = alert.icon;
                return (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'critical' ? 'bg-red-50 border-red-500' :
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-blue-50 border-blue-500'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <Icon className={`w-5 h-5 mt-0.5 ${
                        alert.type === 'critical' ? 'text-red-600' :
                        alert.type === 'warning' ? 'text-yellow-600' :
                        'text-blue-600'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Patients */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Recent Patients</h2>
            <Heart className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-green-600">{patient.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{patient.name}</p>
                    <p className="text-xs text-gray-500">{patient.lastVisit}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">{patient.condition}</p>
                  <p className="text-xs text-blue-600">{patient.nextAction}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    patient.status === 'stable' ? 'bg-green-100 text-green-800' :
                    patient.status === 'monitoring' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {patient.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Metrics Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Practice Performance</h2>
          <p className="text-gray-600 mt-1">Key metrics for your practice this week</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-blue-600">847</p>
              <p className="text-sm text-gray-600">Consultations This Week</p>
              <p className="text-xs text-green-600 mt-1">+12% from last week</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-green-600">96.2%</p>
              <p className="text-sm text-gray-600">Patient Satisfaction</p>
              <p className="text-xs text-green-600 mt-1">+2.1% from last month</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-orange-600">12</p>
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-xs text-orange-600 mt-1">Requires attention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;