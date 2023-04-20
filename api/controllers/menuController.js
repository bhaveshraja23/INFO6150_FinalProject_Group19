var service = require("../services/service");
var Menu = require("../models/menuModel");
var MenuItem = require("../models/menuItemsModel");

exports.createMenu = async function (req, res) {
  const menu = new Menu({
    name: req.body.name,
    description: req.body.description,
    created_at: Date.now(),
    updated_at: Date.now(),
  });
  menu
    .save()
    .then(() => {
      res.status(201).json({
        status: 201,
        data: menu,
        message: "New menu has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({ status: 400, message: err.message });
    });
};

exports.getAllMenu = async function (req, res) {
  Menu.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        status: 200,
        message: "Menu details have been fetched successfully",
        menus: documents,
      });
    });
};

exports.getAllMenuWithMenuItems = async function (req, res) {
  try {
    const menus = await Menu.find().exec();
    const menuItems = await MenuItem.find().populate("menuId").exec();
    const menuMap = {};
    menus.forEach((menu) => {
      menuMap[menu._id] = {
        id: menu._id,
        name: menu.name,
        items: [],
      };
    });
    menuItems.forEach((menuItem) => {
      const menuId = menuItem.menuId._id;
      menuMap[menuId].items.push({
        menuItem,
      });
    });
    const result = Object.values(menuMap).map((menu) => ({
      id: menu.id,
      name: menu.name,
      items: menu.items,
    }));
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getMenuById = async function (req, res) {
  try {
    const { menu_id } = req.params;

    const menu = await Menu.findById(menu_id);

    if (!menu) {
      return res.status(404).json({
        status: 404,
        message: `Menu item not found`,
      });
    }

    //const menuItems = await MenuItem.find({ menu_id : menu_id});

    res.status(200).json({
      status: 200,
      message: `Menu items fetched successfully`,
      menu: menu,
      //menuItems: menuItems
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching menu items`,
      error: error.message,
    });
  }
};

exports.getAllMenuItemsByMenuId = async function (req, res) {
  try {
    const { menu_id } = req.params;

    const menuitems = await MenuItem.find({menuId: menu_id});

    if (!menuitems) {
      return res.status(404).json({
        status: 404,
        message: `Menu item not found`,
      });
    }

    res.status(200).json({
      status: 200,
      message: `Menu item fetched successfully`,
      menuitems: menuitems,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred`,
      error: error.message,
    });
  }
};

exports.getMenuItemById = async function (req, res) {
  try {
    // const { id } = req.params;

    // const menuItem = await MenuItem.findById(id);
    const menuItem = await MenuItem.findOne({ _id: req.params.menu_item_id });
    if (!menuItem) {
      return res.status(404).json({
        status: 404,
        message: `Menu item not found`,
      });
    }

    res.status(200).json({
      status: 200,
      message: `Menu item fetched successfully`,
      menuItem: menuItem,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching menu item`,
      error: error.message,
    });
  }
};

exports.editMenu = async function (req, res) {
  try {
    const { menu_id } = req.params;
    const { name, description } = req.body;
    const updated_at = new Date();

    // Validate input
    if (!name || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the menu by id
    const menu = await Menu.findById(menu_id);

    if (!menu) {
      return res.status(404).json({ status: 400, message: "Menu not found" });
    }

    menu.name = name;
    menu.description = description;
    menu.updated_at = updated_at;

    // Save the user
    try {
      await menu.save();
      res
        .status(200)
        .json({ status: 200, message: "Menu has been updated successfully" });
    } catch (saveError) {
      console.error(saveError);
      res.status(500).json({ status: 400, message: "Error updating menu" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 400, message: "Error processing request" });
  }
};

exports.editMenuItem = async function (req, res) {
  try {
    const id = req.params.menu_item_id;
    const { name, description, price } = req.body;
    const updated_at = new Date();

    // Validate input
    if (!name || !description || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the menuitem by id
    const menuItem = await MenuItem.findById(id);
    console.log("menuItem:", menuItem);

    if (!menuItem) {
      return res
        .status(404)
        .json({ status: 400, message: "Menu Item not found" });
    }

    menuItem.name = name;
    menuItem.description = description;
    menuItem.price = price;
    menuItem.updated_at = updated_at;

    // Save the user
    try {
      await menuItem.save();
      res.status(200).json({
        status: 200,
        message: "MenuItem has been updated successfully",
      });
    } catch (saveError) {
      console.error(saveError);
      res
        .status(500)
        .json({ status: 400, message: "Error updating menu item" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 400, message: "Error processing request" });
  }
};

exports.deleteMenu = async function (req, res) {
  try {
    const { menu_id } = req.params;
    if (!menu_id) {
      return res
        .status(400)
        .json({ status: 400, message: "Please provide menu id" });
    }
    const menu = await Menu.findById(menu_id);
    if (!menu) {
      return res.status(404).json({ status: 400, message: "Menu not found" });
    }
    await Menu.deleteOne({ _id: menu_id });
    return res
      .status(200)
      .json({ status: 200, message: "Menu has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 400, message: "Error deleting menu" });
  }
};

exports.deleteMenuItem = async function (req, res) {
  try {
    if (!req.params.menu_item_id) {
      return res
        .status(400)
        .json({ status: 400, message: "Please provide menu item id" });
    }
    const menuItem = await MenuItem.findOne({ _id: req.params.menu_item_id });
    if (!menuItem) {
      return res
        .status(404)
        .json({ status: 400, message: "Menu item not found" });
    }
    await MenuItem.deleteOne({ _id: req.params.menu_item_id });
    return res.status(200).json({
      status: 200,
      message: "Menu item has been deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 400, message: "Error deleting menu item" });
  }
};

exports.createMenuItem = async function (req, res) {
  const { name, description, price, menu_id } = req.body;

  if (!menu_id) {
    return res.status(400).json({
      status: 400,
      message: "Invalid Menu Id",
    });
  }

  Menu.findById(menu_id).then((menu) => {
    if (!menu) {
      return res.status(400).json({ status: 404, message: "Not found" });
    }

    const menuItem = new MenuItem({
      name: name,
      description: description,
      price: price,
      created_at: Date.now(),
      updated_at: Date.now(),
      menuId: menu._id,
    });

    menuItem
      .save()
      .then(() => {
        res.status(201).json({
          status: 201,
          data: menuItem,
          message: "New menu has been added successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({ status: 400, message: err.message });
      });
  });
};

exports.getAllMenuItems = async function (req, res) {
  MenuItem.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        status: 200,
        message: "All the menu items details have been fetched successfully",
        menuitems: documents,
      });
    });
};
