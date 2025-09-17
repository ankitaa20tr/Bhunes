import { Eye, Hammer, Shapes, Brush, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'We begin with your spiritual vision, understanding the sacred significance and desired characteristics of your deity.',
    },
    {
      icon: Hammer,
      title: 'Foundation',
      description: 'Master craftsmen prepare the finest materials, selecting premium metals and stones for your sacred creation.',
    },
    {
      icon: Shapes,
      title: 'Form',
      description: 'Traditional sculpting techniques bring the divine form to life, with each curve and expression carefully crafted.',
    },
    {
      icon: Brush,
      title: 'Details',
      description: 'Intricate ornamentation, facial expressions, and sacred symbols are meticulously added with devotional precision.',
    },
    {
      icon: Star,
      title: 'Finish',
      description: 'Final blessings and finishing touches complete your sacred idol, ready to grace your sacred space.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-background">
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
            The Sacred Process
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Each deity is brought to life through our time-honored five-step process, ensuring divine perfection in every detail.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary via-primary to-burgundy hidden lg:block"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div 
                    className="bg-card border border-border/50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <motion.h3 
                      className="font-display text-2xl font-bold text-primary mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="font-body text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className="relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 10, 
                    delay: 0.3 + index * 0.2 
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-secondary-foreground" />
                  </motion.div>
                  <motion.div 
                    className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    whileHover={{ opacity: 0.8 }}
                  />
                  
                  {/* Step Number */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10, 
                      delay: 0.6 + index * 0.2 
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;