import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Stats from './components/Stats'
import Community from './components/Community';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App overflow-clip">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Stats />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
