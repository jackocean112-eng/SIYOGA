import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, Users, CreditCard, Shield, Check, Star, ArrowRight, Clock, MapPin } from 'lucide-react';

const BookNowPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    travelDate: '',
    groupSize: '2',
    specialRequests: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const featuredPackages = [
    {
      id: 'cultural-triangle',
      name: 'Cultural Triangle Explorer',
      duration: '7 Days / 6 Nights',
      price: 850,
      originalPrice: 1200,
      rating: 4.9,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Polonnaruwa Ancient City', 'Kandy Temple'],
      includes: ['Accommodation', 'All Meals', 'Transportation', 'Guide', 'Entrance Fees'],
      popular: true
    },
    {
      id: 'beach-wildlife',
      name: 'Beach & Wildlife Adventure',
      duration: '10 Days / 9 Nights',
      price: 1250,
      originalPrice: 1600,
      rating: 4.8,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      highlights: ['Yala Safari', 'Mirissa Whale Watching', 'Galle Fort', 'Unawatuna Beach'],
      includes: ['Luxury Hotels', 'All Meals', 'Safari Jeep', 'Boat Tours', 'Airport Transfer']
    },
    {
      id: 'hill-country',
      name: 'Hill Country & Tea Trails',
      duration: '5 Days / 4 Nights',
      price: 650,
      originalPrice: 850,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      highlights: ['Ella Rock Hike', 'Nine Arches Bridge', 'Tea Factory Visit', 'Nuwara Eliya'],
      includes: ['Boutique Hotels', 'Breakfast', 'Train Tickets', 'Hiking Guide', 'Tea Tasting']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', { selectedPackage, ...bookingData });
    alert('Booking submitted successfully! We will contact you within 2 hours to confirm your reservation.');
  };

  const selectedPkg = featuredPackages.find(pkg => pkg.id === selectedPackage);
  const totalPrice = selectedPkg ? selectedPkg.price * parseInt(bookingData.groupSize) : 0;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Book Your Adventure
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Secure your spot on an unforgettable Sri Lankan journey with our easy booking process
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Package Selection */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">
                  Select Your Package
                </h2>
                <div className="space-y-6">
                  {featuredPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-25'
                      }`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <img 
                            src={pkg.image} 
                            alt={pkg.name}
                            className="w-24 h-24 object-cover rounded-xl"
                          />
                          {pkg.popular && (
                            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              POPULAR
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">${pkg.price}</div>
                              <div className="text-sm text-gray-500 line-through">${pkg.originalPrice}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{pkg.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-semibold">{pkg.rating}</span>
                              <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {pkg.highlights.slice(0, 3).map((highlight, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                {highlight}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                              Includes: {pkg.includes.slice(0, 3).join(', ')}
                            </div>
                            {selectedPackage === pkg.id && (
                              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              {selectedPackage && (
                <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">
                    Booking Details
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={bookingData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={bookingData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality *</label>
                        <input
                          type="text"
                          name="nationality"
                          value={bookingData.nationality}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Date *</label>
                        <input
                          type="date"
                          name="travelDate"
                          value={bookingData.travelDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Group Size *</label>
                        <select
                          name="groupSize"
                          value={bookingData.groupSize}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Name</label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={bookingData.emergencyContact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Phone</label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={bookingData.emergencyPhone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                        placeholder="Dietary restrictions, accessibility needs, special occasions, etc."
                      ></textarea>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-display">
                  Booking Summary
                </h3>
                
                {selectedPkg ? (
                  <div className="space-y-6">
                    <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                      <h4 className="font-bold text-gray-800 mb-2">{selectedPkg.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Clock className="w-4 h-4" />
                        {selectedPkg.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {bookingData.groupSize} {parseInt(bookingData.groupSize) === 1 ? 'Person' : 'People'}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package Price (per person)</span>
                        <span className="font-semibold">${selectedPkg.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Number of People</span>
                        <span className="font-semibold">{bookingData.groupSize}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Amount</span>
                          <span className="text-emerald-600">${totalPrice}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <span>Secure booking with SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check className="w-5 h-5 text-emerald-500" />
                        <span>Free cancellation up to 48 hours</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Check className="w-5 h-5 text-emerald-500" />
                        <span>24/7 customer support</span>
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    >
                      <CreditCard className="w-6 h-6" />
                      Book Now - ${totalPrice}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By booking, you agree to our Terms & Conditions and Privacy Policy
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a package to see booking summary</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BookNowPage;
