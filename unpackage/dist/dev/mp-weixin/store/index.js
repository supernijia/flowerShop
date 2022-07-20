"use strict";
var common_vendor = require("../common/vendor.js");
var store_modules_user = require("./modules/user.js");
var store_modules_home = require("./modules/home.js");
var store_modules_classification = require("./modules/classification.js");
var store_modules_shop = require("./modules/shop.js");
var store_modules_test = require("./modules/test.js");
var store_modules_cart = require("./modules/cart.js");
var store_modules_details = require("./modules/details.js");
var store = common_vendor.createStore({
  modules: {
    user: store_modules_user.user,
    home: store_modules_home.home,
    classification: store_modules_classification.classification,
    shop: store_modules_shop.shop,
    test: store_modules_test.test,
    cart: store_modules_cart.cart,
    datails: store_modules_details.datails
  }
});
exports.store = store;
