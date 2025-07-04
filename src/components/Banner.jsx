import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import printerImg from "../assets/printer.png";

function Banner() {
  return (
    <>
        <div className="banner_flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="banner-content">
                                                <h1>India's Best Home Printers <span>2025</span></h1>
                                                <p>Reliable and affordable printers perfect for everyday use at home.</p>
                                                <div className="banner-cta">
                                                    <a href="#">Shop Now <FontAwesomeIcon icon={faArrowRight} /></a>
                                                </div>    
                                            </div>                                                
                                        </div>
                                        <div className="col-md-8">
                                            <div className="banner-img">
                                                <figure>
                                                    <img src={printerImg} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="banner-content">
                                                <h1>India's Best Home Printers <span>2025</span></h1>
                                                <p>Reliable and affordable printers perfect for everyday use at home.</p>
                                                <div className="banner-cta">
                                                    <a href="#">Shop Now <FontAwesomeIcon icon={faArrowRight} /></a>
                                                </div>    
                                            </div>                                                
                                        </div>
                                        <div className="col-md-8">
                                            <div className="banner-img">
                                                <figure>
                                                    <img src={printerImg} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="banner-content">
                                                <h1>India's Best Home Printers <span>2025</span></h1>
                                                <p>Reliable and affordable printers perfect for everyday use at home.</p>
                                                <div className="banner-cta">
                                                    <a href="#">Shop Now <FontAwesomeIcon icon={faArrowRight} /></a>
                                                </div>    
                                            </div>                                                
                                        </div>
                                        <div className="col-md-8">
                                            <div className="banner-img">
                                                <figure>
                                                    <img src={printerImg} alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Arrows --> */}
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner