import React, { useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  Plus,
  Calendar,
  User,
  Stethoscope,
  Activity,
  Image,
  Pill
} from 'lucide-react';
import { MedicalRecord } from '../types';

const Records: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const records: MedicalRecord[] = [
    {
      id: '1',
      patientId: '1',
      title: 'Blood Pressure Medication Prescription',
      type: 'prescription',
      date: '2024-01-15',
      provider: 'Dr. Sarah Wilson',
      content: 'Prescribed Lisinopril 10mg once daily for hypertension management. Patient responding well to current dosage.'
    },
    {
      id: '2',
      patientId: '2',
      title: 'Complete Blood Count Results',
      type: 'lab_result',
      date: '2024-01-12',
      provider: 'Lab Tech Mike Johnson',
      content: 'CBC results show slight elevation in glucose levels. Recommend dietary consultation and follow-up in 3 months.'
    },
    {
      id: '3',
      patientId: '3',
      title: 'Asthma Diagnosis and Treatment Plan',
      type: 'diagnosis',
      date: '2024-01-10',
      provider: 'Dr. Sarah Wilson',
      content: 'Confirmed asthma diagnosis based on spirometry results. Prescribed albuterol inhaler for emergency use.'
    },
    {
      id: '4',
      patientId: '4',
      title: 'Chest X-Ray Imaging',
      type: 'image',
      date: '2024-01-08',
      provider: 'Radiology Department',
      content: 'Chest X-ray shows no acute abnormalities. Heart size within normal limits. Lungs clear bilaterally.'
    },
    {
      id: '5',
      patientId: '5',
      title: 'Knee Arthroscopy Procedure',
      type: 'procedure',
      date: '2024-01-05',
      provider: 'Dr. Michael Chang',
      content: 'Successful arthroscopic procedure to repair meniscal tear. Patient recovering well, physical therapy recommended.'
    },
    {
      id: '6',
      patientId: '1',
      title: 'Annual Physical Examination',
      type: 'diagnosis',
      date: '2024-01-03',
      provider: 'Dr. Sarah Wilson',
      content: 'Comprehensive physical exam completed. Overall health good, continue current medications and lifestyle modifications.'
    }
  ];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || record.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'prescription':
        return <Pill className="w-5 h-5" />;
      case 'lab_result':
        return <Activity className="w-5 h-5" />;
      case 'diagnosis':
        return <Stethoscope className="w-5 h-5" />;
      case 'procedure':
        return <FileText className="w-5 h-5" />;
      case 'image':
        return <Image className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'prescription':
        return 'bg-green-100 text-green-800';
      case 'lab_result':
        return 'bg-blue-100 text-blue-800';
      case 'diagnosis':
        return 'bg-purple-100 text-purple-800';
      case 'procedure':
        return 'bg-orange-100 text-orange-800';
      case 'image':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatType = (type: string) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-600 mt-1">Access and manage patient medical records</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <Plus className="w-4 h-4" />
          <span>Add Record</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search records by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Types</option>
                <option value="prescription">Prescriptions</option>
                <option value="lab_result">Lab Results</option>
                <option value="diagnosis">Diagnoses</option>
                <option value="procedure">Procedures</option>
                <option value="image">Images</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Records List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Medical Records ({filteredRecords.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {filteredRecords.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <FileText className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <p>No medical records found</p>
            </div>
          ) : (
            filteredRecords.map((record) => (
              <div key={record.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-3 rounded-full ${getTypeColor(record.type).replace('text-', 'text-').replace('bg-', 'bg-')}`}>
                      {getTypeIcon(record.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(record.type)}`}>
                          {formatType(record.type)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(record.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{record.provider}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{record.content}</p>
                      
                      {record.attachments && record.attachments.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm text-gray-500 mb-2">Attachments:</p>
                          <div className="flex flex-wrap gap-2">
                            {record.attachments.map((attachment, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md">
                                <FileText className="w-3 h-3 mr-1" />
                                {attachment}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { type: 'prescription', label: 'Prescriptions', count: records.filter(r => r.type === 'prescription').length, color: 'bg-green-500' },
          { type: 'lab_result', label: 'Lab Results', count: records.filter(r => r.type === 'lab_result').length, color: 'bg-blue-500' },
          { type: 'diagnosis', label: 'Diagnoses', count: records.filter(r => r.type === 'diagnosis').length, color: 'bg-purple-500' },
          { type: 'procedure', label: 'Procedures', count: records.filter(r => r.type === 'procedure').length, color: 'bg-orange-500' },
          { type: 'image', label: 'Images', count: records.filter(r => r.type === 'image').length, color: 'bg-pink-500' }
        ].map((stat) => (
          <div key={stat.type} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.count}</p>
              </div>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                {getTypeIcon(stat.type)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;