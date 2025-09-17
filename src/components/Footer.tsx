import { motion } from 'framer-motion';

const Footer = () => {
  const craftLinks = [
    { name: 'Our Craft', href: '/our-craft' },
    { name: 'Gallery', href: '/our-work#gallery' },
    { name: 'Commission Form', href: '/our-work#commission' },
    { name: 'Process', href: '/our-craft#process' },
  ];

  const serviceLinks = [
    { name: 'Customer Service', href: '#' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'My Account', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const policyLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: { x: 5, color: '#F9C846' }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <motion.div 
        className="container mx-auto px-4 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="grid lg:grid-cols-4 gap-12"
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.h3 
              className="font-display text-3xl font-bold text-secondary mb-4"
              variants={itemVariants}
            >
              Make My Idol
            </motion.h3>
            <motion.p 
              className="font-body text-primary-foreground/90 leading-relaxed mb-6 max-w-md"
              variants={itemVariants}
            >
              Creating sacred idols with devotion, precision, and craftsmanship passed down through generations. 
              Every statue is a testament to our spiritual heritage and unwavering commitment to divine artistry.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              {/* Social Media Icons Placeholder */}
              <motion.div 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-secondary font-bold">f</span>
              </motion.div>
              <motion.div 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-secondary font-bold">i</span>
              </motion.div>
              <motion.div 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/30 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-secondary font-bold">@</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Our Craft Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-display text-xl font-bold text-secondary mb-6"
              variants={itemVariants}
            >
              Our Craft
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {craftLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.a 
                    href={link.href}
                    className="font-body text-primary-foreground/80 hover:text-secondary transition-colors inline-block"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-display text-xl font-bold text-secondary mb-6"
              variants={itemVariants}
            >
              Support
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.a 
                    href={link.href}
                    className="font-body text-primary-foreground/80 hover:text-secondary transition-colors inline-block"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-primary-foreground/20 mt-12 pt-8"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-center gap-4"
            variants={containerVariants}
          >
            {/* Policies */}
            <motion.div 
              className="flex flex-wrap gap-6"
              variants={itemVariants}
            >
              {policyLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                  custom={index}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div 
              className="text-center lg:text-right"
              variants={itemVariants}
            >
              <motion.p 
                className="font-body text-sm text-primary-foreground/70"
                variants={itemVariants}
              >
                © 2025 Make My Idol. Crafted with{' '}
                <motion.span 
                  className="text-secondary"
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    transition: { 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 1.5 
                    }
                  }}
                >
                  ❤️
                </motion.span> in India
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;