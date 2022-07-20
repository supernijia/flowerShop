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
const carousel = () => "../../components/home/carousel.js";
const homeMain = () => "../../components/home/homeMain.js";
const preferential = () => "../../components/home/preferential.js";
const specialPrice = () => "../../components/home/specialPrice.js";
const group = () => "../../components/home/group.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    carousel,
    homeMain,
    preferential,
    specialPrice,
    group
  },
  computed: __spreadValues({}, common_vendor.mapState({
    rotation: (state) => state.home.rotation,
    titleIcon: (state) => state.home.titleIcon,
    groupBuying: (state) => state.home.groupBuying,
    newGoods: (state) => state.home.newGoods,
    giftBox: (state) => state.home.giftBox,
    extravagant: (state) => state.home.extravagant
  })),
  onLoad() {
    this.getrotation();
    this.getTitleIcon();
    this.getgroupBuying();
    this.getNewGoods();
    this.getgiftBox();
    this.getextravagant();
  },
  methods: __spreadValues({}, common_vendor.mapMutations([
    "getrotation",
    "getTitleIcon",
    "getgroupBuying",
    "getNewGoods",
    "getgiftBox",
    "getextravagant"
  ]))
};
if (!Array) {
  const _component_carousel = common_vendor.resolveComponent("carousel");
  const _component_homeMain = common_vendor.resolveComponent("homeMain");
  const _component_preferential = common_vendor.resolveComponent("preferential");
  const _component_specialPrice = common_vendor.resolveComponent("specialPrice");
  const _component_group = common_vendor.resolveComponent("group");
  (_component_carousel + _component_homeMain + _component_preferential + _component_specialPrice + _component_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.titleIcon,
    b: _ctx.titleIcon,
    c: _ctx.titleIcon,
    d: _ctx.titleIcon,
    e: _ctx.titleIcon,
    f: _ctx.titleIcon,
    g: common_vendor.p({
      datas: _ctx.groupBuying
    }),
    h: _ctx.titleIcon,
    i: _ctx.titleIcon,
    j: common_vendor.p({
      datas: _ctx.newGoods
    }),
    k: _ctx.titleIcon,
    l: _ctx.titleIcon,
    m: common_vendor.p({
      datas: _ctx.giftBox
    }),
    n: _ctx.titleIcon,
    o: _ctx.titleIcon,
    p: common_vendor.p({
      datas: _ctx.extravagant
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
