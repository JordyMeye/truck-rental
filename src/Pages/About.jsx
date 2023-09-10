//import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
              we're your partner in adventure. With a fleet of reliable trucks and 
              a commitment to service, we make your journey easy. Whether you're moving,
               tackling a project, or going on a road trip, our top-notch trucks are ready
                to roll.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="truck-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Truck Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="truck-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <HeroPages />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a truck by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(+26) 49768637</h3>
            </span>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default About;
