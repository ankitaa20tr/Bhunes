import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai, India',
      rating: 5,
      text: 'The Lord Ganesha statue created by Make My Idol is absolutely divine. Every detail reflects their devotion and masterful craftsmanship. The blessing pose is captured with such grace and spiritual energy.',
    },
    {
      name: 'Priya Patel',
      location: 'New York, USA',
      text: 'I commissioned a Goddess Lakshmi statue for our new home temple. The artistry is breathtaking - from the intricate lotus details to the serene facial expression. Truly a sacred masterpiece.',
      rating: 5,
    },
    {
      name: 'Kumar Singh',
      location: 'Toronto, Canada', 
      text: 'The Nataraja Shiva statue exceeded all expectations. The dynamic pose and detailed ornamentation showcase the incredible skill of these master craftsmen. A treasure for our meditation space.',
      rating: 5,
    },
    {
      name: 'Anita Gupta',
      location: 'London, UK',
      text: 'Working with Make My Idol was a spiritual journey. They understood our vision perfectly and created a Ganesha statue that radiates divine presence in our home temple.',
      rating: 5,
    },
    {
      name: 'Vikram Mehta',
      location: 'Sydney, Australia',
      text: 'The quality of craftsmanship is unparalleled. Our Lakshmi statue is not just art - it\'s a conduit for divine energy. The attention to traditional details while maintaining modern aesthetic is remarkable.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
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
            Devotee Testimonials
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Hear from spiritual seekers whose lives have been blessed by our sacred creations.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Testimonial Card */}
          <motion.div 
            className="bg-card border border-border/50 rounded-lg p-8 lg:p-12 shadow-lg"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <motion.div 
                  className="flex justify-center gap-1 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-secondary text-secondary" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote 
                  className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  "{testimonials[currentIndex].text}"
                </motion.blockquote>

                {/* Author */}
                <motion.div 
                  className="border-t border-border/50 pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.h4 
                    className="font-display text-xl font-bold text-primary mb-2"
                  >
                    {testimonials[currentIndex].name}
                  </motion.h4>
                  <motion.p 
                    className="font-body text-muted-foreground"
                  >
                    {testimonials[currentIndex].location}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="flex justify-between items-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button 
              variant="outline" 
              size="icon"
              onClick={goToPrevious}
              className="hover:bg-secondary hover:text-secondary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-secondary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={goToNext}
              className="hover:bg-secondary hover:text-secondary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;