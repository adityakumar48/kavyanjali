import './App.css';
import NavBar from "./components/pages/NavBar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Team from './components/pages/Team';
import Event from './components/pages/Event';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Team />
      <Event />
    </div>
  );
}

export default App;
