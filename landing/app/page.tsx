import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Mountains from '@/components/Mountain/Mountain';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Mountains />
      <Footer />
    </main>
  );
}