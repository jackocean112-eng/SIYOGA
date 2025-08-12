import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Star, Clock, ArrowRight, Camera, Users, Calendar, Check } from 'lucide-react';

const PackagesPage: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const navigate = useNavigate();

  const durations = ['All', '2-3 Days', '4-6 Days', '7-8 Days', '12-14 Days'];
  const budgets = ['All', 'Budget ($150-400)', 'Mid-range ($400-1500)', 'Luxury ($1500+)'];

  const packages = [
    {
      id: 'cultural-triangle-express',
      name: 'The Cultural Triangle Express',
      duration: '2 Days / 1 Night',
      price: '$150',
      originalPrice: '$250',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Village Tour', 'Elephant Safari'],
      includes: ['Private A/C Vehicle', '1 Night Accommodation', 'Breakfast', 'Driver/Guide'],
      excludes: ['Entry Fees ($46)', 'Lunch & Dinner', 'Safari Fees ($40-50)'],
      category: '2-3 Days',
      budget: 'Budget ($150-400)',
      gradient: 'from-orange-500 to-red-500',
      popular: true,
      description: 'Perfect for tourists with limited time, such as those on a short layover or business trip, who want to experience Sri Lanka\'s most iconic historical sites.',
      focus: 'History, Culture, Scenery',
      bestFor: 'Solo travelers, couples, history enthusiasts',
      itinerary: 'Day 1: Pick up from Colombo/Airport. Drive to Dambulla Cave Temple (UNESCO World Heritage Site). Afternoon village tour or elephant safari at a nearby national park (Minneriya or Kaudulla). Overnight stay in Sigiriya/Dambulla. Day 2: Early morning climb of Sigiriya Rock Fortress (UNESCO site). Return drive to Colombo/Airport.',
      distance: 'Approx. 170 km (4-5 hours one way)',
      vehicles: 'Sedan Car (1-2 people) or Mini Van (3-5 people)',
    },
    {
      id: 'kandy-tea-country',
      name: 'Kandy & Tea Country Escape',
      duration: '3 Days / 2 Nights',
      price: '$250',
      originalPrice: '$400',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Temple of Sacred Tooth', 'Scenic Train Journey', 'Tea Plantation Visit', 'Nuwara Eliya'],
      includes: ['Private A/C Vehicle', '2 Nights Accommodation', 'Breakfasts', 'Train Tickets'],
      excludes: ['Entry Fees (~$10)', 'Cultural Show', 'Lunch & Dinner'],
      category: '2-3 Days',
      budget: 'Budget ($150-400)',
      gradient: 'from-emerald-500 to-teal-500',
      description: 'This package immerses travelers in the lush, cool highlands of Sri Lanka, combining cultural landmarks with the serene beauty of tea plantations.',
      focus: 'Culture, Nature, Tea Plantations',
      bestFor: 'Couples, families, nature lovers',
      itinerary: 'Day 1: Drive from Colombo to Kandy. Visit the Temple of the Sacred Tooth Relic (UNESCO site). In the evening, watch a traditional Kandyan cultural dance show. Overnight in Kandy. Day 2: Scenic train journey from Kandy to Nanu Oya (Nuwara Eliya) - one of the world\'s most beautiful train rides. Visit a tea plantation and factory. Explore Nuwara Eliya town ("Little England"). Overnight in Nuwara Eliya. Day 3: Morning visit to Gregory Lake or Hakgala Botanical Gardens. Drive back to Colombo.',
      distance: 'To Kandy: ~130 km (3.5-4 hours). From Nuwara Eliya: ~170 km (5-6 hours)',
      vehicles: 'Car or Van (driver transports luggage during train journey)'
    },
    {
      id: 'southern-coast-bliss',
      name: 'Southern Coast Bliss',
      duration: '4 Days / 3 Nights',
      price: '$350',
      originalPrice: '$550',
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Galle Fort UNESCO Site', 'Whale Watching', 'Yala Safari', 'Beach Relaxation'],
      includes: ['Private A/C Vehicle', '3 Nights Accommodation', 'Breakfasts'],
      excludes: ['Yala Safari ($60-80)', 'Whale Watching ($50-60)', 'Lunch & Dinner'],
      category: '4-6 Days',
      budget: 'Budget ($150-400)',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'A relaxing beach-focused tour that combines coastal scenery with wildlife and historical charm.',
      focus: 'Beaches, Wildlife, Relaxation, History',
      bestFor: 'Beach lovers, surfers, wildlife enthusiasts, families',
      itinerary: 'Day 1: Drive down the southern expressway to Galle. Explore the Galle Fort (UNESCO site), a 17th-century Dutch fortress with cobblestone streets, boutiques, and cafes. Overnight in Galle/Unawatuna. Day 2: Morning in Mirissa for whale watching (in season: Nov-Apr) or relax on the beach. In the afternoon, visit the famous coconut tree hill or learn to surf in Weligama. Overnight in Mirissa/Weligama. Day 3: Drive to Yala National Park area. Afternoon jeep safari to see leopards, elephants, and bears. Overnight near Yala/Tissamaharama. Day 4: Morning safari (optional) and return drive to Colombo.',
      distance: 'To Galle: ~130 km (2 hours via expressway)',
      vehicles: 'Van recommended for comfort and beach gear storage'
    },
    {
      id: 'lankan-grand-tour',
      name: 'The Lankan Grand Tour',
      duration: '12 Days / 11 Nights',
      price: '$1500',
      originalPrice: '$2500',
      rating: 4.9,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Complete Island Tour', 'UNESCO Sites', 'Wildlife Safari', 'Scenic Train Journey'],
      includes: ['Private Vehicle', '11 Nights Accommodation', 'Breakfasts', 'Train Tickets', 'One Safari'],
      excludes: ['Entrance Fees', 'Lunch & Dinner', 'Optional Activities'],
      category: '12-14 Days',
      budget: 'Mid-range ($400-1500)',
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      description: 'This flagship package is designed for first-time visitors, particularly from European markets like the UK and Germany, who want to experience the full spectrum of Sri Lanka\'s offerings in a comfortable timeframe.',
      focus: 'Culture, Wildlife, Scenery, and Relaxation',
      bestFor: 'First-time visitors, couples, and families who want a comprehensive tour without feeling rushed',
      itinerary: 'Day 1-2: Negombo & Anuradhapura. Arrive and transfer to the ancient city of Anuradhapura. Explore the sprawling UNESCO ruins by bicycle. Day 3-4: Sigiriya & Polonnaruwa. Climb the iconic Sigiriya Rock Fortress. Explore the ruins of Polonnaruwa, the second ancient capital. Optional: Minneriya National Park elephant safari. Day 5-6: Kandy. Visit the Dambulla Cave Temples en route to Kandy. In Kandy, visit the Temple of the Sacred Tooth Relic and enjoy a traditional cultural dance performance. Day 7-8: Ella & the Hill Country. Take the famous scenic train from Kandy to Ella. Hike Little Adam\'s Peak and visit the Nine Arch Bridge. Explore a tea plantation. Day 9-10: Yala National Park & Wildlife. Journey south to Yala for a thrilling jeep safari. High chance of spotting leopards, elephants, and sloth bears. Day 11: Galle & Coastal Charm. Explore the historic Galle Fort, a UNESCO World Heritage site with Dutch colonial architecture. Day 12: Colombo & Departure. Drive to Colombo for a brief city tour before departing.',
      vehicles: 'Air-conditioned private car (1-2 people) or comfortable van (3-6 people)'
    },
    {
      id: 'sacred-lanka-ramayana',
      name: 'Sacred Lanka: A Ramayana Journey',
      duration: '6 Days / 5 Nights',
      price: '$450',
      originalPrice: '$750',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Ramayana Trail', 'Sacred Temples', 'Seetha Amman Temple', 'Hanuman Temple'],
      includes: ['Private A/C Vehicle', '5 Nights Accommodation', 'Breakfasts'],
      excludes: ['Entrance Fees', 'Lunch & Dinner', 'Flight Tickets'],
      category: '4-6 Days',
      budget: 'Budget ($150-400)',
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Tailored specifically for the Indian market and anyone interested in Hindu mythology, this tour follows the trail of the epic Ramayana.',
      focus: 'Religious Sites, Mythology, Culture',
      bestFor: 'Indian families, religious groups, and history enthusiasts',
      itinerary: 'Day 1: Colombo to Kandy. Arrive in Colombo, visit the Panchamuga Anjaneyar Temple, and proceed to Kandy. Day 2: Kandy & Ramboda. Visit the Temple of the Tooth Relic. Travel to Ramboda to see the Ramboda Falls and the Sri Bhakta Hanuman Temple. Day 3: Nuwara Eliya. Explore Nuwara Eliya, visiting the Seetha Amman Temple and Hakgala Botanical Garden (Ashoka Vatika). Day 4: Ella & South. Visit the Divurumpola Temple, where Sita is said to have performed her \'Agni Pariksha\'. Travel towards the southern coast. Day 5: Galle & Bentota. Visit the Rumassala mountain in Galle, believed to be a piece of the Himalayas dropped by Hanuman. Relax in Bentota. Day 6: Departure. Return to Colombo for departure.',
      vehicles: 'Private car or van'
    },
    {
      id: 'wild-side-adventure',
      name: 'Sri Lanka\'s Wild Side: Adventure & Adrenaline',
      duration: '8 Days / 7 Nights',
      price: '$1100',
      originalPrice: '$1900',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['White Water Rafting', 'Adam\'s Peak Trek', 'Yala Safari', 'Surfing Lessons'],
      includes: ['Private Vehicle', '7 Nights Accommodation', 'Breakfasts', 'Rafting Experience', 'One Safari'],
      excludes: ['Entrance Fees', 'Hiking Guide Fees', 'Surf Lessons', 'Whale Watching', 'Other Meals'],
      category: '7-8 Days',
      budget: 'Mid-range ($400-1500)',
      gradient: 'from-red-500 to-orange-500',
      description: 'This action-packed itinerary is for active travelers who want to experience Sri Lanka\'s natural landscapes through exciting activities.',
      focus: 'Adventure Sports, Hiking, Wildlife',
      bestFor: 'Young adults, couples, and active travelers',
      itinerary: 'Day 1: Kitulgala. Arrive and drive straight to Kitulgala, the adventure hub of Sri Lanka. Day 2: White Water Rafting. Experience thrilling white water rafting on the Kelani River. Day 3: Adam\'s Peak or Knuckles Range. Depending on the season, embark on a challenging trek. Adam\'s Peak (Dec-May) is a sacred pilgrimage, while the Knuckles Mountain Range offers incredible biodiversity. Day 4: Ella. Travel to Ella. Hike to Ella Rock for panoramic views. Day 5: Yala National Park. Transfer to Yala and experience an afternoon safari. Overnight in a safari lodge or luxury tented camp for an immersive experience. Day 6-7: South Coast Surfing. Head to Weligama or Mirissa. Take a surf lesson, go whale watching (Nov-Apr), and enjoy the beach nightlife. Day 8: Departure.',
      vehicles: 'Van or 4x4 vehicle to handle varied terrains'
    },
    {
      id: 'island-zen-wellness',
      name: 'Island Zen: A Wellness & Yoga Retreat',
      duration: '7 Days / 6 Nights',
      price: '$1400',
      originalPrice: '$2800',
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Yoga Retreat', 'Ayurvedic Treatments', 'Meditation Sessions', 'Organic Cuisine'],
      includes: ['All-Inclusive Yoga Retreat', 'Private Vehicle', '6 Nights Accommodation', 'All Meals', 'Ayurvedic Consultation'],
      excludes: ['Additional Ayurvedic Treatments', 'Flights'],
      category: '7-8 Days',
      budget: 'Luxury ($1500+)',
      gradient: 'from-green-500 to-emerald-500',
      luxury: true,
      description: 'This tour is designed for those seeking relaxation, mindfulness, and a deeper connection with themselves, tapping into Sri Lanka\'s rich tradition of holistic wellness.',
      focus: 'Yoga, Meditation, Ayurveda, Healthy Cuisine',
      bestFor: 'Solo travelers, couples, and anyone looking to de-stress',
      itinerary: 'Day 1-3: Knuckles Mountain Range Eco-Lodge. Arrive and transfer to a serene, all-inclusive yoga retreat in the mountains. Days will include twice-daily yoga sessions, guided meditations, nature walks, and opportunities for digital detox. Day 4-5: Kandy & Ayurvedic Healing. Move to a wellness center near Kandy. Receive a consultation with an Ayurvedic doctor, followed by personalized treatments like Shirodhara and herbal massages. Day 6: South Coast Relaxation. Transfer to a quiet beach on the south coast like Talalla or Tangalle for a final day of seaside meditation and relaxation. Day 7: Departure.',
      vehicles: 'Private car'
    },
    {
      id: 'off-beaten-path',
      name: 'Off the Beaten Path: The Unseen Sri Lanka',
      duration: '14 Days / 13 Nights',
      price: '$2200',
      originalPrice: '$3500',
      rating: 4.8,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Wilpattu National Park', 'Jaffna Culture', 'Gal Oya Boat Safari', 'Sinharaja Rainforest'],
      includes: ['Private 4x4/Van', '13 Nights Accommodation', 'Breakfasts', 'Gal Oya Boat Safari', 'Wilpattu Safari'],
      excludes: ['Domestic Flight to Jaffna (Optional)', 'Entrance Fees', 'Other Meals'],
      category: '12-14 Days',
      budget: 'Luxury ($1500+)',
      gradient: 'from-purple-500 to-indigo-500',
      description: 'This package is for seasoned travelers who want to escape the main tourist trail and discover the country\'s hidden gems.',
      focus: 'Authentic Experiences, Remote Nature, Local Culture',
      bestFor: 'Return visitors, photographers, and adventurous travelers',
      itinerary: 'Day 1-2: Wilpattu National Park. Instead of Yala, head to the less-crowded Wilpattu, famous for its leopards and natural lakes. Stay in a safari camp. Day 3-4: Jaffna & the North. Fly or drive to Jaffna. Explore the distinct Tamil culture, Nallur Kandaswamy Kovil, and the remote islands with their unique history. Day 5-6: East Coast Tranquility. Travel to the east coast beaches of Trincomalee or Pasikudah, known for their calm waters (ideal from May to Sep). Day 7-8: Gal Oya National Park. The only park in Sri Lanka where you can take a boat safari to see elephants swimming between islands. Day 9-10: Stay at a Rural Farm. Experience authentic village life with a homestay or farm stay. Participate in cooking demonstrations and learn about local agriculture. Day 11-12: Sinharaja Rainforest. Explore the UNESCO-listed Sinharaja Forest Reserve, a biodiversity hotspot, with a knowledgeable guide. Day 13-14: Colombo & Departure. Return to Colombo. Perhaps explore its emerging art and foodie scene before flying out.',
      vehicles: 'Durable van or 4x4 essential for remote roads'
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesDuration = selectedDuration === 'All' || pkg.category === selectedDuration;
    const matchesBudget = selectedBudget === 'All' || pkg.budget === selectedBudget;
    return matchesDuration && matchesBudget;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Travel Packages
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Carefully crafted packages for every budget and travel style - from budget adventures to luxury escapes
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-12">
            {/* Duration Filter */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Duration</h3>
              <div className="flex gap-2 flex-wrap">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedDuration === duration
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Filter */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Budget</h3>
              <div className="flex gap-2 flex-wrap">
                {budgets.map((budget) => (
                  <button
                    key={budget}
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedBudget === budget
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredPackages.length} of {packages.length} packages
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-6 hover:scale-105 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Special Badges */}
                {pkg.popular && (
                  <div className="absolute top-4 left-4 z-20 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                {pkg.luxury && (
                  <div className="absolute top-4 left-4 z-20 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    LUXURY
                  </div>
                )}
       

                {/* Large Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{pkg.rating}</span>
                    <span className="text-xs text-gray-600">({pkg.reviews})</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{pkg.price}</div>
                      <div className="text-xs text-gray-500 line-through">{pkg.originalPrice}</div>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <p className="text-white/80 font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.highlights.slice(0, 4).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${pkg.gradient} rounded-full`}></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Includes & Excludes */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-600 mb-3">✓ Package Includes</h4>
                        <div className="space-y-2">
                          {pkg.includes.slice(0, 3).map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-emerald-500" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                          {pkg.includes.length > 3 && (
                            <div className="text-sm text-emerald-600 font-medium">
                              +{pkg.includes.length - 3} more included
                            </div>
                          )}
                        </div>
                      </div>

                      {pkg.excludes && (
                        <div>
                          <h4 className="text-sm font-semibold text-red-600 mb-3">✗ Not Included</h4>
                          <div className="space-y-2">
                            {pkg.excludes.slice(0, 2).map((item, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-4 h-4 rounded-full border-2 border-red-400 flex items-center justify-center">
                                  <div className="w-2 h-0.5 bg-red-400"></div>
                                </div>
                                <span className="text-gray-600">{item}</span>
                              </div>
                            ))}
                            {pkg.excludes.length > 2 && (
                              <div className="text-sm text-red-600 font-medium">
                                +{pkg.excludes.length - 2} more exclusions
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => navigate('/book-now', { state: { package: pkg } })}
                    className={`w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r ${pkg.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn`}
                  >
                    <Calendar className="w-5 h-5" />
                    Book This Package
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="text-center mt-20 animate-fade-in-up delay-800">
            <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Need Something Different?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Can't find the perfect package? Let our travel experts create a custom itinerary tailored specifically to your preferences, budget, and travel dates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <Users className="w-6 h-6" />
                  Create Custom Package
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="inline-flex items-center gap-3 px-10 py-4 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Camera className="w-6 h-6" />
                  View All Destinations
                </button>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-emerald-600 mb-4">Peak Season</h4>
                  <p className="text-gray-700 mb-2"><strong>December - March</strong></p>
                  <p className="text-gray-700"><strong>July - August</strong></p>
                  <p className="text-sm text-gray-600 mt-2">Higher prices and more crowds during these periods</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Off-Peak Season</h4>
                  <p className="text-gray-700 mb-2"><strong>April - June</strong></p>
                  <p className="text-gray-700"><strong>September - November</strong></p>
                  <p className="text-sm text-gray-600 mt-2">Better prices and fewer crowds</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-yellow-800 mb-4">Pricing Disclaimer</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Prices are estimates</strong> based on current market rates (as of late 2024/early 2025) and can fluctuate based on the season (peak vs. off-peak), level of luxury, and specific vendor. These should be used as a guide.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Prices may vary depending on group size and specific requirements</li>
                  <li>• Additional costs may apply for entrance fees, meals, and optional activities</li>
                  <li>• Final pricing will be confirmed upon booking with current market rates</li>
                  <li>• All packages can be customized to meet your specific needs and budget</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PackagesPage;
