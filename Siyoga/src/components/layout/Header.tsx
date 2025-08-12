import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Calendar, Heart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    navigate(href);
  };

  const navigationItems = [
    {
      name: 'Destinations',
      href: '/destinations',
      dropdown: [
        { name: 'All Destinations', href: '/destinations' },
        { name: 'Cultural Sites', href: '/destinations?category=cultural' },
        { name: 'Beaches', href: '/destinations?category=beaches' },
        { name: 'Wildlife', href: '/destinations?category=wildlife' },
      ]
    },
    {
      name: 'Experiences',
      href: '/experiences',
      dropdown: [
        { name: 'All Experiences', href: '/experiences' },
        { name: 'Adventure', href: '/experiences?category=adventure' },
        { name: 'Cultural', href: '/experiences?category=cultural' },
        { name: 'Wellness', href: '/experiences?category=wellness' },
      ]
    },
    {
      name: 'Packages',
      href: '/packages',
      dropdown: [
        { name: 'All Packages', href: '/packages' },
        { name: 'Luxury Tours', href: '/packages?category=luxury' },
        { name: 'Budget Tours', href: '/packages?category=budget' },
        { name: 'Family Tours', href: '/packages?category=family' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Side */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('/')}
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-600' : 'text-white'
                }`}
              >
                Siyoga
                <span className={`ml-1 transition-colors duration-300 ${
                  isScrolled ? 'text-teal-600' : 'text-emerald-300'
                }`}>Travels</span>
              </button>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                        : 'text-white hover:text-emerald-200 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => handleNavClick(dropdownItem.href)}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - CTA Buttons */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  : 'text-white hover:text-emerald-200 hover:bg-white/10'
              }`}>
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  : 'text-white hover:text-emerald-200 hover:bg-white/10'
              }`}>
                <Heart className="w-5 h-5" />
              </button>

              {/* Book Now Button */}
              <button
                onClick={() => handleNavClick('/book-now')}
                className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg'
                    : 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium py-2 text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>



              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('/plan-trip')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  Plan Your Trip
                </button>
                <button
                  onClick={() => handleNavClick('/book-now')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>


    </>
  );
};

export default Header;
