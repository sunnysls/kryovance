import React from 'react'
import HotproductCart from './HotproductCart'


function HotProducts() {
  return (
    <>
       <div className="hotProdcut_flex">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="hotproduct-heading">
                <div className="hot-suptext">Power Up Your Printing and Photography
                  <div className="hot-boldtext">Fast, Reliable & Affordable!!</div> 
                </div>                             
              </div>
            </div>
            <div className="col-md-3">
              <HotproductCart />
            </div>
            <div className="col-md-3">
              <HotproductCart />
            </div>
            <div className="col-md-3">
              <HotproductCart />
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default HotProducts