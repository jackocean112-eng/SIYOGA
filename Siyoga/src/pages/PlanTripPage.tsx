import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, Check, Heart } from 'lucide-react';

const PlanTripPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: '',
    duration: '',
    groupSize: '',
    budget: '',
    interests: [] as string[],
    accommodation: '',
    startDate: '',
    specialRequests: ''
  });

  const destinations = [
    { id: 'cultural-triangle', name: 'Cultural Triangle', image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 'hill-country', name: 'Hill Country', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 'southern-coast', name: 'Southern Coast', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 'wildlife-parks', name: 'Wildlife Parks', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 'complete-island', name: 'Complete Island Tour', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
  ];

  const interests = [
    'Ancient Temples & Culture',
    'Wildlife & Safari',
    'Beach & Water Sports',
    'Tea Plantations',
    'Adventure & Hiking',
    'Culinary Experiences',
    'Photography',
    'Wellness & Spa',
    'Local Villages',
    'Train Journeys'
  ];

  const handleInterestToggle = (interest: string) => {
    setTripData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Trip data:', tripData);
    alert('Thank you! We will create a custom itinerary for you and send it within 24 hours.');
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Plan Your Perfect Trip
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tell us your preferences and we'll create a personalized Sri Lankan adventure just for you
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > stepNumber ? <Check className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-24 h-1 mx-4 ${
                    step > stepNumber ? 'bg-emerald-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm font-medium text-gray-600">
            <span>Destination</span>
            <span>Preferences</span>
            <span>Details</span>
            <span>Review</span>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            
            {/* Step 1: Destination Selection */}
            {step === 1 && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display text-center">
                  Where would you like to explore?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {destinations.map((dest) => (
                    <div
                      key={dest.id}
                      onClick={() => setTripData({...tripData, destination: dest.id})}
                      className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                        tripData.destination === dest.id ? 'ring-4 ring-emerald-500' : ''
                      }`}
                    >
                      <div className="relative h-48">
                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-white font-bold text-lg">{dest.name}</h3>
                        </div>
                        {tripData.destination === dest.id && (
                          <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Preferences */}
            {step === 2 && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display text-center">
                  What interests you most?
                </h2>
                <p className="text-gray-600 text-center mb-8">Select all that apply</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        tripData.interests.includes(interest)
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{interest}</span>
                        {tripData.interests.includes(interest) && (
                          <Check className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Trip Details */}
            {step === 3 && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display text-center">
                  Trip Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                    <select
                      value={tripData.duration}
                      onChange={(e) => setTripData({...tripData, duration: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select duration</option>
                      <option value="3-5">3-5 Days</option>
                      <option value="6-8">6-8 Days</option>
                      <option value="9-12">9-12 Days</option>
                      <option value="13+">13+ Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Group Size</label>
                    <select
                      value={tripData.groupSize}
                      onChange={(e) => setTripData({...tripData, groupSize: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo Traveler</option>
                      <option value="2">Couple</option>
                      <option value="3-5">Small Group (3-5)</option>
                      <option value="6-10">Medium Group (6-10)</option>
                      <option value="10+">Large Group (10+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                    <select
                      value={tripData.budget}
                      onChange={(e) => setTripData({...tripData, budget: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Budget ($50-100/day)</option>
                      <option value="mid-range">Mid-range ($100-200/day)</option>
                      <option value="luxury">Luxury ($200+/day)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Accommodation Type</label>
                    <select
                      value={tripData.accommodation}
                      onChange={(e) => setTripData({...tripData, accommodation: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select accommodation</option>
                      <option value="budget">Budget Hotels/Hostels</option>
                      <option value="mid-range">Mid-range Hotels</option>
                      <option value="luxury">Luxury Hotels/Resorts</option>
                      <option value="boutique">Boutique Properties</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date</label>
                    <input
                      type="date"
                      value={tripData.startDate}
                      onChange={(e) => setTripData({...tripData, startDate: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      value={tripData.specialRequests}
                      onChange={(e) => setTripData({...tripData, specialRequests: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display text-center">
                  Review Your Trip Plan
                </h2>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Destination</h3>
                      <p className="text-gray-600 capitalize">{tripData.destination?.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Duration</h3>
                      <p className="text-gray-600">{tripData.duration} days</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Group Size</h3>
                      <p className="text-gray-600">{tripData.groupSize}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Budget</h3>
                      <p className="text-gray-600 capitalize">{tripData.budget?.replace('-', ' ')}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-gray-800 mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tripData.interests.map((interest, index) => (
                          <span key={index} className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Our travel experts will create a personalized itinerary based on your preferences and send it to you within 24 hours.
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Heart className="w-6 h-6" />
                    Create My Trip Plan
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  step === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              {step < 4 && (
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PlanTripPage;
