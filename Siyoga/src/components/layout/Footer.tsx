import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Plane,
  Shield,
  Award,
  Globe,
  Camera,
  MessageCircle,
  Video
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Travel Guide', href: '#guide' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const destinations = [
    { name: 'Sigiriya Rock Fortress', href: '#sigiriya' },
    { name: 'Kandy Cultural Triangle', href: '#kandy' },
    { name: 'Galle Dutch Fort', href: '#galle' },
    { name: 'Yala National Park', href: '#yala' },
    { name: 'Ella Hill Country', href: '#ella' },
    { name: 'Mirissa Beaches', href: '#mirissa' },
  ];

  const experiences = [
    { name: 'Wildlife Safaris', href: '#safari' },
    { name: 'Cultural Tours', href: '#culture' },
    { name: 'Beach Holidays', href: '#beaches' },
    { name: 'Adventure Sports', href: '#adventure' },
    { name: 'Ayurveda Wellness', href: '#wellness' },
    { name: 'Tea Plantation Tours', href: '#tea' },
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed tour operator'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence'
    },
    {
      icon: Plane,
      title: '24/7 Support',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Indicators */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="text-2xl font-bold text-white font-display mb-4">
                  Siyoga
                  <span className="text-secondary-gold ml-2">Travels</span>
                </div>
                <p className="text-neutral-gray-300 mb-6">
                  Discover the pearl of the Indian Ocean with authentic Sri Lankan experiences. 
                  We create unforgettable journeys through paradise.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary-emerald flex-shrink-0" />
                  <span className="text-neutral-gray-300">
                    123 Galle Road, Colombo 03, Sri Lanka
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary-emerald flex-shrink-0" />
                  <span className="text-neutral-gray-300">+94 77 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-emerald flex-shrink-0" />
                  <span className="text-neutral-gray-300">info@siyogatravels.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Globe, href: '#facebook', label: 'Facebook' },
                    { icon: Camera, href: '#instagram', label: 'Instagram' },
                    { icon: MessageCircle, href: '#twitter', label: 'Twitter' },
                    { icon: Video, href: '#youtube', label: 'YouTube' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                      title={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-gray-300 hover:text-primary-emerald transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="font-semibold text-white mb-6">Popular Destinations</h3>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href={destination.href}
                      className="text-neutral-gray-300 hover:text-primary-emerald transition-colors duration-200"
                    >
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences */}
            <div>
              <h3 className="font-semibold text-white mb-6">Experiences</h3>
              <ul className="space-y-3">
                {experiences.map((experience, index) => (
                  <li key={index}>
                    <a
                      href={experience.href}
                      className="text-neutral-gray-300 hover:text-primary-emerald transition-colors duration-200"
                    >
                      {experience.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-neutral-gray-800 py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Stay Updated with Sri Lanka's Best
            </h3>
            <p className="text-neutral-gray-300 mb-6">
              Get exclusive travel tips, destination guides, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-gray-700 text-white placeholder-neutral-gray-400 border border-neutral-gray-600 focus:border-primary-emerald focus:outline-none"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-gray-950 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-gray-400">
              <span>© 2024 Siyoga Travels. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>in Sri Lanka</span>
            </div>
            <div className="flex gap-6 text-sm text-neutral-gray-400">
              <a href="#privacy" className="hover:text-primary-emerald transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary-emerald transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-primary-emerald transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
