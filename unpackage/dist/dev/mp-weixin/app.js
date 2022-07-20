"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var util_api = require("./util/api.js");
var store_index = require("./store/index.js");
require("./store/modules/user.js");
require("./store/modules/home.js");
require("./store/modules/classification.js");
require("./store/modules/shop.js");
require("./store/modules/test.js");
require("./store/modules/cart.js");
require("./store/modules/details.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/index/index.js";
  "./pages/classification/classification.js";
  "./pages/shop/shop.js";
  "./pages/test/test.js";
  "./pages/cart/cart.js";
  "./pages/mine/mine.js";
  "./pages/settlement/settlement.js";
  "./pages/details/details.js";
  "./pages/preferential/preferential.js";
  "./pages/userAddress/userAddress.js";
  "./pages/newAddress/newAddress.js";
  "./pages/delivery/delivery.js";
}
const _sfc_main = {
  onLaunch: function() {
  },
  onShow: function() {
  },
  onHide: function() {
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$axios = util_api.myRequest;
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
