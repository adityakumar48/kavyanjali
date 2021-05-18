import './App.css';
import NavBar from "./components/pages/NavBar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Team from './components/pages/Team';
import Event from './components/pages/Event';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Team />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
