import { useEffect } from "react";
import { Link } from "react-router-dom";
import altaLogoImg from "../images/logo-ALTA@2x.png";
import altaLogoV2Img from "../images/logo-ALTA-v2@2x.png";
import unsplashImg from "../images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import fbLogoImg from "../images/ic_fb@2x.png";
import twitterLogoImg from "../images/ic-twitter@2x.png";
import igLogoImg from "../images/ic-instagram@2x.png";
import linkedinLogoImg from "../images/ic-linkedin@2x.png";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="alterra">
                <Link to="/">
                  <img className="logo-atas" src={altaLogoImg} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row align-items-center navig">
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <Link to="/">HOME</Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                  <Link to="/about" className="aktif">
                    ABOUT
                  </Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                  <Link to="#">EXPERIENCE</Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <Link to="/contact-us">CONTACT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid about-me">
        <h1 className="container pl-2 pt-5 pb-5">ABOUT ME.</h1>
      </div>

      <div className="container">
        <div className="row pt-5 pb-5 ">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
            <div className="about-anne">
              <p>
                Hello! I’m Anne Sullivan, a full-stack engineer based in Malang,
                IDN who enjoys building things that live on the internet. I
                develop exceptional websites and web apps that provide
                intuitive, pixel-perfect user interfaces with efficient and
                modern backends. <br />
                <br />
                Shortly after graduating from Alterra Academy, I joined the
                engineering team at Alterra where I work on a wide variety of
                interesting and meaningful projects on a daily basis. <br />
                <br />
                Here’s few technologies I’ve been working with recently :
              </p>
            </div>
            <div>
              <table className="tabel-anne">
                <tr>
                  <td>HTML & CSS</td>
                  <td>Serverless</td>
                  <td>Scrum</td>
                </tr>
                <tr>
                  <td>Programming</td>
                  <td>Restful API</td>
                  <td>Test-Driven Dev</td>
                </tr>
                <tr>
                  <td>Database</td>
                  <td>Javascript</td>
                  <td>Software Testing</td>
                </tr>
                <tr>
                  <td>Git & Github</td>
                  <td>Sigle Page App</td>
                  <td>UX/UI Designer</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
            <div className="foto-id text-lg-right text-md-center text-sm-center">
              <img src={unsplashImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
              <Link to="/">
                <img
                  className="logo-bawah"
                  src={altaLogoV2Img}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
              <h6>Social Media:</h6>
              <Link to="https://www.facebook.com/AlterraAcademy">
                <img className="logo-sosmed" src={fbLogoImg} alt="" />
              </Link>
              <Link to="https://twitter.com/">
                <img className="logo-sosmed" src={twitterLogoImg} alt="" />
              </Link>
              <Link to="https://www.instagram.com/alterra.academy/">
                <img className="logo-sosmed" src={igLogoImg} alt="" />
              </Link>
              <Link to="https://id.linkedin.com/">
                <img className="logo-sosmed" src={linkedinLogoImg} alt="" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
              <h6 className="text-lg-right text-md-center text-sm-center kopi">
                Copyleft © 2019 - Unjelas Team
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
