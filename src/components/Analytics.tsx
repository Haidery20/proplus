import React from 'react';
import {
  TrendingUp,
  Activity,
  Heart,
  Thermometer,
  Weight,
  Zap,
  Users,
  Calendar,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const Analytics: React.FC = () => {
  const healthMetrics = [
    {
      title: 'Average Blood Pressure',
      value: '120/80',
      change: '-5%',
      changeType: 'positive',
      icon: Heart,
      color: 'bg-red-500',
      description: 'mmHg'
    },
    {
      title: 'Average Heart Rate',
      value: '72',
      change: '+2%',
      changeType: 'neutral',
      icon: Activity,
      color: 'bg-pink-500',
      description: 'bpm'
    },
    {
      title: 'Average Temperature',
      value: '98.6°F',
      change: '0%',
      changeType: 'neutral',
      icon: Thermometer,
      color: 'bg-orange-500',
      description: 'Normal range'
    },
    {
      title: 'Average Weight',
      value: '165',
      change: '-2%',
      changeType: 'positive',
      icon: Weight,
      color: 'bg-blue-500',
      description: 'lbs'
    }
  ];

  const patientInsights = [
    {
      title: 'Patient Satisfaction',
      value: '94.2%',
      icon: CheckCircle,
      color: 'text-green-600',
      description: 'Based on 247 surveys'
    },
    {
      title: 'Treatment Success Rate',
      value: '89.7%',
      icon: TrendingUp,
      color: 'text-blue-600',
      description: 'Successful outcomes'
    },
    {
      title: 'Follow-up Compliance',
      value: '76.3%',
      icon: Calendar,
      color: 'text-purple-600',
      description: 'Attended appointments'
    },
    {
      title: 'Risk Alerts',
      value: '12',
      icon: AlertTriangle,
      color: 'text-orange-600',
      description: 'Requiring attention'
    }
  ];

  const conditionStats = [
    { condition: 'Hypertension', count: 45, percentage: 36.0, color: 'bg-red-400' },
    { condition: 'Diabetes', count: 32, percentage: 25.6, color: 'bg-orange-400' },
    { condition: 'Asthma', count: 28, percentage: 22.4, color: 'bg-blue-400' },
    { condition: 'Heart Disease', count: 20, percentage: 16.0, color: 'bg-purple-400' }
  ];

  const monthlyTrends = [
    { month: 'Jan', appointments: 120, newPatients: 15 },
    { month: 'Feb', appointments: 135, newPatients: 18 },
    { month: 'Mar', appointments: 142, newPatients: 22 },
    { month: 'Apr', appointments: 128, newPatients: 16 },
    { month: 'May', appointments: 155, newPatients: 25 },
    { month: 'Jun', appointments: 168, newPatients: 28 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Health Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive health metrics and insights</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
                  <div className="flex items-center mt-4">
                    <span className={`text-sm font-medium ${
                      metric.changeType === 'positive' ? 'text-green-600' : 
                      metric.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Patient Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {patientInsights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{insight.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{insight.value}</p>
                  <p className="text-xs text-gray-500">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Common Conditions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Most Common Conditions</h2>
            <p className="text-gray-600 mt-1">Distribution of patient conditions</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {conditionStats.map((condition, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${condition.color}`}></div>
                    <span className="font-medium text-gray-900">{condition.condition}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">{condition.count} patients</span>
                    <span className="text-sm font-medium text-gray-900">{condition.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 space-y-2">
              {conditionStats.map((condition, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{condition.condition}</span>
                    <span className="text-gray-900">{condition.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${condition.color}`}
                      style={{ width: `${condition.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Monthly Trends</h2>
            <p className="text-gray-600 mt-1">Appointments and new patient trends</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {monthlyTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">{trend.month}</span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="text-gray-600">Appointments</p>
                      <p className="font-semibold text-gray-900">{trend.appointments}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600">New Patients</p>
                      <p className="font-semibold text-gray-900">{trend.newPatients}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Key Performance Indicators</h2>
          <p className="text-gray-600 mt-1">Practice performance overview</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">1,248</p>
              <p className="text-sm text-gray-600">Total Patients</p>
              <p className="text-xs text-green-600 mt-1">+12% this month</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">856</p>
              <p className="text-sm text-gray-600">Appointments</p>
              <p className="text-xs text-green-600 mt-1">+8% this month</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">2,847</p>
              <p className="text-sm text-gray-600">Health Records</p>
              <p className="text-xs text-blue-600 mt-1">+15% this month</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-600">94.2%</p>
              <p className="text-sm text-gray-600">Efficiency Score</p>
              <p className="text-xs text-green-600 mt-1">+2.1% this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;