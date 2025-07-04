import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientlogoImg from "../../assets/client-1.png";

function Clientslider() {
    const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]   
  }; 
  return (
   <>
    <div className="client-flex">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-main">Our Clients</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Slider {...settings}>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>
                    <div>
                        <figure><img src={ClientlogoImg} alt="" /></figure>
                    </div>                    
                </Slider>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Clientslider