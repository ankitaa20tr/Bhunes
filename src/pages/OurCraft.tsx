import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Gallery from '@/components/Gallery';

const OurCraft = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero / Intro */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient-heritage mb-6">
                Our Sacred Craft
              </h1>
              <p className="text-xl text-muted-foreground">
                For over 15 years, we have honored a legacy of devotion by transforming raw materials into divine art through traditional, time-honored craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
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

        {/* Detail Images (use existing gallery for now) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-heritage mb-4">
                Detailed Views
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed view of sculpting tools • Close-up of a finished bronze statue
              </p>
            </motion.div>
            <Gallery />
          </div>
        </section>

        {/* Process / Journey of Creation */}
        <section className="py-16 bg-muted/20">
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

            <div className="text-center mb-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-gradient-heritage mb-4">
                Begin Your Own Sacred Journey
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Commission a timeless piece that reflects your devotion. Let our artisans bring your spiritual vision to life.
              </p>
              <a href="/our-work#commission">
                <Button size="lg" className="px-8">
                  Commission an Idol
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurCraft;


