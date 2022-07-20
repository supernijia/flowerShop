"use strict";
var common_vendor = require("../../common/vendor.js");
var util_api = require("../../util/api.js");
const getNowTime = getTime();
var cart = {
  state: {
    shopCar: [],
    shoppingPrice: 0,
    allSelect: false,
    orderArr: [],
    choseAdd: {},
    purchase: [],
    purchaseArr: [],
    purchaseShopArr: []
  },
  actions: {},
  mutations: {
    async getshopCar(state) {
      const res = await util_api.myRequest({
        url: "/shopCar"
      });
      res.data.map((item) => {
        state.shopCar.push(item);
      });
    },
    addCart(state, item) {
      const record = state.shopCar.find((data) => data.CommodityName === item.CommodityName);
      if (record) {
        record.amount++;
      } else {
        state.shopCar.push(Object.assign(item, {
          amount: 1
        }));
        common_vendor.index.showToast({
          title: "\u5DF2\u52A0\u5165\u8D2D\u7269\u8F66"
        });
      }
    },
    bindChange(state) {
      setTimeout(() => {
        for (let index = 0; index < state.shopCar.length; index++) {
          if (state.shopCar[index].amount === 0) {
            common_vendor.index.showModal({
              title: "\u63D0\u793A",
              content: "\u662F\u5426\u5220\u9664\u672C\u5546\u54C1",
              success(res) {
                if (res.confirm) {
                  state.shopCar.splice(index, 1);
                } else if (res.cancel) {
                  state.shopCar[index].amount = 1;
                }
              }
            });
          }
        }
        this.commit("compute");
      }, 100);
    },
    select(state, item) {
      item.checked = !item.checked;
      if (item.checked) {
        state.orderArr.push(item);
        this.commit("compute");
      } else {
        state.orderArr.map((data, index) => {
          data.CommodityName === item.CommodityName ? state.orderArr.splice(index, 1) : "";
          this.commit("compute");
        });
      }
      let flage = true;
      state.shopCar.map((item2) => {
        if (!item2.checked) {
          flage = false;
          return;
        }
      });
      if (flage) {
        state.allSelect = true;
      } else {
        state.allSelect = false;
      }
    },
    selectAll(state) {
      state.allSelect = !state.allSelect;
      state.shopCar.map((item) => {
        if (state.allSelect) {
          item.checked = true;
          state.orderArr.push(item);
          return;
        } else {
          item.checked = false;
          state.orderArr.map((data, index) => {
            data.CommodityName === item.CommodityName ? state.orderArr.splice(index, 1) : "";
          });
        }
      });
      this.commit("compute");
    },
    settlement(state) {
      if (state.orderArr.length != 0) {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u53BB\u7ED3\u7B97\uFF1F",
          success(res) {
            if (res.confirm) {
              common_vendor.index.navigateTo({
                url: "/pages/settlement/settlement"
              });
            }
          }
        });
      } else {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u60A8\u672A\u9009\u4E2D\u5546\u54C1\uFF01"
        });
      }
    },
    compute(state) {
      let sum = 0;
      state.orderArr.forEach((item) => {
        sum += item.price * item.amount;
      });
      state.shoppingPrice = sum;
    },
    payment(state, discountIndex) {
      state.purchase.push(state.orderArr);
      console.log(state.purchase);
      if (JSON.stringify(state.choseAdd) === "{}") {
        common_vendor.index.showToast({
          title: "\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740",
          icon: "error"
        });
        return;
      }
      state.purchase.push(Object.assign(state.choseAdd, {
        time: getNowTime
      }));
      state.purchaseArr.push(state.purchase);
      state.purchase.push(this.state.home.discount[discountIndex]);
      this.commit("shopCarUpData");
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u4ED8\u6B3E\u6210\u529F\uFF01",
        success(res) {
          if (res.confirm) {
            common_vendor.index.switchTab({
              url: "/pages/mine/mine"
            });
          }
        }
      });
      this.commit("destroydiscount", discountIndex);
      this.commit("computeorder");
      state.orderArr = [];
      state.shoppingPrice = 0;
      state.allSelect = false;
    },
    shopCarUpData(state) {
      for (let i = 0; i < state.orderArr.length; i++) {
        for (let k = 0; k < state.shopCar.length; k++) {
          if (state.orderArr[i].CommodityName == state.shopCar[k].CommodityName) {
            state.shopCar.splice(k, 1);
          }
        }
      }
    },
    destroydiscount(state, index) {
      if (this.state.home.discount[index].title !== "\u4E0D\u4F7F\u7528\u4F18\u60E0\u5238") {
        this.state.home.discount.splice(index, 1);
      }
    },
    choseAddr(state) {
      common_vendor.index.navigateTo({
        url: "/pages/userAddress/userAddress"
      });
    },
    getbackSettlement(state, item) {
      common_vendor.index.navigateBack({
        delta: 1
      });
      state.choseAdd = item;
    },
    async getWaitSendOder(state) {
      const res = await util_api.myRequest({
        url: "/waitSendOder"
      });
      state.purchaseArr.push(res.data);
      this.commit("computeorder");
    },
    computeorder(state) {
      state.purchaseShopArr = [];
      let data = {};
      for (let i = 0; i < state.purchaseArr.length; i++) {
        for (let j = 0; j < state.purchaseArr[i].length; j++) {
          if (state.purchaseArr[i][j].constructor === Array) {
            for (let k = 0; k < state.purchaseArr[i][j].length; k++) {
              console.log(state.purchaseArr[i][j][k]);
              data = Object.assign(state.purchaseArr[i][j][k], {
                index: i
              });
              state.purchaseShopArr.push(data);
            }
            console.log(state.purchaseArr);
          }
        }
      }
    }
  }
};
function getTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
exports.cart = cart;
