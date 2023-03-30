import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            © 2023 Airbnb, Inc. Terms Sitemap <a href={document.location+"privacy"}>Privacy</a>
        </div>
    )
}

export default Footer;