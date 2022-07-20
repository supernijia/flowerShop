"use strict";
var common_vendor = require("../../common/vendor.js");
var datails = {
  state: {
    detailsShop: {}
  },
  mutations: {
    gotdetails(state, item) {
      state.detailsShop = item;
      common_vendor.index.navigateTo({
        url: "/pages/details/details"
      });
    },
    destroyData(state) {
      console.log("\u6267\u884C\u9500\u6BC1");
      state.detailsShop = {};
    }
  }
};
exports.datails = datails;
