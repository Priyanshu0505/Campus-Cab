import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Campus Cab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/book" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Book Ride
            </Link>
            <Link 
              to="/rental" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Vehicle Rental
            </Link>
            <Link 
              to="/agencies" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              For Agencies
            </Link>
            <Link 
              to="/help" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Help
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <div className="pt-4 space-y-3">
            <Link 
              to="/book" 
              className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Ride
            </Link>
            <Link 
              to="/rental" 
              className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Vehicle Rental
            </Link>
            <Link 
              to="/agencies" 
              className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              For Agencies
            </Link>
            <Link 
              to="/help" 
              className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;