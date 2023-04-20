import React from "react";
// components
import MenuItemEdit from "./EditModal";
import MenuItemDelete from "./DeleteModal";

const MenuItemView = ({ menuItems, setMenuItems }) => {
  return (
    <div className="table-render-view">
      {menuItems &&
        menuItems.map((_menu, _idx) => (
          <div key={_idx} className="table-card">
            <div className="card-title">{_menu.name}</div>
            <p>{_menu.description}</p>
            <p>${_menu.price}</p>
            <div className="card-button-container">
              <MenuItemEdit data={_menu} setMenuItems={setMenuItems} />
              <MenuItemDelete data={_menu} setMenuItems={setMenuItems} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuItemView;
