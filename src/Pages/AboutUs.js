import React from "react";
import { Link } from "react-router-dom";

import "../Styles/AboutUs.css";


function AboutUs() {

  return (
    <div className="about">

      <div className="aboutBottom">
        <h1>Our History</h1>
        <p>
        El primer café para gatos del mundo, 
        "Cat Flower Garden" (貓 花園[3] ),
         abrió en Taipei , Taiwán ,
          en 1998 y finalmente se convirtió 
          en un destino turístico mundial. 

          El concepto floreció en Japón, 
          donde el primero llamado "Neko no Jikan"

          
           (literalmente "Cat's Time") se abrió en Osaka en 2004.

           Con una tematica similar nacio "KopiKat".
        </p>
   
        <Link to="/menu">
          <button> Menu</button>
        </Link>
      </div>

    </div>
  );
}

export default AboutUs;