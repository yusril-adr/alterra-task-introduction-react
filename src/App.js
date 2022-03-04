import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import ContactUs from './pages/contact_us';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" index element={<ContactUs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
