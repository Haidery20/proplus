import React from 'react';
import {
  Calendar,
  Heart,
  Activity,
  Pill,
  FileText,
  Clock,
  User,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Video,
  Phone,
  MessageSquare,
  Download,
  Upload,
  Bell,
  Shield,
  Plus,
  ArrowRight
} from 'lucide-react';

const PatientDashboard: React.FC = () => {
  const healthStats = [
    {
      title: 'Blood Pressure',
      value: '120/80',
      status: 'normal',
      lastUpdated: '2 hours ago',
      icon: Heart,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Heart Rate',
      value: '72 bpm',
      status: 'normal',
      lastUpdated: '2 hours ago',
      icon: Activity,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Weight',
      value: '165 lbs',
      status: 'stable',
      lastUpdated: '1 week ago',
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Next Appointment',
      value: 'Jan 25',
      status: 'scheduled',
      lastUpdated: 'Dr. Wilson',
      icon: Calendar,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const upcomingAppointments = [
    {
      id: '1',
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Primary Care',
      date: 'January 25, 2024',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'confirmed',
      avatar: 'SW'
    },
    {
      id: '2',
      doctor: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      date: 'February 2, 2024',
      time: '2:00 PM',
      type: 'Consultation',
      status: 'confirmed',
      avatar: 'MC'
    },
    {
      id: '3',
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      date: 'February 8, 2024',
      time: '11:15 AM',
      type: 'Checkup',
      status: 'pending',
      avatar: 'ER'
    }
  ];

  const medications = [
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      timeToTake: '8:00 AM',
      taken: true,
      pillsLeft: 25
    },
    {
      id: '2',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      timeToTake: '8:00 AM, 8:00 PM',
      taken: false,
      pillsLeft: 18
    },
    {
      id: '3',
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      timeToTake: '8:00 AM',
      taken: true,
      pillsLeft: 45
    }
  ];

  const recentResults = [
    {
      id: '1',
      test: 'Complete Blood Count',
      date: 'January 15, 2024',
      status: 'normal',
      doctor: 'Dr. Sarah Wilson'
    },
    {
      id: '2',
      test: 'Lipid Panel',
      date: 'January 10, 2024',
      status: 'review',
      doctor: 'Dr. Sarah Wilson'
    },
    {
      id: '3',
      test: 'Chest X-Ray',
      date: 'January 5, 2024',
      status: 'normal',
      doctor: 'Dr. Michael Chen'
    }
  ];

  const quickActions = [
    { icon: Calendar, label: 'Book Appointment', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Video, label: 'Start Video Call', color: 'bg-green-600 hover:bg-green-700' },
    { icon: MessageSquare, label: 'Message Doctor', color: 'bg-purple-600 hover:bg-purple-700' },
    { icon: Upload, label: 'Upload Document', color: 'bg-orange-600 hover:bg-orange-700' },
  ];

  const healthTips = [
    {
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily for optimal health.',
      icon: '💧'
    },
    {
      title: 'Regular Exercise',
      description: 'Aim for 30 minutes of moderate exercise 5 days a week.',
      icon: '🏃‍♂️'
    },
    {
      title: 'Healthy Diet',
      description: 'Include plenty of fruits and vegetables in your daily meals.',
      icon: '🥗'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-1">Here's your health overview and upcoming appointments.</p>
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

      {/* Health Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      stat.status === 'normal' ? 'bg-green-100 text-green-800' :
                      stat.status === 'stable' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {stat.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{stat.lastUpdated}</p>
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
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-600">{appointment.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{appointment.doctor}</p>
                      <p className="text-sm text-gray-500">{appointment.specialty}</p>
                      <p className="text-xs text-gray-400">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full mt-1 ${
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                    <div className="flex items-center space-x-1 mt-2">
                      <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                        <Video className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-purple-600 hover:bg-purple-50 rounded">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-green-600 hover:text-green-700 font-medium flex items-center justify-center space-x-2 py-2">
              <Plus className="w-4 h-4" />
              <span>Book New Appointment</span>
            </button>
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Health Tips</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {healthTips.map((tip, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{tip.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{tip.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Medications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Today's Medications</h2>
              <Pill className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {medications.map((medication) => (
                <div key={medication.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      medication.taken ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      <Pill className={`w-5 h-5 ${
                        medication.taken ? 'text-green-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{medication.name}</p>
                      <p className="text-sm text-gray-500">{medication.dosage} - {medication.frequency}</p>
                      <p className="text-xs text-gray-400">{medication.pillsLeft} pills left</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{medication.timeToTake}</p>
                    {medication.taken ? (
                      <span className="inline-flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Taken
                      </span>
                    ) : (
                      <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                        Mark as Taken
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Test Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Test Results</h2>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentResults.map((result) => (
                <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      result.status === 'normal' ? 'bg-green-100' : 'bg-yellow-100'
                    }`}>
                      <FileText className={`w-5 h-5 ${
                        result.status === 'normal' ? 'text-green-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{result.test}</p>
                      <p className="text-sm text-gray-500">{result.doctor}</p>
                      <p className="text-xs text-gray-400">{result.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      result.status === 'normal' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.status}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-blue-600">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-2 py-2">
              <span>View All Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Health Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Health Progress</h2>
          <p className="text-gray-600 mt-1">Track your health metrics over time</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-blue-600">120/80</p>
              <p className="text-sm text-gray-600">Average Blood Pressure</p>
              <p className="text-xs text-green-600 mt-1">Improved from last month</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-green-600">8,500</p>
              <p className="text-sm text-gray-600">Daily Steps Average</p>
              <p className="text-xs text-green-600 mt-1">Goal: 10,000 steps</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-purple-600">165 lbs</p>
              <p className="text-sm text-gray-600">Current Weight</p>
              <p className="text-xs text-purple-600 mt-1">Stable this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;