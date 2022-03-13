import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import altaLogoImg from '../images/logo-ALTA@2x.png';
import unsplashImg from '../images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <>
      <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="alterra">
                      <Link to="index.html">
                        <img className="logo-atas" src={altaLogoImg} alt="" />
                      </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="row align-items-center navig">
                      <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="/" className="aktif">HOME</Link></div>
                      <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><Link to="/about">ABOUT</Link></div>
                      <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><Link to="#">EXPERIENCE</Link></div>
                      <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="contact-us">CONTACT</Link></div> 
                  </div>
                </div>    
            </div>
        </div> 
    </header>
    
    <div className="container h-100">
        <div className="row align-items-center isi-home">
            <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                <img 
                  id="foto-profil"
                  src={unsplashImg}
                  alt=""  
                />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="main-p">
                    <p className="sapaan">Hi, my name is </p>
                    <p className="nama">Anne Sullivan</p>
                    <p className="hobi">I build things for the web</p>
                    <p className="tombol"><Link to="#">Get In Touch</Link></p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;
