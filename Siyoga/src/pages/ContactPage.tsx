import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Star } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelDates: '',
    groupSize: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+94 77 123 4567', '+94 11 234 5678'],
      description: 'Call us anytime for immediate assistance',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@siyogatravels.com', 'bookings@siyogatravels.com'],
      description: 'Send us your queries and we\'ll respond within 24 hours',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Galle Road', 'Colombo 03, Sri Lanka'],
      description: 'Visit our office for personalized consultation',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 8:00 AM - 8:00 PM', 'Sat - Sun: 9:00 AM - 6:00 PM'],
      description: '24/7 emergency support for travelers',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Package Booking',
    'Custom Tour Request',
    'Travel Consultation',
    'Group Booking',
    'Emergency Support',
    'Feedback'
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to start your Sri Lankan adventure? Get in touch with our travel experts today
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you plan the perfect Sri Lankan experience. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${info.gradient}`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display text-center">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium text-center">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 font-display">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Dates</label>
                      <input
                        type="date"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Group Size</label>
                      <select
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select group size</option>
                        <option value="1">Solo Traveler</option>
                        <option value="2">Couple</option>
                        <option value="3-5">Small Group (3-5)</option>
                        <option value="6-10">Medium Group (6-10)</option>
                        <option value="10+">Large Group (10+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your dream Sri Lankan adventure..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Send className="w-6 h-6" />
                    Send Message
                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-fade-in-right">
              <div className="bg-white p-8 rounded-3xl shadow-xl h-full">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 font-display">Visit Our Office</h3>
                
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl h-64 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-emerald-700 font-semibold">Interactive Map</p>
                    <p className="text-emerald-600 text-sm">123 Galle Road, Colombo 03</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <Phone className="w-5 h-5 text-emerald-600 mr-2" />
                      Quick Call
                    </h4>
                    <p className="text-gray-600 mb-3">Need immediate assistance? Call us now!</p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300">
                      <Phone className="w-4 h-4" />
                      +94 77 123 4567
                    </button>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      Book Consultation
                    </h4>
                    <p className="text-gray-600 mb-3">Schedule a free consultation with our travel experts.</p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300">
                      <Calendar className="w-4 h-4" />
                      Schedule Meeting
                    </button>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <Star className="w-5 h-5 text-yellow-600 mr-2" />
                      Why Choose Us?
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        12+ years of experience
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        15,000+ happy customers
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        24/7 customer support
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        Best price guarantee
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
