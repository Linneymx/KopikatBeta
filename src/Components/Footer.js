import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <FacebookIcon />       </div>
      <p>KopiKat &copy; 2022 Derechos Reservados</p>
    </div>
  );
}

export default Footer;