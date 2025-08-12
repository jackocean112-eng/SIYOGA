import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Star, Clock, ArrowRight, Heart, Camera, MapPin, Filter, Search } from 'lucide-react';

const DestinationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedDestinations, setLikedDestinations] = useState<Set<string>>(new Set());

  const categories = ['All', 'Cultural Heritage', 'Wildlife Safari', 'Beach & Marine', 'Nature & Hiking', 'Religious Site'];

  const destinations = [
    {
      id: 'sigiriya',
      name: 'Sigiriya Rock Fortress',
      location: 'Central Province',
      rating: 4.9,
      reviews: 2847,
      duration: '4-6 hours',
      category: 'Cultural Heritage',
      description: 'Ancient rock fortress and palace ruins with stunning frescoes and panoramic views of the surrounding landscape.',
      highlights: ['UNESCO World Heritage Site', 'Ancient Frescoes', 'Lion\'s Gate', 'Summit Views'],
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $45',
      difficulty: 'Moderate',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'kandy',
      name: 'Temple of the Sacred Tooth',
      location: 'Kandy',
      rating: 4.8,
      reviews: 1923,
      duration: '2-3 hours',
      category: 'Religious Site',
      description: 'Sacred Buddhist temple housing the tooth relic of Buddha in the cultural capital of Sri Lanka.',
      highlights: ['Sacred Tooth Relic', 'Traditional Architecture', 'Cultural Shows', 'Kandy Lake'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $25',
      difficulty: 'Easy',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'galle',
      name: 'Galle Dutch Fort',
      location: 'Southern Province',
      rating: 4.7,
      reviews: 3156,
      duration: '3-4 hours',
      category: 'Cultural Heritage',
      description: 'Well-preserved Dutch colonial fort with charming cobblestone streets and stunning ocean views.',
      highlights: ['Dutch Architecture', 'Lighthouse', 'Rampart Walk', 'Art Galleries'],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $30',
      difficulty: 'Easy',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'yala',
      name: 'Yala National Park',
      location: 'Southern Province',
      rating: 4.6,
      reviews: 2234,
      duration: 'Full Day',
      category: 'Wildlife Safari',
      description: 'Premier wildlife destination famous for leopards, elephants, and diverse fauna in their natural habitat.',
      highlights: ['Leopard Spotting', 'Elephant Herds', 'Bird Watching', 'Scenic Landscapes'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $85',
      difficulty: 'Easy',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'ella',
      name: 'Ella Rock & Nine Arches',
      location: 'Hill Country',
      rating: 4.8,
      reviews: 1876,
      duration: '6-8 hours',
      category: 'Nature & Hiking',
      description: 'Scenic hill station with hiking trails, tea plantations, and the iconic Nine Arches railway bridge.',
      highlights: ['Ella Rock Hike', 'Nine Arches Bridge', 'Tea Plantations', 'Little Adam\'s Peak'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $55',
      difficulty: 'Moderate',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'mirissa',
      name: 'Mirissa Beach',
      location: 'Southern Coast',
      rating: 4.7,
      reviews: 2567,
      duration: 'Half/Full Day',
      category: 'Beach & Marine',
      description: 'Pristine beach destination perfect for whale watching, surfing, and enjoying spectacular sunsets.',
      highlights: ['Whale Watching', 'Golden Beaches', 'Surfing', 'Sunset Views'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $40',
      difficulty: 'Easy',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const toggleLike = (destinationId: string) => {
    const newLiked = new Set(likedDestinations);
    if (newLiked.has(destinationId)) {
      newLiked.delete(destinationId);
    } else {
      newLiked.add(destinationId);
    }
    setLikedDestinations(newLiked);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-emerald-600 bg-emerald-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Discover Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our curated collection of must-visit destinations across the Pearl of the Indian Ocean
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="text-gray-600 w-5 h-5" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-6 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Large Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${destination.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}>
                    {destination.category}
                  </div>
                  
                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(destination.id)}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Heart
                      size={20}
                      className={`transition-all duration-300 ${
                        likedDestinations.has(destination.id)
                          ? 'text-red-500 fill-current scale-110'
                          : 'text-gray-600 hover:text-red-500'
                      }`}
                    />
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
                    <span className="text-xs text-gray-600">({destination.reviews})</span>
                  </div>

                  {/* Quick Action Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className={`w-12 h-12 bg-gradient-to-r ${destination.gradient} rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 hover:scale-110`}>
                      <Camera size={20} />
                    </button>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <p className="text-white/80 font-medium flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {destination.location}
                    </p>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8">
                  {/* Duration and Difficulty */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm font-medium">{destination.duration}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(destination.difficulty)}`}>
                      {destination.difficulty}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {destination.highlights.slice(0, 4).map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 group/highlight">
                        <div className={`w-2 h-2 bg-gradient-to-r ${destination.gradient} rounded-full group-hover/highlight:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm text-gray-700 group-hover/highlight:text-gray-900 transition-colors duration-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-800">{destination.price}</span>
                      <span className="text-sm text-gray-500">per person</span>
                    </div>
                    <button className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${destination.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn`}>
                      Explore Now
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <Camera className="w-6 h-6" />
              Load More Destinations
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DestinationsPage;
