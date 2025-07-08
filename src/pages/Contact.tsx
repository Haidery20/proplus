import React, { useState } from 'react';
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Calendar,
  Globe,
  Shield,
  CheckCircle,
  User,
  Building,
  Zap,
  Users,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our healthcare technology experts',
      contact: '+255 766 831 124',
      subtext: 'Available 24/7 for urgent support',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed information about our platform',
      contact: 'info@proplus.co.tz',
      subtext: 'Response within 2 hours',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Start Live Chat',
      subtext: 'Available Mon-Fri 8AM-8PM EST',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      description: 'Book a personalized platform demonstration',
      contact: 'Book Demo Call',
      subtext: 'Free 30-minute consultation',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Healthcare Blvd, Suite 400',
      zipCode: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@proplushealthcare.com',
      hours: 'Mon-Fri: 8AM-6PM PST',
      isHeadquarters: true
    },
    {
      city: 'New York',
      address: '456 Medical Center Dr, Floor 12',
      zipCode: 'New York, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@proplushealthcare.com',
      hours: 'Mon-Fri: 8AM-6PM EST',
      isHeadquarters: false
    },
    {
      city: 'Chicago',
      address: '789 Health Tech Plaza, Suite 200',
      zipCode: 'Chicago, IL 60601',
      phone: '+1 (555) 345-6789',
      email: 'chicago@proplushealthcare.com',
      hours: 'Mon-Fri: 8AM-6PM CST',
      isHeadquarters: false
    }
  ];

  const supportOptions = [
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Get help with platform setup, troubleshooting, and technical issues',
      availability: '24/7 Support Available',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Training & Onboarding',
      description: 'Comprehensive training programs for your team and staff',
      availability: 'Scheduled Sessions',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'HIPAA compliance guidance and security best practices',
      availability: 'Expert Consultation',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Implementation',
      description: 'Full-service implementation and data migration support',
      availability: 'Dedicated Team',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we get started?',
      answer: 'Most practices can be up and running within 2-4 weeks, including data migration and staff training.'
    },
    {
      question: 'Is the platform HIPAA compliant?',
      answer: 'Yes, our platform is fully HIPAA compliant with enterprise-grade security and regular compliance audits.'
    },
    {
      question: 'Do you provide training for our staff?',
      answer: 'We offer comprehensive training programs including live sessions, video tutorials, and ongoing support.'
    },
    {
      question: 'Can you migrate our existing data?',
      answer: 'Yes, we provide full data migration services from most major healthcare systems and EHR platforms.'
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
              <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
              <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
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
                Get in Touch
                <span className="text-blue-600 block">We're Here to Help</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your healthcare practice? Our team of experts is standing by to answer 
                your questions, provide demonstrations, and help you get started with our platform.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to assist with any questions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                    <div className={`p-3 ${method.bgColor} rounded-lg`}>
                      <p className={`font-semibold ${method.textColor}`}>{method.contact}</p>
                    </div>
                    <p className="text-xs text-gray-500">{method.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Dr. John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="john.smith@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Practice/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="ABC Medical Center"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us more about your needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Support Options */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Options</h3>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 ${option.color} rounded-lg`}>
                            <Icon className={`w-6 h-6 ${option.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{option.title}</h4>
                            <p className="text-gray-600 text-sm mb-2">{option.description}</p>
                            <span className="text-xs text-blue-600 font-medium">{option.availability}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our offices or schedule a virtual meeting with our team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                    {office.isHeadquarters && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        Headquarters
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-gray-900">{office.address}</p>
                        <p className="text-gray-600">{office.zipCode}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{office.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{office.hours}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Visit This Office</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your healthcare practice. Contact us today for a free consultation 
            and see how our platform can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>Start Free Trial</span>
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
            <p>&copy; 2025 Proplus LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;