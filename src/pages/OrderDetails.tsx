import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Sample order data - in a real app, this would come from an API
const orderData = {
  'MMI1756754629873': {
    id: 'MMI1756754629873',
    name: 'Niranjan Kumar Tiwari',
    location: 'India',
    orderDate: '9/2/2025',
    stage: 2,
    totalStages: 10,
    email: 'niranjan@example.com',
    phone: '+91 98765 43210',
    stageDetails: [
      {
        stage: 1,
        title: 'Order Verified & Consultation Complete',
        completed: true,
        date: '9/3/2025',
        images: ['https://via.placeholder.com/300x200?text=Stage+1+Image']
      },
      {
        stage: 2,
        title: 'First Advance Payment Confirmed',
        completed: true,
        date: '9/5/2025',
        images: []
      },
      {
        stage: 3,
        title: 'Artisans Assigned',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 4,
        title: 'Model Ready',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 5,
        title: 'Changes Implemented',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 6,
        title: 'Second Advance Payment Confirmed',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 7,
        title: 'Carving Complete',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 8,
        title: 'Final Touch and Polishing Complete',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 9,
        title: 'Final Payment Received',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 10,
        title: 'Product Delivered',
        completed: false,
        date: '',
        images: []
      }
    ]
  },
  'MMI1756754629874': {
    id: 'MMI1756754629874',
    name: 'Ankita Sharma',
    location: 'India',
    orderDate: '10/3/2025',
    stage: 5,
    totalStages: 10,
    email: 'ankita@example.com',
    phone: '+91 98765 43211',
    stageDetails: [
      {
        stage: 1,
        title: 'Order Verified & Consultation Complete',
        completed: true,
        date: '10/4/2025',
        images: ['https://via.placeholder.com/300x200?text=Stage+1+Image']
      },
      {
        stage: 2,
        title: 'First Advance Payment Confirmed',
        completed: true,
        date: '10/6/2025',
        images: []
      },
      {
        stage: 3,
        title: 'Artisans Assigned',
        completed: true,
        date: '10/10/2025',
        images: ['https://via.placeholder.com/300x200?text=Stage+3+Image']
      },
      {
        stage: 4,
        title: 'Model Ready',
        completed: true,
        date: '10/20/2025',
        images: ['https://via.placeholder.com/300x200?text=Stage+4+Image']
      },
      {
        stage: 5,
        title: 'Changes Implemented',
        completed: true,
        date: '10/25/2025',
        images: ['https://via.placeholder.com/300x200?text=Stage+5+Image']
      },
      {
        stage: 6,
        title: 'Second Advance Payment Confirmed',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 7,
        title: 'Carving Complete',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 8,
        title: 'Final Touch and Polishing Complete',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 9,
        title: 'Final Payment Received',
        completed: false,
        date: '',
        images: []
      },
      {
        stage: 10,
        title: 'Product Delivered',
        completed: false,
        date: '',
        images: []
      }
    ]
  },
  // Add more orders as needed
};

const OrderDetails = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchOrder = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (orderId && orderData[orderId]) {
          setOrder(orderData[orderId]);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrder();
  }, [orderId]);
  
  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!order) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
                <p className="text-muted-foreground mb-6">The order you're looking for doesn't exist or has been removed.</p>
                <Link to="/our-work">
                  <Button>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Our Work
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <Link to="/our-work">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Our Work
              </Button>
            </Link>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl lg:text-3xl mb-2">Order Progress</CardTitle>
                  <CardDescription>Track the progress of your sacred idol creation</CardDescription>
                </div>
                <Badge variant="outline" className="px-3 py-1 text-base">
                  Stage {order.stage}/{order.totalStages}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-muted rounded-full h-3 mb-4">
                <div 
                  className="bg-primary rounded-full h-3" 
                  style={{ width: `${(order.stage / order.totalStages) * 100}%` }}
                ></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order ID:</span>
                      <span className="font-medium">{order.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Date:</span>
                      <span className="font-medium">{order.orderDate}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Customer</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-medium">{order.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Country:</span>
                      <span className="font-medium">{order.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Your Order</CardTitle>
                    <CardDescription>
                      Login to see private details, comments, and manage payments.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Customer Login</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-2xl font-bold mb-6">Order Progress Timeline</h2>
          
          <div className="space-y-6">
            {order.stageDetails.map((stage: any, index: number) => (
              <motion.div 
                key={stage.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className={stage.completed ? 'border-green-500 border-2' : ''}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${stage.completed ? 'bg-green-100' : 'bg-muted'}`}>
                        {stage.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <Clock className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <h3 className="text-lg font-semibold">
                            Stage {stage.stage}: {stage.title}
                          </h3>
                          {stage.completed && stage.date && (
                            <Badge variant="outline">{stage.date}</Badge>
                          )}
                        </div>
                        
                        {stage.images && stage.images.length > 0 && (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {stage.images.map((image: string, imgIndex: number) => (
                              <motion.div 
                                key={imgIndex}
                                whileHover={{ scale: 1.05 }}
                                className="overflow-hidden rounded-md"
                              >
                                <img 
                                  src={image} 
                                  alt={`Stage ${stage.stage} Image ${imgIndex + 1}`} 
                                  className="w-full h-auto object-cover"
                                />
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderDetails;