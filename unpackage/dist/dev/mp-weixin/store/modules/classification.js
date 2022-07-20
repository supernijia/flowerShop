"use strict";
var common_vendor = require("../../common/vendor.js");
var util_api = require("../../util/api.js");
var classification = {
  state: {
    One: [],
    two: [],
    three: [],
    four: [],
    five: [],
    classificationData: []
  },
  mutations: {
    async getclassification(state) {
      const res = await util_api.myRequest({
        url: "/classification"
      });
      const [One, two, three, four, five] = res.data;
      state.One = One;
      state.two = two;
      state.three = three;
      state.four = four;
      state.five = five;
    },
    async gotclassification(state, data) {
      const res = await util_api.myRequest({
        url: "/classificationData",
        data: { name: data.subName }
      });
      state.classificationData = res.data;
      common_vendor.index.navigateTo({
        url: "/pages/preferential/preferential"
      });
      common_vendor.index.setNavigationBarTitle({
        title: data.subName
      });
    },
    destroyPreferential(state) {
      state.classificationData = [];
    }
  }
};
exports.classification = classification;
