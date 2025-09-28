import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Car, Building2, Shield } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const userTypes = [
    {
      id: 'passenger',
      name: 'Passenger',
      icon: User,
      description: 'Book rides and rent vehicles',
    },
    {
      id: 'driver',
      name: 'Driver',
      icon: Car,
      description: 'Drive and earn with us',
    },
    {
      id: 'agency',
      name: 'Agency',
      icon: Building2,
      description: 'Manage your fleet',
    },
    {
      id: 'admin',
      name: 'Admin',
      icon: Shield,
      description: 'Platform management',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (userType: string) => {
    console.log('Login attempt:', { userType, ...formData });
    // Authentication logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your Campus Cab account</p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
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
                      <Label htmlFor={`password-${type.id}`}>Password</Label>
                      <div className="relative">
                        <Input
                          id={`password-${type.id}`}
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
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

                    <div className="flex items-center justify-between">
                      <Link
                        to="/forgot-password"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => handleSubmit(type.id)}
                      disabled={!formData.email || !formData.password}
                    >
                      Sign In as {type.name}
                    </Button>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up here
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

export default Login;