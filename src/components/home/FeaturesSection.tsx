import React from 'react';
import { Shield, Clock, MapPin, DollarSign, Users, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers, GPS tracking, and 24/7 support for your safety.',
    },
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Book a ride in seconds with our intuitive interface.',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time and get accurate ETAs.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Know your fare before you book.',
    },
    {
      icon: Users,
      title: 'Agency Network',
      description: 'Connect with trusted transportation agencies.',
    },
    {
      icon: Smartphone,
      title: 'Easy to Use',
      description: 'Simple, intuitive app designed for students and staff.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Campus Cab?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the most reliable and convenient transportation solution 
            designed specifically for campus communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;