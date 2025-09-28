import React, { useState } from 'react';
import { Car, Bike, Truck, Clock, Fuel, Users, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const VehicleRental = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');

  const vehicles = [
    {
      id: 1,
      name: 'Honda City',
      type: 'Car',
      icon: Car,
      price: '₹1,200/day',
      rating: 4.5,
      features: ['AC', 'Bluetooth', 'GPS'],
      fuel: 'Petrol',
      seats: 5,
      available: true,
    },
    {
      id: 2,
      name: 'Royal Enfield',
      type: 'Bike',
      icon: Bike,
      price: '₹500/day',
      rating: 4.3,
      features: ['Helmet included', 'GPS tracking'],
      fuel: 'Petrol',
      seats: 2,
      available: true,
    },
    {
      id: 3,
      name: 'Mahindra Pickup',
      type: 'Truck',
      icon: Truck,
      price: '₹2,000/day',
      rating: 4.1,
      features: ['High capacity', 'Driver included'],
      fuel: 'Diesel',
      seats: 3,
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Vehicle Rental</h1>
            <p className="text-lg text-muted-foreground">
              Rent cars, bikes, and trucks for your transportation needs
            </p>
          </div>

          {/* Filter Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Vehicle Type</label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Vehicles</SelectItem>
                      <SelectItem value="car">Cars</SelectItem>
                      <SelectItem value="bike">Bikes</SelectItem>
                      <SelectItem value="truck">Trucks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Duration</label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Pickup Location</label>
                  <Input
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="flex items-end">
                  <Button variant="hero" className="w-full">
                    Search Vehicles
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className={`hover:shadow-lg transition-all duration-200 ${!vehicle.available ? 'opacity-75' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <vehicle.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{vehicle.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Fuel className="h-4 w-4 text-muted-foreground" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{vehicle.seats} seats</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-primary">{vehicle.price}</div>
                    <Button 
                      variant={vehicle.available ? "hero" : "secondary"}
                      disabled={!vehicle.available}
                    >
                      {vehicle.available ? 'Rent Now' : 'Not Available'}
                    </Button>
                  </div>
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

export default VehicleRental;