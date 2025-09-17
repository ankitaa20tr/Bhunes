import ganeshImage from '@/assets/optimized/statue-ganesha.webp';
import lakshmiImage from '@/assets/optimized/statue-lakshmi.webp';
import shivaImage from '@/assets/optimized/statue-shiva.webp';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const creations = [
    {
      id: 'GAN001',
      name: 'Lord Ganesha - Blessing Pose',
      stage: 'Completed',
      progress: 100,
      client: 'Rajesh Sharma',
      country: 'India',
      status: 'Delivered',
      image: ganeshImage,
    },
    {
      id: 'LAK002', 
      name: 'Goddess Lakshmi - Lotus Throne',
      stage: 'Finishing',
      progress: 85,
      client: 'Priya Patel',
      country: 'USA',
      status: 'In Progress',
      image: lakshmiImage,
    },
    {
      id: 'SHI003',
      name: 'Lord Shiva - Nataraja Form',
      stage: 'Detail Work',
      progress: 65,
      client: 'Kumar Singh', 
      country: 'Canada',
      status: 'In Progress',
      image: shivaImage,
    },
    {
      id: 'GAN004',
      name: 'Lord Ganesha - Seated Meditation',
      stage: 'Form Creation',
      progress: 40,
      client: 'Anita Gupta',
      country: 'UK',
      status: 'In Progress',
      image: ganeshImage,
    },
    {
      id: 'LAK005',
      name: 'Goddess Lakshmi - Standing Grace',
      stage: 'Foundation',
      progress: 20,
      client: 'Vikram Mehta',
      country: 'Australia',
      status: 'In Progress',
      image: lakshmiImage,
    },
    {
      id: 'SHI006',
      name: 'Lord Shiva - Meditation Pose',
      stage: 'Completed',
      progress: 100,
      client: 'Deepak Joshi',
      country: 'India',
      status: 'Delivered',
      image: shivaImage,
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Delivered' ? 'bg-green-500' : 'bg-secondary';
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="font-display text-4xl lg:text-5xl font-bold text-gradient-heritage mb-6"
          >
            Recent Sacred Creations
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Witness our ongoing devotional work as we bring divine visions to life for devotees around the world.
          </motion.p>
        </motion.div>

        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          {creations.map((creation, index) => (
            <motion.div 
              key={creation.id}
              className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <motion.div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={creation.image} 
                  alt={creation.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchpriority={index < 2 ? "high" : "low"}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <motion.span 
                    className={`px-3 py-1 text-xs font-medium rounded-full text-white ${getStatusColor(creation.status)}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {creation.status}
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {creation.name}
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    {creation.id}
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground mb-4">
                  Current Stage: <span className="font-medium text-foreground">{creation.stage}</span>
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-body text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{creation.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${creation.progress}%` }}
                    />
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-muted-foreground">Client</p>
                    <p className="font-medium text-foreground">{creation.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{creation.country}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;