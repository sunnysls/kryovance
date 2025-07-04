import React from 'react';
import Productone from "../../assets/product-1.jpg";
import Cartwhite from "../../assets/cart-icon-w.svg";

function Mainproductcart() {
  return (
    <>
        <div className="productCart-flex">
            <figure>
                <img src={Productone} alt="" />
            </figure>
            <div className="product-heading"><a href="#">Epson EcoTank ET-2862 A4 Colour Multifun..</a></div>
            <div className="product-subtext">HP Printer</div>
            <div className="price-area">
                <div className="main-price">₹20,999 <span>MRP ₹23,525</span></div>
                <div className="discount">11%off</div>                
            </div>
            <div className="cart-ctaflex">
                <div className="cart-plus-flex">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-default btn-subtract" type="button">-</button>
                        </span>
                        <input type="text" className="form-control no-padding text-center item-quantity" value="1" />
                        <span className="input-group-btn">
                            <button className="btn btn-default btn-add" type="button">+</button>
                        </span>
                    </div>
                </div>
                <div className="cart-cta"><button><img src={Cartwhite} alt="" /></button></div>
            </div>
        </div>
    </>
  )
}

export default Mainproductcart