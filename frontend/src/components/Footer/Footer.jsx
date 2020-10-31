import React from "react";
import Menu from "./Menu";
import Subscribe from "./Subscribe";
import Settings from "./Settings";


const BGTransparent = () => {
    return (
        <div className="bg-transparent mt-8 py-2">
            <div className="container">
                <div className="row align-items-center gutter-1">
                    <div className="col-md-8">
                        <p className="small text-muted">&copy; 2020 SHOPY. Product images by <a
                            href="#" className="underline">OAK + FORT</a>. Bootstrap
                            template by <a href="#" className="underline">HTMLHUNTERS</a>.
                        </p>
                    </div>
                    <div className="col-md-4 text-md-right text-muted">
                        <ul className="list list--horizontal list--separated">
                            <li>
                                <a className="small underline" href="#!">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="small underline" href="#!">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <footer className="bg-dark pb-0 text-white">
            <div className="container">
                <div className="row justify-content-md-between gutter-2">
                    <Menu />
                    <Subscribe />
                    <Settings />
                </div>
            </div>
            <BGTransparent />
        </footer>
    )
}


export default Footer;