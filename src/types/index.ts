export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  bloodType: string;
  allergies: string[];
  conditions: string[];
  lastVisit: string;
  status: 'active' | 'inactive';
  avatar?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  time: string;
  type: 'consultation' | 'checkup' | 'follow-up' | 'emergency';
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
}

export interface HealthMetric {
  id: string;
  patientId: string;
  type: 'blood_pressure' | 'heart_rate' | 'weight' | 'temperature' | 'glucose';
  value: number;
  unit: string;
  date: string;
  notes?: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  title: string;
  type: 'prescription' | 'lab_result' | 'diagnosis' | 'procedure' | 'image';
  date: string;
  provider: string;
  content: string;
  attachments?: string[];
}