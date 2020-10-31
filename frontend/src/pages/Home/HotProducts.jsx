import React from "react";


const HotProducts = props => {
    return (
        <section className="py-lg-0 no-overflow">
            <div className="container">
                <div className="row align-items-center gutter-1">
                    <div className="col-lg-3">
                        <div className="pr-lg-5">
                            <div className="level-1">
                                <span className="eyebrow text-muted">Hot Products</span>
                                <h2>Top Sellers</h2>
                                <div className="nav nav-tabs flex-lg-column mt-md-3 lavalamp">
                                    <a className="nav-item nav-link active" data-filter="1">Women</a>
                                    <a className="nav-item nav-link" data-filter="2">Men</a>
                                    <a className="nav-item nav-link" data-filter="3">Kids</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gutter-2 filtr-container imagesloaded">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}