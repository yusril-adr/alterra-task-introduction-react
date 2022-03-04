import '../styles/app.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Homepage.
        </p>
  
        <p>Go to <Link to="/contact-us">Contact Us</Link></p>
      </header>
    </div>
  );
};

export default Home;
