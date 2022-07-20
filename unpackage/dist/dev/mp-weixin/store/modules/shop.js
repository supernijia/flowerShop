"use strict";
var util_api = require("../../util/api.js");
var shop = {
  state: {
    shopImg: [],
    shopInfo: {},
    shopAdd: {},
    shoptel: {}
  },
  mutations: {
    async getshopInfo(state) {
      const res = await util_api.myRequest({
        url: "/shopInfo"
      });
      const [shopInfo, shopimg, shopadd, shoptel] = res.data;
      state.shopInfo = shopInfo;
      state.shopImg = shopimg;
      state.shopAdd = shopadd;
      state.shoptel = shoptel;
    }
  }
};
exports.shop = shop;
