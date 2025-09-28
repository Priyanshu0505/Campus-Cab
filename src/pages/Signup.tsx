import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Car, Building2, Shield } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const userTypes = [
    {
      id: 'passenger',
      name: 'Passenger',
      icon: User,
      description: 'Book rides and rent vehicles',
      additionalFields: [],
    },
    {
      id: 'driver',
      name: 'Driver',
      icon: Car,
      description: 'Drive and earn with us',
      additionalFields: ['license', 'vehicle'],
    },
    {
      id: 'agency',
      name: 'Agency',
      icon: Building2,
      description: 'Manage your fleet',
      additionalFields: ['businessName', 'businessLicense'],
    },
    {
      id: 'admin',
      name: 'Admin',
      icon: Shield,
      description: 'Platform management',
      additionalFields: ['adminCode'],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (userType: string) => {
    console.log('Signup attempt:', { userType, ...formData });
    // Registration logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Join Campus Cab</h1>
            <p className="text-muted-foreground">Create your account and get started</p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="passenger" className="w-full">
                <TabsList className="grid w-full grid-cols-2 grid-rows-2 h-auto">
                  {userTypes.map((type) => (
                    <TabsTrigger
                      key={type.id}
                      value={type.id}
                      className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      <type.icon className="h-5 w-5" />
                      <div className="text-center">
                        <div className="font-medium">{type.name}</div>
                        <div className="text-xs opacity-80">{type.description}</div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {userTypes.map((type) => (
                  <TabsContent key={type.id} value={type.id} className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`name-${type.id}`}>
                        {type.id === 'agency' ? 'Contact Name' : 'Full Name'}
                      </Label>
                      <Input
                        id={`name-${type.id}`}
                        name="name"
                        placeholder={`Enter your ${type.id === 'agency' ? 'contact name' : 'full name'}`}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {type.additionalFields.includes('businessName') && (
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="Enter your business name"
                          required
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor={`email-${type.id}`}>Email</Label>
                      <Input
                        id={`email-${type.id}`}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`phone-${type.id}`}>Phone Number</Label>
                      <Input
                        id={`phone-${type.id}`}
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {type.additionalFields.includes('license') && (
                      <div className="space-y-2">
                        <Label htmlFor="license">Driving License Number</Label>
                        <Input
                          id="license"
                          name="license"
                          placeholder="Enter your license number"
                          required
                        />
                      </div>
                    )}

                    {type.additionalFields.includes('vehicle') && (
                      <div className="space-y-2">
                        <Label htmlFor="vehicle">Vehicle Registration</Label>
                        <Input
                          id="vehicle"
                          name="vehicle"
                          placeholder="Enter vehicle registration number"
                          required
                        />
                      </div>
                    )}

                    {type.additionalFields.includes('businessLicense') && (
                      <div className="space-y-2">
                        <Label htmlFor="businessLicense">Business License Number</Label>
                        <Input
                          id="businessLicense"
                          name="businessLicense"
                          placeholder="Enter business license number"
                          required
                        />
                      </div>
                    )}

                    {type.additionalFields.includes('adminCode') && (
                      <div className="space-y-2">
                        <Label htmlFor="adminCode">Admin Access Code</Label>
                        <Input
                          id="adminCode"
                          name="adminCode"
                          type="password"
                          placeholder="Enter admin access code"
                          required
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor={`password-${type.id}`}>Password</Label>
                      <div className="relative">
                        <Input
                          id={`password-${type.id}`}
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`confirmPassword-${type.id}`}>Confirm Password</Label>
                      <Input
                        id={`confirmPassword-${type.id}`}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`terms-${type.id}`}
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, agreeToTerms: checked as boolean })
                        }
                      />
                      <label
                        htmlFor={`terms-${type.id}`}
                        className="text-sm text-muted-foreground"
                      >
                        I agree to the{' '}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => handleSubmit(type.id)}
                      disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.phone ||
                        !formData.password ||
                        !formData.confirmPassword ||
                        !formData.agreeToTerms ||
                        formData.password !== formData.confirmPassword
                      }
                    >
                      Create {type.name} Account
                    </Button>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Signup;