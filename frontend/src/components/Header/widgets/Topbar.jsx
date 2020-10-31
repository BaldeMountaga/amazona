import React from "react";

import OwlCarousel from "../../../widgets/OwlCarousel";


const Topbar = () => {
    return (
        <div className="py-1 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <OwlCarousel data-loop="true" data-items="[3,3,2,1]"
                             data-margin="10" data-nav="true">
                            <h6 className="fs-14 text-uppercase text-center text-white m-0"><i
                                className="icon-truck mr-1 text-opaque"></i> Free Shipping and Returns</h6>
                            <h6 className="fs-14 text-uppercase text-center text-white m-0"><i
                                className="icon-award mr-1 text-opaque"></i> 2 Years of Warranty</h6>
                            <h6 className="fs-14 text-uppercase text-center text-white m-0"><i
                                className="icon-shield mr-1 text-opaque"></i> 30 Days Moneyback Guarantee</h6>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Topbar;