import React from "react";
// react router
import { useParams } from "react-router-dom";
// components
import MenuItemView from "../../../components/admin/menu-item/View";
import MenuItemCreate from "../../../components/admin/menu-item/CreateModal";
// api services
import { menuItemService } from "../../../services/admin/menuItem";
//styles
import "./styles.scss";

const MenuItem = () => {
  const { id: menuId } = useParams();

  const [loader, setLoader] = React.useState(null);
  const [menuItems, setMenuItems] = React.useState(null);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoader(true);
      const menuData = await menuItemService.getAllMenuItemsWithMenuId(menuId);

      if (menuData && menuData.menuitems && menuData.menuitems.length > 0)
        setMenuItems(menuData.menuitems);
      setLoader(false);
    };

    if (menuId) fetchInitialData();
  }, [menuId]);

  return (
    <div className="admin-content">
      <div className="header-area"></div>
      {loader ? (
        <div className="text-center text-secondary">Loading...</div>
      ) : (
        <div className="content-area">
          <div className="header">
            <h4 className="m-0 p-0">Menu Items: {menuId}</h4>
            <MenuItemCreate menuId={menuId} setMenuItems={setMenuItems} />
          </div>
          <div className="content">
            <>
              {menuItems && menuItems.length > 0 ? (
                <div>
                  <MenuItemView
                    menuItems={menuItems}
                    setMenuItems={setMenuItems}
                  />
                </div>
              ) : (
                <div className="text-center text-secondary">
                  No Menu Items are created
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
