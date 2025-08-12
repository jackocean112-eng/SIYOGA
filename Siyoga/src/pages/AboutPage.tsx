import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Star, Users, MapPin, Award, Heart, Camera, ArrowRight, Shield, Clock, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Travelers', color: 'text-emerald-400' },
    { icon: MapPin, value: '75+', label: 'Destinations', color: 'text-blue-400' },
    { icon: Star, value: '4.9', label: 'Average Rating', color: 'text-yellow-400' },
    { icon: Award, value: '12+', label: 'Years Experience', color: 'text-purple-400' },
  ];

  const team = [
    {
      name: 'Rajesh Fernando',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      description: 'Born and raised in Sri Lanka, Rajesh has been sharing the beauty of his homeland with travelers for over 12 years.',
    },
    {
      name: 'Priya Wickramasinghe',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      description: 'With expertise in hospitality management, Priya ensures every journey is seamless and memorable.',
    },
    {
      name: 'Chaminda Silva',
      role: 'Senior Tour Guide',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      description: 'A passionate storyteller and wildlife expert, Chaminda brings Sri Lankan history and culture to life.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'We believe in showing you the real Sri Lanka - from hidden gems to local traditions that make our island unique.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety and comfort are our top priorities. We maintain the highest standards in all our services.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'We are committed to responsible tourism that benefits local communities and preserves our natural heritage.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our dedicated team is available around the clock to ensure your journey is smooth and worry-free.',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            About Siyoga Travels
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in discovering the wonders of Sri Lanka for over a decade
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2012 by a group of passionate Sri Lankan travel enthusiasts, Siyoga Travels began with a simple mission: to share the incredible beauty, rich culture, and warm hospitality of Sri Lanka with the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small family business has grown into one of Sri Lanka's most trusted travel companies, but we've never lost sight of our core values: authentic experiences, personalized service, and genuine care for every traveler who chooses to explore our beautiful island with us.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to have helped over 15,000 travelers create unforgettable memories in Sri Lanka, from adventurous backpackers to luxury seekers, families to solo explorers.
              </p>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <Camera className="w-6 h-6" />
                View Our Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sri Lankan landscape"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These numbers represent more than statistics - they represent dreams fulfilled and memories created.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-gray-100">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-3 font-display">{stat.value}</div>
                <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape every experience we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${value.gradient} mr-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 font-display">{value.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind your unforgettable Sri Lankan adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 font-display">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let us help you create memories that will last a lifetime. Contact us today to start planning your perfect Sri Lankan adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <Heart className="w-6 h-6" />
                Plan Your Trip
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center gap-3 px-10 py-4 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                <Camera className="w-6 h-6" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
