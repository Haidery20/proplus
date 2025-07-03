import React, { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  User,
  Phone,
  Mail,
  Calendar,
  Heart,
  AlertTriangle,
  Eye,
  Edit,
  MoreVertical
} from 'lucide-react';
import { Patient } from '../types';

const Patients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const patients: Patient[] = [
    {
      id: '1',
      name: 'Emily Johnson',
      email: 'emily.johnson@email.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1985-03-15',
      gender: 'female',
      bloodType: 'A+',
      allergies: ['Penicillin', 'Shellfish'],
      conditions: ['Hypertension'],
      lastVisit: '2024-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 234-5678',
      dateOfBirth: '1972-08-22',
      gender: 'male',
      bloodType: 'B+',
      allergies: ['Aspirin'],
      conditions: ['Diabetes Type 2', 'High Cholesterol'],
      lastVisit: '2024-01-12',
      status: 'active'
    },
    {
      id: '3',
      name: 'Sarah Davis',
      email: 'sarah.davis@email.com',
      phone: '+1 (555) 345-6789',
      dateOfBirth: '1990-11-08',
      gender: 'female',
      bloodType: 'O-',
      allergies: [],
      conditions: ['Asthma'],
      lastVisit: '2024-01-10',
      status: 'active'
    },
    {
      id: '4',
      name: 'Robert Wilson',
      email: 'robert.wilson@email.com',
      phone: '+1 (555) 456-7890',
      dateOfBirth: '1968-05-30',
      gender: 'male',
      bloodType: 'AB+',
      allergies: ['Latex'],
      conditions: ['Arthritis', 'Heart Disease'],
      lastVisit: '2023-12-28',
      status: 'inactive'
    },
    {
      id: '5',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 567-8901',
      dateOfBirth: '1988-09-14',
      gender: 'female',
      bloodType: 'A-',
      allergies: ['Peanuts'],
      conditions: [],
      lastVisit: '2024-01-14',
      status: 'active'
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || patient.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-gray-600 mt-1">Manage and monitor all patient records</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <Plus className="w-4 h-4" />
          <span>Add Patient</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Patients</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Patients List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Patients ({filteredPatients.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        patient.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {patient.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{patient.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Age: {calculateAge(patient.dateOfBirth)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>Blood Type: {patient.bloodType}</span>
                      </div>
                    </div>

                    {/* Conditions and Allergies */}
                    <div className="mt-3 space-y-2">
                      {patient.conditions.length > 0 && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Conditions:</span>
                          <div className="flex flex-wrap gap-1">
                            {patient.conditions.map((condition, index) => (
                              <span key={index} className="inline-flex px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">
                                {condition}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {patient.allergies.length > 0 && (
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-500">Allergies:</span>
                          <div className="flex flex-wrap gap-1">
                            {patient.allergies.map((allergy, index) => (
                              <span key={index} className="inline-flex px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                                {allergy}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 text-sm text-gray-500">
                      Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;