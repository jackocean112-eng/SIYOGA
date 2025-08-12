import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Camera, Mountain, Waves, TreePine, Building } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const navigate = useNavigate();

  const regions = [
    {
      id: 'north',
      name: 'Northern Province',
      title: 'Jaffna & Northern Wonders',
      description: 'Discover the unique Tamil culture, pristine beaches, and historical sites of the north.',
      highlights: ['Jaffna Fort', 'Casuarina Beach', 'Nallur Temple'],
      icon: Building,
      position: { top: '15%', left: '45%' },
      color: 'accent-ocean',
    },
    {
      id: 'cultural-triangle',
      name: 'Cultural Triangle',
      title: 'Ancient Kingdoms',
      description: 'Explore UNESCO World Heritage sites and ancient capitals of Sri Lanka.',
      highlights: ['Sigiriya Rock', 'Anuradhapura', 'Polonnaruwa', 'Dambulla Caves'],
      icon: Building,
      position: { top: '35%', left: '50%' },
      color: 'primary-emerald',
    },
    {
      id: 'kandy',
      name: 'Central Province',
      title: 'Hill Country & Kandy',
      description: 'Experience cool climate, tea plantations, and the last kingdom of Sri Lanka.',
      highlights: ['Temple of Tooth', 'Tea Plantations', 'Ella', 'Nuwara Eliya'],
      icon: Mountain,
      position: { top: '50%', left: '55%' },
      color: 'secondary-gold',
    },
    {
      id: 'west-coast',
      name: 'Western Province',
      title: 'Colombo & West Coast',
      description: 'Modern capital city, beaches, and the commercial heart of Sri Lanka.',
      highlights: ['Colombo City', 'Negombo Beach', 'Kelaniya Temple'],
      icon: Building,
      position: { top: '60%', left: '35%' },
      color: 'accent-ocean',
    },
    {
      id: 'south-coast',
      name: 'Southern Province',
      title: 'Golden Beaches & Galle',
      description: 'Pristine beaches, Dutch colonial heritage, and whale watching.',
      highlights: ['Galle Fort', 'Mirissa Beach', 'Unawatuna', 'Whale Watching'],
      icon: Waves,
      position: { top: '75%', left: '45%' },
      color: 'accent-ocean',
    },
    {
      id: 'east-coast',
      name: 'Eastern Province',
      title: 'Pristine East Coast',
      description: 'Untouched beaches, surfing spots, and diverse wildlife.',
      highlights: ['Arugam Bay', 'Batticaloa', 'Pasikudah Beach'],
      icon: Waves,
      position: { top: '55%', left: '75%' },
      color: 'primary-emerald',
    },
    {
      id: 'yala',
      name: 'Yala Region',
      title: 'Wildlife & National Parks',
      description: 'Home to leopards, elephants, and diverse wildlife in natural habitats.',
      highlights: ['Yala National Park', 'Udawalawe', 'Bundala'],
      icon: TreePine,
      position: { top: '70%', left: '65%' },
      color: 'secondary-gold',
    },
  ];

  return (
    <section id="map" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Explore Sri Lanka
            <span className="text-primary-500"> by Region</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any region to discover its unique attractions, experiences, and hidden gems.
            Each area offers something special for every type of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Map Background */}
              <div className="relative w-full h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl border-2 border-gray-200 overflow-hidden">
                {/* Sri Lanka Shape Placeholder */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl opacity-30">🗺️</div>
                </div>

                {/* Region Markers */}
                {regions.map((region) => {
                  const getMarkerColor = (color: string, isSelected: boolean) => {
                    const colorMap: { [key: string]: { bg: string; hover: string } } = {
                      'accent-ocean': { bg: 'bg-accent-500', hover: 'hover:bg-accent-600' },
                      'primary-emerald': { bg: 'bg-primary-500', hover: 'hover:bg-primary-600' },
                      'secondary-gold': { bg: 'bg-secondary-500', hover: 'hover:bg-secondary-600' }
                    };
                    const colors = colorMap[color] || { bg: 'bg-primary-500', hover: 'hover:bg-primary-600' };
                    return isSelected ? `${colors.bg} scale-125` : `${colors.bg}/80 ${colors.hover}`;
                  };

                  return (
                    <button
                      key={region.id}
                      className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-125 ${getMarkerColor(region.color, selectedRegion === region.id)}`}
                      style={{
                        top: region.position.top,
                        left: region.position.left,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                    >
                      <span className="sr-only">{region.name}</span>
                    </button>
                  );
                })}

                {/* Pulse Animation for Active Region */}
                {selectedRegion && (
                  <div
                    className="absolute w-6 h-6 rounded-full bg-primary-500/30 animate-ping"
                    style={{
                      top: regions.find(r => r.id === selectedRegion)?.position.top,
                      left: regions.find(r => r.id === selectedRegion)?.position.left,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                )}
              </div>

              {/* Map Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Cultural Sites</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Beaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Nature & Wildlife</span>
                </div>
              </div>
            </div>
          </div>

          {/* Region Information */}
          <div className="space-y-6">
            {selectedRegion ? (
              <div className="animate-fadeIn">
                {(() => {
                  const region = regions.find(r => r.id === selectedRegion);
                  if (!region) return null;
                  
                  return (
                    <div className="bg-neutral-gray-50 rounded-2xl p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-${region.color} rounded-xl flex items-center justify-center`}>
                          <region.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-display">{region.title}</h3>
                          <p className="text-neutral-gray-600">{region.name}</p>
                        </div>
                      </div>
                      
                      <p className="text-neutral-gray-700 mb-6 leading-relaxed">
                        {region.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Highlights:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {region.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <MapPin size={16} className={`text-${region.color}`} />
                              <span className="text-sm text-neutral-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button
                          onClick={() => navigate('/destinations')}
                          className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <Camera size={18} />
                          Explore {region.title}
                        </button>
                        <button
                          onClick={() => navigate('/packages')}
                          className="w-full flex items-center justify-center gap-3 py-3 px-6 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                          <MapPin size={18} />
                          View Packages
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-neutral-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-neutral-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select a Region</h3>
                <p className="text-neutral-gray-600">
                  Click on any marker on the map to learn more about that region's attractions and experiences.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-emerald to-accent-ocean rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Multiple Regions?</h3>
            <p className="mb-6 opacity-90">
              Create a custom itinerary that covers multiple regions and experiences across Sri Lanka.
            </p>
            <button className="btn bg-white text-primary-emerald hover:bg-neutral-gray-100">
              Build My Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
