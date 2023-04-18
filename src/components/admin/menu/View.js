import React from "react";
// components
import MenuEdit from "./EditModal";
import MenuDelete from "./DeleteModal";

const MenuView = ({ menu, setMenu }) => {
    return (
      <div className="menu-container">
        {menu &&
          menu.map((_menu, _idx) => (
            <div key={_idx}>
            <div className="menu">
              <div className="items">
                <div><h4>{_menu.name}</h4></div>
                <div><p>{_menu.description}</p></div>
                <div><button className="item.button">Add Item</button></div>
                {/* <div className="card-button-container">
                <MenuEdit data = {_menu} setMenu={setMenu} />
                <MenuDelete data = {_menu} setMenu={setMenu} /> */}
              </div>
            </div>
            </div>
            //</div>
          ))}
      </div>
    );
  };
  
  export default MenuView;