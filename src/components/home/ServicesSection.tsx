import React from 'react';
import { Car, Bike, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Cab Booking',
      description: 'Instant cab rides with verified drivers. Available 24/7 for your convenience.',
      features: ['Instant booking', 'Verified drivers', 'Real-time tracking', 'Multiple payment options'],
      buttonText: 'Book Now',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Bike,
      title: 'Vehicle Rental',
      description: 'Rent cars, bikes, and other vehicles for hourly, daily, or weekly periods.',
      features: ['Flexible duration', 'Various vehicle types', 'Affordable rates', 'Easy return process'],
      buttonText: 'Browse Vehicles',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Building2,
      title: 'For Agencies',
      description: 'Partner with us to list your vehicles and grow your transportation business.',
      features: ['Easy registration', 'Dashboard management', 'Analytics & reports', 'Commission-based model'],
      buttonText: 'Join Network',
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive transportation solutions for all your mobility needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="hero" 
                  className="w-full group-hover:scale-105 transition-transform duration-200"
                >
                  {service.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;