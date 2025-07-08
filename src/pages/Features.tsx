import React, { useState } from 'react';
import {
  Heart,
  Users,
  Calendar,
  FileText,
  Activity,
  MessageSquare,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Search,
  Bell,
  Smartphone,
  Cloud,
  Lock,
  Zap,
  BarChart3,
  Stethoscope,
  Pill,
  Image,
  Video,
  Globe,
  Database,
  Wifi,
  Settings,
  UserCheck,
  ClipboardList,
  TrendingUp,
  AlertTriangle,
  Eye,
  Download,
  Upload,
  RefreshCcw,
  Monitor,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'patient-management' | 'scheduling' | 'records' | 'analytics' | 'communication' | 'security'>('patient-management');

  const featureCategories: { id: 'patient-management' | 'scheduling' | 'records' | 'analytics' | 'communication' | 'security'; title: string; icon: React.FC; color: string }[] = [
      {
        id: 'patient-management',
        title: 'Patient Management',
        icon: Users,
        color: 'bg-blue-500'
      },
      {
        id: 'scheduling',
        title: 'Smart Scheduling',
        icon: Calendar,
        color: 'bg-green-500'
      },
      {
        id: 'records',
        title: 'Digital Records',
        icon: FileText,
        color: 'bg-purple-500'
      },
      {
        id: 'analytics',
        title: 'Health Analytics',
        icon: Activity,
        color: 'bg-orange-500'
      },
      {
        id: 'communication',
        title: 'Communication',
        icon: MessageSquare,
        color: 'bg-pink-500'
      },
      {
        id: 'security',
        title: 'Security & Compliance',
        icon: Shield,
        color: 'bg-indigo-500'
      }
    ];

  const allFeatures = {
    'patient-management': {
      title: 'Comprehensive Patient Management',
      description: 'Complete patient profiles with advanced management capabilities for better care coordination.',
      features: [
        {
          icon: UserCheck,
          title: 'Complete Patient Profiles',
          description: 'Comprehensive patient information including demographics, medical history, allergies, medications, and emergency contacts all in one secure location.',
          benefits: ['360-degree patient view', 'Reduced medical errors', 'Faster decision making']
        },
        {
          icon: Heart,
          title: 'Medical History Tracking',
          description: 'Detailed medical history with chronological timeline, family history, and genetic predispositions for informed care decisions.',
          benefits: ['Better diagnosis accuracy', 'Preventive care planning', 'Risk assessment']
        },
        {
          icon: Pill,
          title: 'Medication Management',
          description: 'Track current medications, dosages, interactions, and prescription history with automated alerts for potential conflicts.',
          benefits: ['Drug interaction prevention', 'Adherence monitoring', 'Prescription tracking']
        },
        {
          icon: AlertTriangle,
          title: 'Allergy & Alert System',
          description: 'Prominent allergy alerts and medical warnings that appear across all patient interactions to ensure safety.',
          benefits: ['Enhanced patient safety', 'Reduced adverse reactions', 'Clear visual warnings']
        },
        {
          icon: ClipboardList,
          title: 'Care Plan Management',
          description: 'Create and manage personalized care plans with treatment goals, milestones, and progress tracking.',
          benefits: ['Coordinated care', 'Goal tracking', 'Treatment optimization']
        },
        {
          icon: Search,
          title: 'Advanced Patient Search',
          description: 'Powerful search capabilities to quickly find patients by name, ID, phone, email, or medical conditions.',
          benefits: ['Quick patient lookup', 'Efficient workflow', 'Time savings']
        }
      ]
    },
    'scheduling': {
      title: 'Intelligent Scheduling System',
      description: 'Smart appointment management with automated features for optimal practice efficiency.',
      features: [
        {
          icon: Calendar,
          title: 'Smart Appointment Booking',
          description: 'Intelligent scheduling system that considers provider availability, patient preferences, and appointment types for optimal booking.',
          benefits: ['Reduced scheduling conflicts', 'Optimized provider time', 'Better patient satisfaction']
        },
        {
          icon: Bell,
          title: 'Automated Reminders',
          description: 'Customizable reminder system via SMS, email, and phone calls to reduce no-shows and improve attendance.',
          benefits: ['Reduced no-shows by 40%', 'Improved attendance', 'Multiple reminder channels']
        },
        /*{
          icon: Sync,
          title: 'Calendar Integration',
          description: 'Seamless integration with popular calendar applications including Google Calendar, Outlook, and Apple Calendar.',
          benefits: ['Unified scheduling', 'Real-time sync', 'Cross-platform access']
        },*/
        {
          icon: Clock,
          title: 'Waitlist Management',
          description: 'Automated waitlist system that fills cancellations and optimizes schedule utilization with smart notifications.',
          benefits: ['Maximized schedule efficiency', 'Reduced gaps', 'Automated filling']
        },
        {
          icon: Video,
          title: 'Telemedicine Integration',
          description: 'Built-in video consultation capabilities with secure, HIPAA-compliant virtual appointments.',
          benefits: ['Remote care delivery', 'Increased accessibility', 'Flexible consultation options']
        },
        {
          icon: BarChart3,
          title: 'Schedule Analytics',
          description: 'Detailed analytics on appointment patterns, no-show rates, and provider utilization for optimization.',
          benefits: ['Data-driven decisions', 'Performance insights', 'Schedule optimization']
        }
      ]
    },
    'records': {
      title: 'Advanced Digital Records',
      description: 'Comprehensive electronic health records with powerful search and management capabilities.',
      features: [
        {
          icon: FileText,
          title: 'Electronic Health Records',
          description: 'Complete digital medical records with structured data entry, templates, and customizable forms for efficient documentation.',
          benefits: ['Paperless workflow', 'Structured documentation', 'Quick data entry']
        },
        {
          icon: Image,
          title: 'Medical Imaging Integration',
          description: 'Store, view, and share medical images including X-rays, MRIs, CT scans with DICOM support and annotation tools.',
          benefits: ['Centralized imaging', 'Easy sharing', 'Annotation capabilities']
        },
        {
          icon: Database,
          title: 'Lab Results Management',
          description: 'Automated lab result integration with trending analysis, normal range indicators, and alert systems for critical values.',
          benefits: ['Automated integration', 'Trend analysis', 'Critical value alerts']
        },
        {
          icon: Search,
          title: 'Advanced Search & Filtering',
          description: 'Powerful search across all records with filters by date, provider, condition, or custom criteria for quick information retrieval.',
          benefits: ['Quick information access', 'Efficient research', 'Custom filtering']
        },
        {
          icon: Download,
          title: 'Document Management',
          description: 'Secure document storage with version control, digital signatures, and automated backup for all medical documents.',
          benefits: ['Version control', 'Digital signatures', 'Secure storage']
        },
        {
          icon: Eye,
          title: 'Audit Trail & Compliance',
          description: 'Complete audit trail of all record access and modifications with compliance reporting for regulatory requirements.',
          benefits: ['Full audit trail', 'Compliance reporting', 'Access tracking']
        }
      ]
    },
    'analytics': {
      title: 'Comprehensive Health Analytics',
      description: 'Advanced analytics and reporting tools for data-driven healthcare decisions.',
      features: [
        {
          icon: TrendingUp,
          title: 'Health Trend Analysis',
          description: 'Track patient health trends over time with visual charts, predictive analytics, and early warning systems.',
          benefits: ['Predictive insights', 'Early intervention', 'Visual trend tracking']
        },
        {
          icon: BarChart3,
          title: 'Practice Performance Metrics',
          description: 'Comprehensive dashboard showing practice efficiency, patient satisfaction, financial performance, and quality metrics.',
          benefits: ['Performance insights', 'Quality metrics', 'Financial tracking']
        },
        {
          icon: Activity,
          title: 'Population Health Management',
          description: 'Analyze patient populations for disease patterns, risk factors, and preventive care opportunities.',
          benefits: ['Population insights', 'Risk stratification', 'Preventive care planning']
        },
        {
          icon: Monitor,
          title: 'Real-time Dashboards',
          description: 'Customizable real-time dashboards with key performance indicators, alerts, and actionable insights.',
          benefits: ['Real-time monitoring', 'Custom dashboards', 'Actionable insights']
        },
        {
          icon: ClipboardList,
          title: 'Quality Reporting',
          description: 'Automated quality measure reporting for HEDIS, MIPS, and other regulatory requirements with submission tools.',
          benefits: ['Automated reporting', 'Regulatory compliance', 'Quality measures']
        },
        {
          icon: Zap,
          title: 'Predictive Analytics',
          description: 'AI-powered predictive models for patient risk assessment, readmission prevention, and care optimization.',
          benefits: ['AI-powered insights', 'Risk prediction', 'Care optimization']
        }
      ]
    },
    'communication': {
      title: 'Secure Communication Platform',
      description: 'HIPAA-compliant communication tools for seamless provider-patient interactions.',
      features: [
        {
          icon: MessageSquare,
          title: 'Secure Messaging',
          description: 'HIPAA-compliant messaging system with encryption, read receipts, and automated archiving for all communications.',
          benefits: ['HIPAA compliance', 'Secure communication', 'Message archiving']
        },
        {
          icon: Video,
          title: 'Video Consultations',
          description: 'Built-in telemedicine platform with HD video, screen sharing, and recording capabilities for virtual care.',
          benefits: ['Remote consultations', 'HD video quality', 'Session recording']
        },
        {
          icon: Bell,
          title: 'Patient Notifications',
          description: 'Automated patient notifications for appointments, test results, medication reminders, and health alerts.',
          benefits: ['Automated notifications', 'Multiple channels', 'Customizable alerts']
        },
        {
          icon: Smartphone,
          title: 'Mobile Communication',
          description: 'Mobile-optimized communication tools allowing secure messaging and notifications on any device.',
          benefits: ['Mobile accessibility', 'Cross-platform sync', 'On-the-go communication']
        },
        {
          icon: Globe,
          title: 'Patient Portal Integration',
          description: 'Integrated patient portal for appointment scheduling, test results access, and direct provider communication.',
          benefits: ['Patient self-service', 'Direct access', 'Reduced admin burden']
        },
        {
          icon: FileText,
          title: 'Communication History',
          description: 'Complete communication history with search capabilities, categorization, and integration with patient records.',
          benefits: ['Complete history', 'Easy search', 'Record integration']
        }
      ]
    },
    'security': {
      title: 'Enterprise Security & Compliance',
      description: 'Advanced security measures and compliance tools to protect sensitive healthcare data.',
      features: [
        {
          icon: Shield,
          title: 'HIPAA Compliance',
          description: 'Full HIPAA compliance with business associate agreements, risk assessments, and compliance monitoring tools.',
          benefits: ['HIPAA certified', 'Risk assessments', 'Compliance monitoring']
        },
        {
          icon: Lock,
          title: 'End-to-End Encryption',
          description: 'Military-grade encryption for data at rest and in transit with advanced key management and secure protocols.',
          benefits: ['Military-grade encryption', 'Secure transmission', 'Key management']
        },
        {
          icon: UserCheck,
          title: 'Multi-Factor Authentication',
          description: 'Advanced authentication with biometric options, smart cards, and mobile authenticators for secure access.',
          benefits: ['Enhanced security', 'Multiple auth methods', 'Biometric support']
        },
        {
          icon: Eye,
          title: 'Access Control & Monitoring',
          description: 'Role-based access control with detailed permissions, activity monitoring, and automated security alerts.',
          benefits: ['Role-based access', 'Activity monitoring', 'Security alerts']
        },
        {
          icon: Cloud,
          title: 'Secure Cloud Infrastructure',
          description: 'Enterprise-grade cloud infrastructure with redundancy, disaster recovery, and 99.9% uptime guarantee.',
          benefits: ['High availability', 'Disaster recovery', 'Redundant systems']
        },
        {
          icon: Settings,
          title: 'Compliance Reporting',
          description: 'Automated compliance reporting with audit trails, breach detection, and regulatory submission tools.',
          benefits: ['Automated reporting', 'Breach detection', 'Audit trails']
        }
      ]
    }
  };

  const currentFeatures = allFeatures[activeCategory as keyof typeof allFeatures];

  const benefits = [
    {
      icon: TrendingUp,
      title: '40% Efficiency Increase',
      description: 'Streamlined workflows reduce administrative time'
    },
    {
      icon: Heart,
      title: '95% Patient Satisfaction',
      description: 'Improved communication and care coordination'
    },
    {
      icon: Shield,
      title: '100% HIPAA Compliant',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: Clock,
      title: '60% Time Savings',
      description: 'Automated processes and intelligent features'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ProPlus</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link to="/features" className="text-blue-600 font-medium">Features</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/signin"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Sign In
              </Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Powerful Features for
                <span className="text-blue-600 block">Modern Healthcare</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover comprehensive tools designed to streamline your practice, enhance patient care, 
                and improve health outcomes with our advanced healthcare management platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-50">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete suite of healthcare management tools designed to transform your practice.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {featureCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
            {/*<Icon className="w-5 h-5" />*/}
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Feature Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentFeatures.title}</h3>
              <p className="text-gray-600 text-lg">{currentFeatures.description}</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentFeatures.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                          <div className="space-y-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and systems for a unified healthcare workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Devices</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with vital sign monitors, diagnostic equipment, and wearable devices for real-time data collection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lab Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrate with major laboratory information systems for automated result delivery and tracking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with popular healthcare apps, billing systems, and practice management tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who have transformed their practice 
            with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">HealthCare</h3>
                  <p className="text-sm text-gray-400">Management Platform</p>
                </div>
              </div>
              <p className="text-gray-400">
                Empowering healthcare professionals with modern tools for better patient care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors duration-200">Features</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+255 766 831 124</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@proplus.co.tz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Plot 235 Oyster Bay, Mtwara Crescent, Dar es Salaam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Proplus LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;