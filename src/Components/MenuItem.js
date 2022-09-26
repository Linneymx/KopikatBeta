import React from "react";

function MenuItem({ image, name, price, description}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <h6> ${price} </h6>
      <p> ${description} </p>
    </div>
  );
}

export default MenuItem;