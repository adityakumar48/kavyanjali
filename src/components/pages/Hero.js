import React from "react";
import "./Hero.css";
import President from './President.jpg'
function Hero() {
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <div>
              <h1 className="hero_text mb-4 mt-5"> Kavyanjali</h1>

              <h4 className="hero_text_s col-12">
                The Literary Club of Graphic Era
              </h4>
              <p className="hero_text_p col-10 mx-auto">
                The literary club of Graphic Era is the largest club of Graphic
                Era with 150+ dedicated members. It is one of the most active
                clubs in campus. Being the only club of the institution which
                was actively organising events and Kavi-Sammelans virtually
                during the Lockdown.
              </p>
              <div className="mt-3">
                <a href="#" className="hero-btn mt-5 pt-4">
                  <button className="slideUpBtn">About Us</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5 pt-4">
              <div>
                <img className="president-img" src={President} width="90%" alt="banner" />
                <h4 className="president-text text-center pt-2">President</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
