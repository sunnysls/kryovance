import React from 'react';
import PurpleCricle from "../../assets/purple-circle.svg";
import whyDots from "../../assets/dots.svg";
import WhyGirlImg from "../../assets/why-img.png";
import Lightprint from "../../assets/light-printer.svg";

function Whyexplore() {
  return (
    <>
      <div className="whyFlex">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="whyMainContent">
                <span class="whySubtitle bg-primary-opacity">
                  Explore Printers
                </span>
                <h2 class="Whytitle">
                  "Top Printers for Every Need"
                </h2>
                <p>
                  Discover the best printers for home, office, and creative use. From inkjet to laser, explore features, performance, and budget-friendly options.
                </p> 
                <div className="why-cta">
                    <a href="#">Model Collection</a>
                </div>               
              </div>
            </div>
            <div className="col-md-5">
              <div className="whyImg">
                <div className="why-dots">
                  <img src={whyDots} alt="" />
                </div>
                <div className="purple-circle">
                  <img src={PurpleCricle} alt="" />
                </div>                
                <div className="why-girl-img">
                  <img src={WhyGirlImg} alt="" />
                </div>
                <div className="why-qutote">
                  <img src={Lightprint} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whyexplore