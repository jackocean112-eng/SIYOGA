import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, ArrowRight, Heart, Camera } from 'lucide-react';

const PopularDestinations: React.FC = () => {
  const [likedDestinations, setLikedDestinations] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const destinations = [
    {
      id: 'sigiriya',
      name: 'Sigiriya Rock Fortress',
      location: 'Central Province',
      rating: 4.9,
      reviews: 2847,
      duration: '4-6 hours',
      category: 'Cultural Heritage',
      description: 'Ancient rock fortress and palace ruins with stunning frescoes and panoramic views.',
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
      description: 'Sacred Buddhist temple housing the tooth relic of Buddha in the cultural capital.',
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
      category: 'Colonial Heritage',
      description: 'Well-preserved Dutch colonial fort with charming streets and ocean views.',
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
      description: 'Premier wildlife destination famous for leopards, elephants, and diverse fauna.',
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
      description: 'Scenic hill station with hiking trails, tea plantations, and iconic railway bridge.',
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
      description: 'Pristine beach destination perfect for whale watching and water sports.',
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
      case 'Easy': return 'text-primary-emerald bg-primary-emerald/10';
      case 'Moderate': return 'text-secondary-gold bg-secondary-gold/10';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-neutral-gray-600 bg-neutral-gray-100';
    }
  };

  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Top Destinations
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Must-Visit
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover Sri Lanka's most iconic and breathtaking destinations, each offering unique experiences
            and unforgettable memories that will last a lifetime.
          </p>
        </div>

        {/* Enhanced Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-6 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Extra Large Image */}
              <div className="relative h-96 overflow-hidden">
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
                  <p className="text-white/80 font-medium">
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
                  <button
                    onClick={() => navigate(`/destinations/${destination.id}`)}
                    className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${destination.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn`}
                  >
                    Explore Now
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up delay-600">
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Discover More Hidden Gems
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Want to see more destinations? We have over 75 incredible places waiting for you,
              each with its own unique story and breathtaking beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/destinations')}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Camera className="w-6 h-6" />
                View All Destinations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigate('/packages')}
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-6 h-6" />
                View Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
