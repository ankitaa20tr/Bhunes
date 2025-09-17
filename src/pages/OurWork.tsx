import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import CommissionForm from '@/components/CommissionForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award, Clock, CheckCircle, Eye, Heart, Crown, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample order data
const inProgressOrders = [
  {
    id: 'MMI1756754629873',
    name: 'Niranjan Kumar Tiwari',
    location: 'India',
    orderDate: '9/2/2025',
    stage: 2,
    totalStages: 10
  },
  {
    id: 'MMI1756754629874',
    name: 'Ankita Sharma',
    location: 'India',
    orderDate: '10/3/2025',
    stage: 5,
    totalStages: 10
  },
  {
    id: 'MMI1756754629875',
    name: 'Rajesh Patel',
    location: 'USA',
    orderDate: '8/15/2025',
    stage: 3,
    totalStages: 10
  }
];

const completedOrders = [
  {
    id: 'MMI1756754629801',
    name: 'Suresh Mehta',
    location: 'India',
    orderDate: '5/10/2025',
    completionDate: '7/15/2025'
  },
  {
    id: 'MMI1756754629802',
    name: 'Priya Gupta',
    location: 'UK',
    orderDate: '4/22/2025',
    completionDate: '6/30/2025'
  }
];

const OurWork = () => {
  const navigate = useNavigate();
  
  const handleViewDetails = (orderId: string) => {
    navigate(`/order-details/${orderId}`);
  };
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient-heritage mb-6">
                Our Sacred Craft
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                For over 15 years, we have honored a legacy of devotion by transforming raw materials into divine art through traditional, time-honored craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#gallery">
                  <Button size="lg" className="px-8">
                    Explore Gallery
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#commission">
                  <Button variant="outline" size="lg" className="px-8">
                    Commission Your Idol
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Craft Pillars Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-heritage mb-4">
                Master Craftsman at Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our sacred craft is guided by three pillars that ensure every creation honors the divine with unmatched craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Crown className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Tradition</h3>
                  <p className="text-muted-foreground">Preserving ancient techniques to ensure each idol carries the soul of classical artistry.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Devotion</h3>
                  <p className="text-muted-foreground">Infusing every creation with spiritual energy and reverence, making it more than just a statue.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">Committing to the finest materials and masterful skill for an unparalleled, heirloom-quality result.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey of Creation Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-heritage mb-4">
                The Journey of Creation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each sacred piece undergoes a meticulous process from vision to completion.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-3">1</div>
                  <h3 className="text-xl font-bold mb-2">The Vision</h3>
                  <p className="text-sm text-muted-foreground">We begin with a personal consultation to understand your spiritual vision, sketching out the initial design.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-3">2</div>
                  <h3 className="text-xl font-bold mb-2">The Foundation</h3>
                  <p className="text-sm text-muted-foreground">Premium bronze, brass, or marble is hand-selected for its spiritual significance and timeless beauty.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-3">3</div>
                  <h3 className="text-xl font-bold mb-2">The Form</h3>
                  <p className="text-sm text-muted-foreground">Using time-honored techniques, master artisans give form to the divine, sculpting with devotion and precision.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-3">4</div>
                  <h3 className="text-xl font-bold mb-2">The Details</h3>
                  <p className="text-sm text-muted-foreground">Every intricate feature, from expression to ornamentation, is meticulously perfected, breathing life into the idol.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-3">5</div>
                  <h3 className="text-xl font-bold mb-2">The Finish</h3>
                  <p className="text-sm text-muted-foreground">The piece undergoes a final, sacred finishing and polishing, enhancing its divine aura for generations to come.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-heritage mb-4">
                Begin Your Own Sacred Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Commission a timeless piece that reflects your devotion. Let our artisans bring your spiritual vision to life.
              </p>
              <a href="#commission">
                <Button size="lg" className="px-8">
                  Commission an Idol
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* Orders Section */}
        <section id="orders" className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-heritage mb-4">
                Our Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track the progress of your commissioned pieces and view our completed masterpieces.
              </p>
            </motion.div>
            
            <Tabs defaultValue="in-progress" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="in-progress" className="text-lg py-3">
                  <Clock className="mr-2 h-4 w-4" />
                  In Progress
                </TabsTrigger>
                <TabsTrigger value="completed" className="text-lg py-3">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Completed
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="in-progress" className="space-y-6">
                {inProgressOrders.map((order) => (
                  <motion.div 
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{order.name}</h3>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                              <div>Order ID: {order.id}</div>
                              <div>Location: {order.location}</div>
                              <div>Ordered: {order.orderDate}</div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex flex-col items-center">
                              <Badge variant="outline" className="mb-2 px-3 py-1">
                                Stage {order.stage}/{order.totalStages}
                              </Badge>
                              <div className="w-full bg-muted rounded-full h-2 mb-1">
                                <div 
                                  className="bg-primary rounded-full h-2" 
                                  style={{ width: `${(order.stage / order.totalStages) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                Progress: {Math.round((order.stage / order.totalStages) * 100)}%
                              </span>
                            </div>
                            
                            <Button onClick={() => handleViewDetails(order.id)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-6">
                {completedOrders.map((order) => (
                  <motion.div 
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{order.name}</h3>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                              <div>Order ID: {order.id}</div>
                              <div>Location: {order.location}</div>
                              <div>Ordered: {order.orderDate}</div>
                              <div>Completed: {order.completionDate}</div>
                            </div>
                          </div>
                          
                          <div>
                            <Badge className="mb-3 px-3 py-1 bg-green-500 text-white">
                              Completed
                            </Badge>
                            <Button onClick={() => handleViewDetails(order.id)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-heritage mb-4">
                Divine Artistry Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each piece in our collection tells a story of devotion, precision, and the timeless beauty 
                of traditional craftsmanship.
              </p>
            </motion.div>
            <Gallery />
          </div>
        </section>

        {/* Commission Section */}
        <section id="commission" className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <CommissionForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurWork;

