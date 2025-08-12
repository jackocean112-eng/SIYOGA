import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Waves, Compass, Mountain, UtensilsCrossed, ArrowRight, Star, Heart, Camera, Clock, Users } from 'lucide-react';

const ExperiencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const experiences = [
    {
      id: 'relax',
      title: 'Relax & Rejuvenate',
      subtitle: 'Beaches & Wellness',
      description: 'Unwind on pristine beaches, rejuvenate with ancient Ayurveda treatments, and find your inner peace in tropical paradise.',
      icon: Waves,
      color: 'from-blue-500 to-cyan-500',
      features: ['Pristine Beaches', 'Ayurveda Spas', 'Wellness Retreats', 'Meditation Centers'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      reviews: 1250,
      duration: '3-7 days',
      price: 'From $120/day',
      category: 'Wellness'
    },
    {
      id: 'explore',
      title: 'Explore & Discover',
      subtitle: 'Culture & Heritage',
      description: 'Journey through ancient kingdoms, explore UNESCO World Heritage sites, and immerse yourself in 2,500 years of rich history.',
      icon: Compass,
      color: 'from-emerald-500 to-teal-500',
      features: ['Ancient Temples', 'Cultural Triangle', 'Heritage Sites', 'Local Villages'],
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      reviews: 980,
      duration: '5-10 days',
      price: 'From $95/day',
      category: 'Culture'
    },
    {
      id: 'adventure',
      title: 'Adventure & Thrill',
      subtitle: 'Wildlife & Sports',
      description: 'Embark on thrilling safaris, trek through misty mountains, and experience heart-pumping adventures in diverse landscapes.',
      icon: Mountain,
      color: 'from-orange-500 to-red-500',
      features: ['Wildlife Safaris', 'Mountain Trekking', 'Water Sports', 'Rock Climbing'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      reviews: 1450,
      duration: '4-8 days',
      price: 'From $150/day',
      category: 'Adventure'
    },
    {
      id: 'taste',
      title: 'Taste & Savor',
      subtitle: 'Culinary Tours',
      description: 'Savor authentic Sri Lankan flavors, learn traditional cooking methods, and discover the island\'s rich culinary heritage.',
      icon: UtensilsCrossed,
      color: 'from-yellow-500 to-orange-500',
      features: ['Cooking Classes', 'Spice Gardens', 'Tea Tastings', 'Street Food Tours'],
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      reviews: 850,
      duration: '2-5 days',
      price: 'From $85/day',
      category: 'Culinary'
    },
  ];

  const categories = ['All', 'Wellness', 'Culture', 'Adventure', 'Culinary'];

  const filteredExperiences = selectedCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Unique Experiences
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose your perfect Sri Lankan adventure from our curated collection of unforgettable experiences
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 flex-wrap bg-white rounded-full p-2 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Large Background Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${experience.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <experience.icon size={32} className="text-white" />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{experience.rating}</span>
                    <span className="text-xs text-gray-600">({experience.reviews})</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-emerald-300 font-medium text-lg">
                      {experience.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="text-sm font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span className="text-sm font-medium">{experience.reviews} reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {experience.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {experience.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 group/feature">
                        <div className={`w-3 h-3 bg-gradient-to-r ${experience.color} rounded-full group-hover/feature:scale-125 transition-transform duration-300`}></div>
                        <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r ${experience.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn`}>
                      <Camera className="w-5 h-5" />
                      Explore {experience.title.split(' ')[0]}
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="p-4 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-300 hover:bg-emerald-50 group/heart">
                      <Heart className="w-6 h-6 text-gray-400 group-hover/heart:text-emerald-500 group-hover/heart:fill-current transition-all duration-300" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-800">{experience.price}</span>
                        <span className="text-gray-500 ml-2">per person</span>
                      </div>
                      <div className={`px-4 py-2 bg-gradient-to-r ${experience.color} text-white rounded-full text-sm font-semibold`}>
                        {experience.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fade-in-up delay-800">
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Create Your Perfect Experience
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Can't decide on just one? Combine multiple experiences for the ultimate Sri Lankan adventure tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <Star className="w-5 h-5" />
                  Plan Custom Experience
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Camera className="w-5 h-5" />
                  View All Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExperiencesPage;
