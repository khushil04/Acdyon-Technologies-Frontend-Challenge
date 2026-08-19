import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramCards from './components/ProgramCards';
import PathFinder from './components/PathFinder';
import ValueSection from './components/ValueSection';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f3f0] text-[#11151b]">
      <Navbar />
      <main id="top">
        <Hero />
        <ProgramCards />
        <PathFinder />
        <ValueSection />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
