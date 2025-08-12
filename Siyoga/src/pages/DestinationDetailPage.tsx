import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { ArrowLeft, Clock, MapPin, Star, Camera, Users, Calendar, Heart, Share2, ChevronRight } from 'lucide-react';

const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const destinations = {
    sigiriya: {
      name: 'Sigiriya: The Lion Rock Fortress',
      subtitle: 'Climb to the heavens from a rock fortress that was once the heart of a powerful kingdom',
      description: 'Sigiriya is not just a landmark; it\'s an epic tale of ambition, artistry, and ancient engineering, etched into a colossal pillar of rock.',
      longDescription: 'Rising dramatically from the central plains, the magnificent rock fortress of Sigiriya stands as a testament to the ingenuity of ancient Sri Lanka. Designated a UNESCO World Heritage site, this towering monolith was transformed in the 5th century by King Kashyapa into a palace in the sky, complete with lush, terraced gardens, shimmering pools, and breathtaking frescoes.',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      rating: 4.9,
      reviews: 2847,
      duration: '4-6 hours',
      category: 'Cultural Heritage',
      location: 'Central Province',
      highlights: [
        'UNESCO World Heritage Site',
        'Ancient Frescoes',
        'Lion\'s Gate',
        'Summit Views',
        'Water Gardens',
        'Mirror Wall'
      ],
      experience: `As you begin your ascent, you'll walk through some of the oldest landscaped gardens in the world, a symmetrical masterpiece of water fountains, boulder gardens, and terraced slopes that still function today. The journey continues up a series of staircases attached to the sheer rock face.

Halfway up, you'll encounter the Mirror Wall, a polished surface that once reflected the king's visage and is now inscribed with ancient graffiti from visitors who, for centuries, have been captivated by the beauty of Sigiriya. Just beyond lies the fortress's most celebrated feature: the Sigiriya Frescoes. These world-renowned paintings depict heavenly maidens, their vibrant colors and graceful forms surviving for over 1,500 years.

The final ascent takes you through the Lion's Paws, the gigantic stone paws that are all that remain of a colossal lion statue through whose mouth visitors once entered the palace. At the summit, 200 meters above the jungle floor, you are rewarded with breathtaking 360-degree views of the surrounding plains and the sprawling foundations of a once-great palace.`,
      whyVisit: [
        'Awe-Inspiring Archaeology: Witness one of the best-preserved examples of ancient urban planning.',
        'Breathtaking Views: The panoramic vistas from the summit are among the most spectacular in Sri Lanka.',
        'Ancient Art: Admire the delicate and iconic Sigiriya Frescoes, a priceless piece of global art history.'
      ],
      tips: [
        'Best Time to Climb: Early morning (around 7:00 AM) or late afternoon to avoid the midday heat.',
        'Duration: Allow 2-4 hours for a comfortable visit.',
        'What to Wear: Comfortable shoes, light clothing, and a hat.'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    kandy: {
      name: 'Kandy & The Temple of the Sacred Tooth Relic',
      subtitle: 'Nestled amidst mist-clad hills, Kandy is the cultural soul of Sri Lanka',
      description: 'It is a city of living traditions, where ancient rituals, colonial charm, and the serene energy of Buddhism converge around a sacred relic.',
      longDescription: 'As the last capital of the Sri Lankan kings, Kandy holds a special place in the nation\'s heart. Its centerpiece is the beautiful Kandy Lake, built in 1807, which provides a tranquil backdrop to the city\'s star attraction: the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa).',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      rating: 4.8,
      reviews: 1923,
      duration: '2-3 hours',
      category: 'Religious Site',
      location: 'Kandy',
      highlights: [
        'Sacred Tooth Relic',
        'Traditional Architecture',
        'Cultural Shows',
        'Kandy Lake',
        'Peradeniya Gardens',
        'Royal Palace'
      ],
      experience: `This magnificent temple, a UNESCO World Heritage site, houses the most revered object in the Buddhist world: a sacred tooth relic of Lord Buddha. The relic itself is kept in a golden casket, hidden within a series of nesting caskets in an inner chamber. While you cannot see the tooth itself, being in its presence is a powerful spiritual experience.

Visiting during the puja (offering and prayer) times is a mesmerizing experience. The air fills with the fragrance of lotus blossoms and incense, and the rhythmic beat of the hewisi drummers creates an unforgettable spiritual ambiance. The temple complex itself is a stunning example of Kandyan architecture, with its white walls, red roofs, and intricate wood and lacquer work.

Beyond the temple, Kandy is a vibrant city. Stroll through the lush Peradeniya Botanical Gardens, witness a dynamic Kandyan Cultural Dance performance, and explore the bustling city markets.`,
      whyVisit: [
        'Spiritual Heart of Sri Lanka: Experience the devotion and living history at the Temple of the Sacred Tooth Relic.',
        'Rich Cultural Heritage: Discover traditional arts, crafts, and dance that have been preserved for centuries.',
        'Scenic Beauty: Enjoy the cool climate and stunning landscapes of Sri Lanka\'s hill country.'
      ],
      tips: [
        'Temple Dress Code: You must wear modest clothing that covers your shoulders and knees. You will also need to remove your shoes before entering.',
        'Puja Times: The temple is busiest during puja times (around 5:30 AM, 9:30 AM, and 6:30 PM), but this is also the most atmospheric time to visit.'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    yala: {
      name: 'Yala National Park: A Walk on the Wild Side',
      subtitle: 'Hold your breath and feel the thrill of the wild',
      description: 'Yala is Sri Lanka\'s premier wildlife destination, a sprawling sanctuary of dusty scrubland, shimmering lagoons, and dense forest where the undisputed king is the elusive leopard.',
      longDescription: 'Yala National Park offers one of the most exhilarating safari experiences outside of Africa. Located on the southeastern coast, it boasts the highest concentration of leopards in the world, making it one of the best places on the planet to spot this magnificent big cat.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      rating: 4.9,
      reviews: 1450,
      duration: '4-6 hours',
      category: 'Wildlife Safari',
      location: 'Southern Province',
      highlights: [
        'Highest Leopard Density',
        'Elephant Herds',
        'Sloth Bears',
        'Bird Watching',
        'Scenic Landscapes',
        'Professional Guides'
      ],
      experience: `A jeep safari in Yala is an adventure into a world where nature reigns supreme. Your expert guide will navigate the rugged tracks, helping you spot the incredible diversity of wildlife that calls this park home. Beyond leopards, Yala is home to large herds of elephants, sloth bears, sambar deer, spotted deer, wild boar, and crocodiles.

The park is also a paradise for birdwatchers, with over 200 bird species, including majestic peacocks, painted storks, and eagles. The landscape itself is stunningly varied, from the iconic rocky outcrops that serve as perfect leopard lookouts to the coastal lagoons teeming with wading birds.`,
      whyVisit: [
        'World-Class Leopard Spotting: Unmatched opportunities to see one of nature\'s most beautiful and elusive predators.',
        'Incredible Biodiversity: A rich tapestry of mammals, birds, reptiles, and insects in one accessible location.',
        'Thrilling Safari Adventure: The excitement of exploring the untamed wilderness in an open-top jeep.'
      ],
      tips: [
        'Best Time to Visit: The dry season (February to June) is ideal, as animals congregate around waterholes.',
        'Safari Times: Early morning (6:00 AM) and late afternoon (3:00 PM) safaris offer the best chances for wildlife sightings.',
        'What to Bring: Binoculars, a camera with a good zoom lens, and neutral-colored clothing.'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    galle: {
      name: 'Galle Fort: A Journey Through Time',
      subtitle: 'Step through the ancient ramparts and into a living storybook',
      description: 'The Galle Fort is not merely a historic monument; it\'s a vibrant, atmospheric town where colonial architecture, chic boutiques, and the sound of the ocean create an enchanting, timeless melody.',
      longDescription: 'Built by the Portuguese in the 16th century and extensively fortified by the Dutch in the 17th, the Galle Fort is a UNESCO World Heritage site and one of the best-preserved examples of a European-built fortified city in Asia. As you wander its cobblestone streets, you are transported to another era.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      rating: 4.7,
      reviews: 3156,
      duration: '3-4 hours',
      category: 'Colonial Heritage',
      location: 'Southern Province',
      highlights: [
        'Dutch Architecture',
        'Lighthouse',
        'Rampart Walk',
        'Art Galleries',
        'Boutique Shopping',
        'Ocean Views'
      ],
      experience: `The massive ramparts that encircle the fort are a destination in themselves. Take a walk along them at sunset, with the salty spray of the Indian Ocean on one side and the charming, red-tiled roofs of the old town on the other. You'll see the iconic Galle Lighthouse, the historic Clock Tower, and local daredevils cliff-jumping into the sea.

Within the walls, a treasure trove awaits. Discover the Dutch Reformed Church with its honeycombed floor of ancient gravestones, explore the fascinating Maritime Archaeology Museum, and get lost in a maze of narrow laneways. Today, these historic buildings house a curated collection of art galleries, gem shops, quirky cafes, and luxurious boutique hotels.`,
      whyVisit: [
        'Living History: Walk through a perfectly preserved 17th-century fortress that is now a bustling, modern community.',
        'Atmospheric Charm: Experience a unique blend of colonial elegance and tropical seaside life.',
        'Boutique Shopping & Dining: A haven for those who appreciate fine art, handcrafted jewelry, and world-class cuisine in a historic setting.'
      ],
      tips: [
        'Best Time to Explore: Late afternoon is perfect for walking the ramparts as it\'s cooler and offers a spectacular sunset.',
        'Getting Lost is Part of the Fun: The fort is best explored on foot. Allow at least half a day to wander without a strict agenda.',
        'Stay Within the Fort: For a truly immersive experience, consider staying at one of the many boutique hotels inside the fort walls.'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    }
  };

  const destination = destinations[id as keyof typeof destinations];

  if (!destination) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
            <button
              onClick={() => navigate('/destinations')}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Back to Destinations
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-end">
          <div className="container mx-auto px-4 pb-20">
            {/* Back Button */}
            <button
              onClick={() => navigate('/destinations')}
              className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Destinations
            </button>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {destination.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                {destination.subtitle}
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin size={20} />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock size={20} />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Star size={20} className="text-yellow-400 fill-current" />
                  <span>{destination.rating} ({destination.reviews} reviews)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/book-now', { state: { destination } })}
                  className={`px-8 py-4 bg-gradient-to-r ${destination.gradient} text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3`}
                >
                  <Calendar size={20} />
                  Book This Experience
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
                  <Heart size={20} />
                  Add to Wishlist
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Destination</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {destination.description}
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {destination.longDescription}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">The Experience</h2>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {destination.experience.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Why Visit */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Visit {destination.name.split(':')[0]}?</h2>
                  <div className="space-y-4">
                    {destination.whyVisit.map((reason, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-3 h-3 bg-gradient-to-r ${destination.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-600 leading-relaxed">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visitor Tips */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Visitor Tips</h2>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                    <div className="space-y-4">
                      {destination.tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <ChevronRight className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Information</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold text-gray-800">{destination.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-gray-800">{destination.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Location</span>
                      <span className="font-semibold text-gray-800">{destination.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-800">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Highlights</h3>
                  <div className="space-y-3">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${destination.gradient} rounded-full`}></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Card */}
                <div className={`bg-gradient-to-r ${destination.gradient} rounded-2xl p-8 text-white`}>
                  <h3 className="text-xl font-bold mb-4">Ready to Explore?</h3>
                  <p className="mb-6 text-white/90">Book your visit to this incredible destination and create memories that will last a lifetime.</p>
                  <button
                    onClick={() => navigate('/book-now', { state: { destination } })}
                    className="w-full bg-white text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
                  >
                    <Calendar size={20} />
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DestinationDetailPage;
