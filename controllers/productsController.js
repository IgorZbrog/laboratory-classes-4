const Product = require('../models/Product');
const { STATUS_CODE } = require('../constants/statusCode');
const { MENU_LINKS } = require('../constants/navigation');

module.exports = {
    getProductsView: (req, res) => {
        res.render('products.ejs', {
            headTitle: "Shop - Products",
            menuLinks: MENU_LINKS,
            activeLinkPath: "/products",
            products: Product.getAll()
        });
    },

    getAddProductView: (req, res) => {
        res.render('add-product.ejs', {
            headTitle: "Shop - Add product",
            menuLinks: MENU_LINKS,
            activeLinkPath: "/products/add"
        });
    },

    addNewProduct: (req, res) => {
        const { name, description } = req.body;
        Product.add(new Product(name, description));
        res.status(STATUS_CODE.FOUND).redirect("/products/new");
    },

    getNewProductView: (req, res) => {
        res.render('new-product.ejs', {
            headTitle: "Shop - New product",
            menuLinks: MENU_LINKS,
            activeLinkPath: "/products/new",
            newestProduct: Product.getLast()
        });
    },

    deleteProduct: (req, res) => {
        Product.deleteByName(req.params.name);
        res.status(STATUS_CODE.OK).json({ success: true });
    }
};
