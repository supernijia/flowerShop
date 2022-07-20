"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      message: "",
      sum: 0,
      rangeIndex: 0,
      finalPrice: 0
    };
  },
  components: {},
  computed: __spreadValues({}, common_vendor.mapState({
    orderArr: (state) => state.cart.orderArr,
    shoppingPrice: (state) => state.cart.shoppingPrice,
    discount: (state) => state.home.discount,
    choseAdd: (state) => state.cart.choseAdd
  })),
  onLoad() {
  },
  onUnload() {
  },
  onShow() {
    this.finalPrice = this.shoppingPrice - this.discount[this.rangeIndex].price;
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["payment", "choseAddr", "destroydiscount"])), {
    initmessage() {
      this.sum = this.message.length;
    },
    pickerChange(e) {
      this.rangeIndex = e.detail.value;
      this.finalPrice = this.shoppingPrice - this.discount[this.rangeIndex].price;
    }
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.orderArr, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.CommodityName),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.amount),
        e: index
      };
    }),
    b: common_vendor.t($data.sum ? $data.sum : 0),
    c: common_vendor.o([($event) => $data.message = $event.detail.value, (...args) => $options.initmessage && $options.initmessage(...args)]),
    d: $data.message,
    e: common_vendor.o((...args) => _ctx.choseAddr && _ctx.choseAddr(...args)),
    f: common_vendor.t(_ctx.choseAdd.name),
    g: common_vendor.t(_ctx.shoppingPrice),
    h: common_vendor.o((...args) => $options.pickerChange && $options.pickerChange(...args)),
    i: $data.rangeIndex,
    j: _ctx.discount,
    k: common_vendor.t(_ctx.discount[$data.rangeIndex].title),
    l: common_vendor.t(_ctx.shoppingPrice >= 200 ? 0 : 10),
    m: common_vendor.t($data.finalPrice),
    n: common_vendor.o(($event) => _ctx.payment($data.rangeIndex))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/pages/settlement/settlement.vue"]]);
wx.createPage(MiniProgramPage);
