import React from "react";
// components
import MenuView from "../../../components/admin/menu/View";
import MenuCreate from "../../../components/admin/menu/CreateModal";
// api services
import { menuService } from "../../../services/admin/menu";
//styles
import "./styles.scss";

const Menu = () => {
  const [loader, setLoader] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoader(true);
      const menuData = await menuService.getAll();

      if (menuData && menuData.menus && menuData.menus.length > 0)
        setMenu(menuData.menus);
      setLoader(false);
    };

    fetchInitialData();
  }, []);

  return (
    <div className="admin-content">
      <div className="header-area"></div>
      {loader ? (
        <div className="text-center text-secondary">Loading...</div>
      ) : (
        <div className="content-area">
          <div className="header">
            <h4 className="m-0 p-0">Menu</h4>
            <MenuCreate setMenu={setMenu} />
          </div>
          <div className="content">
            <>
              {menu && menu.length > 0 ? (
                <div>
                  <MenuView menu={menu} setMenu={setMenu} />
                </div>
              ) : (
                <div className="text-center text-secondary">
                  No Menu are created
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
