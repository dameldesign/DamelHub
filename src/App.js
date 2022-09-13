import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Qualities from './components/Qualities/Qualities';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Qualities />
      <Feature />
    </div>
  );
}

export default App;
