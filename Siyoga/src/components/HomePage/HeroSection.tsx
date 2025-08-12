import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Users, MapPin, ChevronDown, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Ancient Temples',
      subtitle: 'Discover 2,500 years of history'
    },
    {
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Pristine Beaches',
      subtitle: 'Crystal clear waters await'
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Tea Plantations',
      subtitle: 'Emerald hills of Ceylon tea'
    },
    {
      url: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Wildlife Safari',
      subtitle: 'Majestic elephants in their home'
    }
  ];

  const stats = [
    { icon: Users, value: '15,000+', label: 'Happy Travelers' },
    { icon: MapPin, value: '75+', label: 'Destinations' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${image.url}')`
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Modern Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Hero Text */}
        <div className="pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-md border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
              {heroImages[currentImageIndex].subtitle}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white drop-shadow-2xl mb-2">Your Dream</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Sri Lankan Adventure
            </span>
            <span className="block text-white drop-shadow-2xl">Awaits</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            {heroImages[currentImageIndex].title} - Experience the magic of Sri Lanka with our expertly crafted journeys.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/destinations')}
              className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Explore Destinations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate('/plan-trip')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-white/30"
            >
              Plan Your Trip
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4 -mb-16 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
            <p className="text-gray-600">Find the perfect Sri Lankan experience for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>Choose destination</option>
                  <option>Colombo</option>
                  <option>Kandy</option>
                  <option>Galle</option>
                  <option>Sigiriya</option>
                </select>
              </div>
            </div>

            {/* Check-in */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-out</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 opacity-0">Search</label>
              <button
                onClick={() => navigate('/destinations')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-emerald-600 scale-125'
                  : 'bg-gray-300 hover:bg-emerald-400'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center pb-8">
          <div className="inline-flex flex-col items-center text-gray-400 hover:text-emerald-600 transition-colors duration-300 cursor-pointer">
            <span className="text-sm mb-2 font-medium">Discover More</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
