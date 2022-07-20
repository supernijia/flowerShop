"use strict";
var common_vendor = require("../../common/vendor.js");
var util_api = require("../../util/api.js");
var home = {
  state: {
    rotation: [],
    HomeIcon: [],
    titleIcon: "",
    homePreferential: "",
    preferential: [],
    couponDiscount: [],
    specialOffer: [],
    groupBuying: [],
    newGoods: [],
    giftBox: [],
    extravagant: [],
    explicit: [],
    detailsShop: [],
    discount: [{ title: "\u4E0D\u4F7F\u7528\u4F18\u60E0\u5238", price: 0 }]
  },
  mutations: {
    async getrotation(state) {
      const res = await util_api.myRequest({
        url: "/getRotation"
      });
      state.rotation = res.data;
    },
    async getHomeIcon(state) {
      const res = await util_api.myRequest({
        url: "/homeIcon"
      });
      state.HomeIcon = res.data;
    },
    async getTitleIcon(state) {
      const res = await util_api.myRequest({
        url: "/titleIcon"
      });
      state.titleIcon = res.data;
    },
    async gethomePreferential(state) {
      const res = await util_api.myRequest({
        url: "/homePreferential"
      });
      state.preferential = res.data;
      state.homePreferential = res.data[0];
    },
    async getcouponDiscount(state) {
      const res = await util_api.myRequest({
        url: "/couponDiscount"
      });
      state.couponDiscount = res.data;
    },
    async getspecialOffer(state) {
      const res = await util_api.myRequest({
        url: "/specialOffer"
      });
      state.specialOffer = res.data;
    },
    async getgroupBuying(state) {
      const res = await util_api.myRequest({
        url: "/groupBuying"
      });
      state.groupBuying = res.data;
    },
    async getNewGoods(state) {
      const res = await util_api.myRequest({
        url: "/newGoods"
      });
      state.newGoods = res.data;
    },
    async getgiftBox(state) {
      const res = await util_api.myRequest({
        url: "/giftBox"
      });
      state.giftBox = res.data;
    },
    async getextravagant(state) {
      const res = await util_api.myRequest({
        url: "/extravagant"
      });
      state.extravagant = res.data;
    },
    async gotexplicit(state, item) {
      const data = { data: item.content };
      const res = await util_api.myRequest({
        url: "/gotexplicit",
        data
      });
      state.explicit = res.data;
      common_vendor.index.navigateTo({
        url: "/pages/preferential/preferential"
      });
      common_vendor.index.setNavigationBarTitle({
        title: item.content
      });
    },
    gotseckill(state, item) {
      state.detailsShop = item;
      common_vendor.index.navigateTo({
        url: "/pages/details/details"
      });
    },
    gotdiscount(state, item) {
      const record = state.discount.find((data) => data.title === item.title);
      if (record) {
        common_vendor.index.showToast({
          title: "\u53EA\u80FD\u9886\u53D6\u4E00\u6B21\uFF01",
          icon: "error"
        });
        return;
      }
      state.discount.push(item);
      common_vendor.index.showToast({
        title: "\u9886\u53D6\u6210\u529F\uFF01"
      });
    }
  }
};
exports.home = home;
