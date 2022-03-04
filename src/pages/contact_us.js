import '../styles/app.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Contact Us Page.
        </p>
        <p>Go to <Link to="/">Home</Link></p>
      </header>
    </div>
  );
};

export default ContactUs;
