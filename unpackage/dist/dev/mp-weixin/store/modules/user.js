"use strict";
var common_vendor = require("../../common/vendor.js");
var util_api = require("../../util/api.js");
var user = {
  state: {
    userInfo: {},
    defshow: true,
    usershow: false,
    userAddinfoArr: [],
    newUserinfo: {
      name: "",
      tel: "",
      address: ""
    }
  },
  mutations: {
    login(state) {
      console.log("\u6267\u884C");
      common_vendor.index.getUserProfile({
        desc: "\u83B7\u53D6\u7528\u6237\u57FA\u672C\u8D44\u6599",
        success: (res) => {
          state.userInfo = res.userInfo;
          console.log(state.userInfo);
          state.defshow = false;
          state.usershow = true;
          common_vendor.index.switchTab({
            url: "../index/index"
          });
        },
        fail: (res) => {
          common_vendor.index.showModal({
            title: "\u6388\u6743\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF01",
            showCancel: false
          });
        }
      });
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          console.log(res);
          if (res.errMsg == "login:ok") {
            res.code;
          }
        }
      });
    },
    async getuserinfo(state) {
      const res = await util_api.myRequest({
        url: "/userinfo"
      });
      state.userAddinfoArr = [...res.data];
    },
    addNewAddr(state) {
      common_vendor.index.navigateTo({
        url: "/pages/newAddress/newAddress"
      });
    },
    submitaddress(state) {
      state.userAddinfoArr.push(state.newUserinfo);
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    getdelivery(state) {
      common_vendor.index.navigateTo({
        url: "/pages/delivery/delivery"
      });
    }
  }
};
exports.user = user;
