"use strict";
var __defProp = Object.defineProperty;
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
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  components: {},
  computed: __spreadValues({}, common_vendor.mapState({
    shopImg: (state) => state.shop.shopImg,
    shopInfo: (state) => state.shop.shopInfo,
    shopAdd: (state) => state.shop.shopAdd,
    shoptel: (state) => state.shop.shoptel
  })),
  onLoad() {
    this.getshopInfo();
  },
  methods: __spreadValues({}, common_vendor.mapMutations(["getshopInfo"]))
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.shopImg, (item, index, i0) => {
      return {
        a: item.url,
        b: index
      };
    }),
    b: _ctx.shopAdd.src,
    c: common_vendor.t(_ctx.shopAdd.address),
    d: common_vendor.t(_ctx.shoptel.tel),
    e: _ctx.shopAdd.src1,
    f: common_vendor.t(_ctx.shopAdd.name),
    g: _ctx.shoptel.src,
    h: common_vendor.t(_ctx.shopInfo.content),
    i: common_vendor.t(_ctx.shopInfo.worker)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/pages/shop/shop.vue"]]);
wx.createPage(MiniProgramPage);
