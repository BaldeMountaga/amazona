import React from "react";

import bg1 from '../../../assets/images/demo/background-1.jpg'
import bg2 from '../../../assets/images/demo/background-2.jpg'

const Swiper = () => {
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">

                <div className="swiper-slide">
                    <div className="image" style={{backgroundImage: `url('${bg2}')`}}></div>
                    <div className="container">
                        <div className="row align-items-end vh-100">
                            <div className="col-lg-8 text-white" data-swiper-parallax-x="-100%">
                                <span className="eyebrow">New Collection</span>
                                <h1 className="mb-3 text-uppercase">Summer is here</h1>
                                <a href="listing-full.html" className="btn btn-outline-white">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="image image--overlay"
                         style={{backgroundImage: `url('${bg1}')`}}></div>
                    <div className="container">
                        <div className="row align-items-end vh-100">
                            <div className="col-lg-8 text-white" data-swiper-parallax-x="-100%">
                                <span className="eyebrow">New Collection</span>
                                <h1>Casual Dresses</h1>
                                <a href="listing-full.html" className="btn btn-outline-white">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="swiper-footer">
                <div className="container">
                    <div className="row justify-content-end align-items-center">
                        <div className="col-lg-6 text-right">
                            <div className="swiper-navigation">
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Swiper;