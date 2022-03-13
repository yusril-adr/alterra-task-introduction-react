import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/main.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/contact_us';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" index element={<About />} />
      <Route path="/contact-us" index element={<ContactUs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
