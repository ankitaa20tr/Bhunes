import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Statistics = () => {
  const [counts, setCounts] = useState({ delivered: 0, progress: 0, devotees: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = { delivered: 847, progress: 12, devotees: 1250 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        delivered: Math.floor(finalCounts.delivered * progress),
        progress: Math.floor(finalCounts.progress * progress),
        devotees: Math.floor(finalCounts.devotees * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);
  };

  const stats = [
    {
      number: counts.delivered,
      label: 'Creations Delivered',
      suffix: '',
    },
    {
      number: counts.progress,
      label: 'Currently In Progress',
      suffix: '',
    },
    {
      number: counts.devotees,
      label: 'Satisfied Devotees',
      suffix: '+',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-primary to-burgundy text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="font-display text-4xl lg:text-5xl font-bold mb-6"
          >
            Our Sacred Legacy
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Numbers that reflect our devotion to creating divine masterpieces for spiritual seekers worldwide.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              >
                <motion.span 
                  className="font-display text-5xl lg:text-6xl font-bold text-secondary inline-block"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.5 + index * 0.2 
                  }}
                >
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </motion.span>
              </motion.div>
              <motion.p 
                className="font-body text-lg lg:text-xl text-white/90 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;