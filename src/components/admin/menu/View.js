import React from "react";
// react router
import { Link } from "react-router-dom";
// bootstrap
import { Button } from "react-bootstrap";
// components
import MenuEdit from "./EditModal";
import MenuDelete from "./DeleteModal";

const MenuView = ({ menu, setMenu }) => {
  return (
    <div className="table-render-view">
      {menu &&
        menu.map((_menu, _idx) => (
          <div key={_idx} className="table-card">
            <div className="card-title">{_menu.name}</div>
            <p>{_menu.description}</p>
            <div className="card-button-container">
              <Link to={`/admin/menu/${_menu._id}`}>
                <Button size="sm">Add Items</Button>
              </Link>
              <MenuEdit data={_menu} setMenu={setMenu} />
              <MenuDelete data={_menu} setMenu={setMenu} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuView;
