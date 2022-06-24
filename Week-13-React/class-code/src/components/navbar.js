import React from "react";
import Navlinks from "./Navlinks";

function Navbar (props) {
    return(
        <nav className="navbar bg-light mb-5">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <Navlinks hrefName="https://www.google.com" linkName="Google" />
                    <Navlinks hrefName="facebook.com" linkName="Facebook" />
                    <Navlinks hrefName="linkedin.com" linkName="LinkedIn" />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;