import React from "react";


const Subscribe = () => {
    return (
        <div className="order-2 order-md-3 order-lg-2 col-md-8 col-lg-4">
            <h4 className="eyebrow mb-1">Subscribe to Newsletter</h4>
            <div className="input-combined mb-2">
                <input type="text" className="form-control" placeholder="Your email" aria-label="Your Email"
                       aria-describedby="button-addon2" />
                    <button className="btn btn-white" type="button" id="button-addon2">Subscribe</button>
                    <span className="input-combined_indicator"></span>
            </div>
            <ul className="list list--horizontal">
                <li><a href="#!" className="text-hover-facebook"><i
                    className="fs-28 icon-facebook-square-brands"></i></a></li>
                <li><a href="#!" className="text-hover-instagram"><i className="fs-28 icon-instagram-square-brands"></i></a>
                </li>
                <li><a href="#!" className="text-hover-twitter"><i className="fs-28 icon-twitter-square-brands"></i></a>
                </li>
                <li><a href="#!" className="text-hover-pinterest"><i className="fs-28 icon-pinterest-square-brands"></i></a>
                </li>
            </ul>
        </div>
    )
}


export default Subscribe;