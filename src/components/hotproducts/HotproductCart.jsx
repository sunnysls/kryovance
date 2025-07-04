import React from 'react';
import hotPimg from "../../assets/hot-p1.png";

function HotproductCart() {
  return (
    <>
        <div className="hotproduct-cart">
            <div className="hotproduct-text">
                <div className="hot-heading">
                    HP GT53 Original Ink Bottle
                </div>
                <div className="hotP-price">
                    ₹ 2,511.00
                </div>
                <div className="hot-cta">
                    <a href="#">Shop Now</a>
                </div>
            </div>
            <div className="hotP-img">
                <figure>
                    <img src={hotPimg} alt="" />
                </figure>
            </div>
        </div>
    </>
  )
}

export default HotproductCart