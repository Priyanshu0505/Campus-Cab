import React, { useState } from 'react';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookRide = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideTime, setRideTime] = useState('');
  const [passengers, setPassengers] = useState('');

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Ride</h1>
            <p className="text-lg text-muted-foreground">
              Quick and reliable transportation at your fingertips
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Ride Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Ride Time</label>
                  <Select value={rideTime} onValueChange={setRideTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ride time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Book Now</SelectItem>
                      <SelectItem value="15min">In 15 minutes</SelectItem>
                      <SelectItem value="30min">In 30 minutes</SelectItem>
                      <SelectItem value="1hour">In 1 hour</SelectItem>
                      <SelectItem value="schedule">Schedule for later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Number of Passengers</label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4 Passengers</SelectItem>
                      <SelectItem value="5+">5+ Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={!pickup || !destination || !rideTime || !passengers}
                >
                  Find Available Rides
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Options */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Economy', price: '₹20-50', time: '2-5 min', capacity: '1-4 passengers' },
              { name: 'Premium', price: '₹50-100', time: '1-3 min', capacity: '1-4 passengers' },
              { name: 'SUV', price: '₹80-150', time: '3-7 min', capacity: '1-6 passengers' },
            ].map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {option.time} away
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {option.capacity}
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-bold text-primary">{option.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookRide;