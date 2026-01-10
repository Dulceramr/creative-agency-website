import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Espacio para probar scroll */}
        <div style={{ 
          height: '100vh', 
          padding: '2rem',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p>Next section will go here...</p>
        </div>
      </main>
    </div>
  );
}

export default App;