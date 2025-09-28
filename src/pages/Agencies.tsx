import React from 'react';
import { Building2, Users, BarChart3, Shield, DollarSign, Headphones } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Agencies = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Increase Revenue',
      description: 'Access to thousands of potential customers and boost your daily bookings by up to 300%.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your performance with detailed analytics, booking trends, and revenue reports.',
    },
    {
      icon: Users,
      title: 'Easy Management',
      description: 'Manage your fleet, drivers, and bookings from one comprehensive dashboard.',
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'All rides are covered with comprehensive insurance for both drivers and passengers.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get round-the-clock support from our dedicated partner success team.',
    },
    {
      icon: Building2,
      title: 'Brand Building',
      description: 'Build your agency brand and reputation through our rating and review system.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Register Your Agency',
      description: 'Sign up with your agency details and required documentation.',
    },
    {
      number: '02',
      title: 'Verify Documents',
      description: 'Upload and verify your business license, insurance, and vehicle documents.',
    },
    {
      number: '03',
      title: 'Add Your Fleet',
      description: 'List your vehicles and drivers on our platform.',
    },
    {
      number: '04',
      title: 'Start Earning',
      description: 'Begin receiving bookings and track your earnings in real-time.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner with Campus Cab
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our growing network of transportation agencies and increase your revenue 
              while providing reliable service to thousands of students and staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Join as Partner
              </Button>
              <Button variant="glass" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Partner with Us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unlock new opportunities and grow your transportation business with our comprehensive platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How to Get Started
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to join our partner network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of agencies already earning more with Campus Cab
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                Register Now
              </Button>
              <Button variant="glass" size="xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agencies;