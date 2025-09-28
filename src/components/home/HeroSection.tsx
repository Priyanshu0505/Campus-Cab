import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, ArrowRight, Car, Bike, Truck } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [serviceType, setServiceType] = useState('');

  const vehicleTypes = [
    { id: 'cab', name: 'Cab Ride', icon: Car, description: 'Quick & reliable' },
    { id: 'bike', name: 'Bike Rental', icon: Bike, description: 'Eco-friendly' },
    { id: 'car', name: 'Car Rental', icon: Truck, description: 'Full day rental' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Campus transportation background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Campus
            <span className="block text-accent">Transportation Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up">
            Book instant cab rides, rent vehicles, or manage your transportation agency. 
            Safe, reliable, and affordable mobility solutions for students and staff.
          </p>
        </div>

        {/* Quick Booking Card */}
        <Card className="max-w-4xl mx-auto shadow-xl backdrop-blur-sm bg-white/95 animate-scale-in">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Booking</h3>
              
              {/* Service Type Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {vehicleTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      serviceType === type.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setServiceType(type.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        serviceType === type.id ? 'bg-primary text-white' : 'bg-muted'
                      }`}>
                        <type.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{type.name}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>

              {/* Action Button */}
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full md:w-auto md:px-12"
                disabled={!serviceType || !pickup || !destination}
              >
                {serviceType === 'cab' ? 'Find Cab' : serviceType === 'bike' ? 'Rent Bike' : serviceType === 'car' ? 'Rent Car' : 'Get Started'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { icon: Clock, label: '24/7 Service', value: 'Available' },
            { icon: DollarSign, label: 'Affordable Rates', value: 'From ₹20' },
            { icon: Car, label: 'Vehicle Partners', value: '500+' },
          ].map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-bounce-in">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;