import React from 'react'
import Mainproductcart from './Mainproductcart'

function ProductCategory() {
  return (
    <>
        <div className="productCategory-flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-main">Category</div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="category_tabs">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">HP Printer</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Kodak Printers</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Kodak Thermal Media</button>
                            </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="load-more">
                                                <div className="load-text">
                                                    Load More...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>                                        
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>
                                        <div className="col-md-3">
                                            <Mainproductcart />
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCategory