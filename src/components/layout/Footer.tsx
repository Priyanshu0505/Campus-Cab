import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Campus Cab</span>
            </div>
            <p className="text-white/80 text-sm">
              Your trusted campus transportation partner. Safe, reliable, and affordable 
              mobility solutions for students, staff, and agencies.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white/60 hover:text-accent transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Book Ride', href: '/book' },
                { name: 'Vehicle Rental', href: '/rental' },
                { name: 'For Agencies', href: '/agencies' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'About Us', href: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Safety Guidelines', href: '/safety' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80 text-sm">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80 text-sm">support@campuscab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/80 text-sm">Campus Area, University City</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="font-medium mb-2 text-accent">24/7 Emergency Support</h4>
              <p className="text-sm text-white/80">
                Need immediate assistance? Call our emergency helpline anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Campus Cab. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-accent transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-accent transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;