import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import Statistics from '@/components/Statistics';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
