import React, { useState } from 'react';
import { Search, Phone, Mail, MessageCircle, HelpCircle, Book, Shield } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '24/7 phone support',
      contact: '+91 1234567890',
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@campuscab.com',
      action: 'Send Email',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 9 AM - 6 PM',
      action: 'Start Chat',
    },
  ];

  const faqs = [
    {
      question: 'How do I book a ride?',
      answer: 'You can book a ride by entering your pickup and drop-off locations on our homepage or booking page. Select your preferred vehicle type, choose the time, and confirm your booking.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept cash, UPI, credit/debit cards, and digital wallets. Payment can be made through the app or directly to the driver.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 5 minutes after confirmation without any charges. Cancellations after that may incur a small fee.',
    },
    {
      question: 'How do I rent a vehicle?',
      answer: 'Visit our Vehicle Rental page, select your preferred vehicle type, choose the rental duration, and complete the booking. You\'ll need to provide valid ID and driving license.',
    },
    {
      question: 'Is there insurance coverage?',
      answer: 'Yes, all our rides and rental vehicles come with comprehensive insurance coverage for your safety and peace of mind.',
    },
    {
      question: 'How can agencies join the platform?',
      answer: 'Agencies can register through our Partners page by providing business documentation, vehicle details, and driver information. After verification, you can start listing your services.',
    },
  ];

  const helpCategories = [
    {
      icon: Book,
      title: 'Booking Help',
      description: 'Learn how to book rides and manage reservations',
    },
    {
      icon: Shield,
      title: 'Safety Guidelines',
      description: 'Important safety information for passengers and drivers',
    },
    {
      icon: HelpCircle,
      title: 'Account Support',
      description: 'Manage your account, payments, and preferences',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to your questions or get in touch with our support team
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="text-center">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-3">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium text-foreground mb-4">{method.contact}</p>
                  <Button variant="hero" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-muted p-3 rounded-lg w-fit mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="mt-8 border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Support</h3>
              <p className="text-red-700 mb-4">
                For urgent safety concerns or emergencies during your ride
              </p>
              <Button variant="destructive" size="lg">
                Emergency Hotline: 100
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;