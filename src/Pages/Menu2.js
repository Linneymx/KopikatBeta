import React from "react";
import { Link } from "react-router-dom";
import { DataList2 } from "../Databases/DataList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";

function Menu2() {

  return (
    <div className="menu">
      <h1 className="menuTitle">Cakes</h1>
      <div className="DataList">
        {DataList2.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              description={menuItem.description}
              price={menuItem.price}
              
            />
          );
        })}
      </div> 
      <Link to="/menu">
            <button> Coffee</button>  
        </Link>
      
    </div>
  );
}

export default Menu2;