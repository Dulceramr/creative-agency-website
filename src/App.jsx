import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import DesignStrategy from './components/sections/DesignStrategy';
import ApproachSection from './components/sections/ApproachSection';
import CarouselSection from './components/sections/CarouselSection';
import CTASection from './components/sections/CTASection'; // Nuevo
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <HeroSection />
        <DesignStrategy />
        <ApproachSection />
        <CarouselSection />
        <CTASection /> 
      </main>

    </div>
  );
}

export default App;