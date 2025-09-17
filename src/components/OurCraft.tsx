import { Heart, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const OurCraft = () => {
  const pillars = [
    {
      icon: Crown,
      title: 'Tradition',
      description: 'Centuries-old techniques passed down through generations of master craftsmen, preserving the sacred art of deity creation.',
    },
    {
      icon: Heart,
      title: 'Devotion',
      description: 'Every statue is crafted with deep spiritual reverence, infusing each piece with divine energy and heartfelt dedication.',
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'Uncompromising attention to detail using premium materials, ensuring each creation is a masterpiece of spiritual art.',
    },
  ];

  return (
    <section id="craft" className="py-20 lg:py-32 bg-muted/30">
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
            Our Sacred Craft
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Three pillars guide our artistry, ensuring every creation honors the divine with unmatched craftsmanship.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div className="relative mb-8">
                <motion.div 
                  className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <pillar.icon className="w-12 h-12 text-secondary-foreground" />
                </motion.div>
                <motion.div 
                  className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.h3 
                className="font-display text-2xl font-bold text-primary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
              >
                {pillar.title}
              </motion.h3>
              
              <motion.p 
                className="font-body text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                {pillar.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCraft;