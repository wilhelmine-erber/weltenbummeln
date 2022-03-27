import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo-klein.jpg";

const Footer = () => {

    return (
        <>
            <div className="footer">

                <div className="footer_column">
                    <div className="footer_links">
                        <Link className="Aboutus"to="/aboutus">Über uns</Link>
                        {/* <Link className="privacy" to="/privacy">Terms & Privacy </Link> */}
                        <Link className="support" to="/support">FAQ & Hilfe</Link>
                        <Link className="contact" to="/contact">Kontakt</Link>
                    </div>

                    <p className="text-logo"> © 2021 Weltenbummeln</p>
                </div>
                <div className="footer-img-logo">
                    <img src={logo} alt="logo" width='200px' />
                </div>

            </div>
        </>
    )
}

export default Footer;
