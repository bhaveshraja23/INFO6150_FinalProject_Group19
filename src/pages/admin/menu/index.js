import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
//import AddMenu from "../../../components/popup-models/AddMenu";
import AddMenuItem from "../../../components/popup-models/AddMenuItem";
// components
import MenuView from "../../../components/admin/menu/View";
import MenuCreate from "../../../components/admin/menu/CreateModal";
// api services
import { menuService } from "../../../services/admin/menu";


const Menu = () => {
  const [loader, setLoader] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoader(true);
      const menuData = await menuService.getAll();

      if (
        menuData &&
        menuData.menus &&
        menuData.menus.length > 0
      )
        setMenu(menuData.menus);
      setLoader(false);
    };

    fetchInitialData();
  }, []);
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      { loader ? (
        <div className="text-center text-secondary">Loading...</div>
      ) : (
      <div className="heading">
        <h3> Menu </h3>
        <MenuCreate  setMenu ={setMenu}/>
        <>
        {menu && menu.length >0 ?(
          <div>
            <MenuView
            menu={menu}
            setMenu={setMenu}/>
          </div>
        ) : (
          <div className="text-center text-secondary">
            No Menu is created
          </div>
        )}
        </>
      {/* <div className="menu-container">
        <div className="menu">
          <div className="items">
            <h4>Appetizers</h4>
            <p>6 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
        <div className="menu">
          <div className="items">
            <h4>Startes</h4>
            <p>20 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
        <div className="menu">
          <div className="items">
            <h4>Main Course</h4>
            <p>13 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
        <div className="menu">
          <div className="items">
            <h4>Desserts</h4>
            <p>8 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
      </div> */}
      </div>
      )}
    </div>
  );
};

export default Menu;
