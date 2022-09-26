import React from "react";
import { Link } from "react-router-dom";
import { DataList } from "../Databases/DataList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";

function Menu() {

  return (
    <div className="menu">
      <h1 className="menuTitle">Coffee</h1>
      <div className="DataList">
        {DataList.map((menuItem, key) => {
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
      <Link to="/menu2">
            <button> Desserts</button>  
        </Link>
      
    </div>
  );
}

export default Menu;