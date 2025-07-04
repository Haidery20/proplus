import React from 'react';
import {
  Heart,
  Users,
  Shield,
  Award,
  Clock,
  Globe,
  CheckCircle,
  Target,
  Lightbulb,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star,
  Calendar,
  Activity,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every feature we build is designed with patient wellbeing and care quality at its core.',
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'HIPAA-compliant platform with enterprise-grade security to protect sensitive health data.',
      color: 'bg-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving with cutting-edge technology to improve healthcare delivery.',
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering seamless communication between healthcare providers and patients.',
      color: 'bg-green-500'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Comprehensive Patient Management',
      description: 'Complete patient profiles with medical history, allergies, medications, and treatment plans all accessible in one secure location.'
    },
    {
      icon: Calendar,
      title: 'Intelligent Scheduling System',
      description: 'Smart appointment booking with automated reminders, calendar integration, and real-time availability updates.'
    },
    {
      icon: FileText,
      title: 'Digital Medical Records',
      description: 'Secure, searchable electronic health records with instant access to patient history, lab results, and imaging.'
    },
    {
      icon: Activity,
      title: 'Health Analytics & Insights',
      description: 'Real-time health metrics, trend analysis, and predictive insights to improve patient outcomes.'
    },
    {
      icon: MessageSquare,
      title: 'Secure Communication',
      description: 'HIPAA-compliant messaging platform enabling secure communication between providers and patients.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'End-to-end encryption, multi-factor authentication, and compliance with healthcare regulations.'
    }
  ];

  const stats = [
    { 
      number: 100, 
      suffix: '+',
      label: 'Healthcare Providers', 
      icon: Users,
      color: 'blue',
      progress: 75
    },
    { 
      number: 500000, 
      suffix: '+',
      label: 'Patients Served', 
      icon: Heart,
      color: 'green',
      progress: 90
    },
    { 
      number: 99.9, 
      suffix: '%',
      decimals: 1,
      label: 'System Uptime', 
      icon: TrendingUp,
      color: 'purple',
      progress: 99
    },
    { 
      number: 24, 
      suffix: '/7',
      label: 'Support Available', 
      icon: Clock,
      color: 'orange',
      progress: 100
    }
  ];

  const team = [
    {
      name: 'Maclyn Jerry',
      role: 'Co-Founder & CFO',
      bio: '15+ years in healthcare technology and patient care optimization.',
      avatar: 'MJ'
    },
    {
      name: 'Franc Mussa Israel',
      role: 'Co-Founder & CEO',
      bio: 'Expert in healthcare IT systems and data security with 12 years experience.',
      avatar: 'FM'
    },
    {
      name: 'Jie Sun',
      role: 'Director',
      bio: 'Specializes in user experience design for healthcare applications.',
      avatar: 'JS'
    },
    {
      name: 'Evans Makundi',
      role: 'Director',
      bio: 'Board-certified physician with expertise in digital health solutions.',
      avatar: 'EM'
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
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
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
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="bg-blue-600 p-4 rounded-2xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Transforming Healthcare
                <span className="text-blue-600 block">One Practice at a Time</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                ProPlus is revolutionizing how healthcare providers 
                deliver care by combining cutting-edge technology with intuitive design to create 
                seamless experiences for both providers and patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower healthcare professionals with innovative technology that simplifies 
                practice management, enhances patient care, and improves health outcomes. We believe 
                that by removing administrative burdens and providing intelligent insights, we can 
                help healthcare providers focus on what matters most – their patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Streamline Operations</h3>
                    <p className="text-gray-600">Reduce administrative overhead and improve efficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhance Patient Care</h3>
                    <p className="text-gray-600">Provide tools for better patient engagement and outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ensure Security</h3>
                    <p className="text-gray-600">Maintain the highest standards of data protection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Impact</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-600">40%</p>
                      <p className="text-sm text-gray-600">Efficiency Increase</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-600">95%</p>
                      <p className="text-sm text-gray-600">Patient Satisfaction</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-purple-600">60%</p>
                      <p className="text-sm text-gray-600">Time Saved</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-orange-600">98%</p>
                      <p className="text-sm text-gray-600">Provider Retention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build solutions for healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything healthcare providers need to deliver exceptional care efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Professionals Worldwide
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of providers who have transformed their practice with our platform.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <AnimatedCounter
                        end={stat.number}
                        suffix={stat.suffix}
                        decimals={stat.decimals || 0}
                        progress={stat.progress}
                        size="lg"
                        color="white"
                        duration={2500}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-blue-100 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare experts and technology leaders working together to revolutionize patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your healthcare practice? We're here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our healthcare technology experts</p>
              <p className="text-blue-600 font-medium">+255 766 831 124</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed information about our platform</p>
              <p className="text-green-600 font-medium">info@proplus.co.tz</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Schedule a demo at our headquarters</p>
              <p className="text-purple-600 font-medium">Plot 235 Oyster Bay, Mtwara Crescent, Dar es Salaam</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who have already improved their 
            patient care with our comprehensive platform.
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
                  <h3 className="text-lg font-bold">Proplus</h3>
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
            <p>&copy; 2024 HealthCare Management Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;