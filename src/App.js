import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css'  // you need to require the css somewhere
import { Header } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Police } from './Pages/Police';
import ADF from './Pages/ADF';
import About from './Pages/About';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/home" element={<Home />} exact />
              <Route path="/police" element={<Police />} exact />
              <Route path="/adf" element={<ADF />} exact />
              <Route path="/about" element={<About />} exact />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
