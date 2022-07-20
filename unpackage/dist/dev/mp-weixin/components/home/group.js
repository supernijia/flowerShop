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
  props: ["datas"],
  computed: __spreadValues({}, common_vendor.mapState({})),
  onLoad() {
  },
  methods: __spreadValues({}, common_vendor.mapMutations(["gotdetails", "addCart"]))
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.datas, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.o(($event) => _ctx.gotdetails(item)),
        c: common_vendor.t(item.CommodityName),
        d: common_vendor.t(item.price),
        e: common_vendor.o(($event) => _ctx.addCart(item)),
        f: index
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/components/home/group.vue"]]);
wx.createComponent(Component);
