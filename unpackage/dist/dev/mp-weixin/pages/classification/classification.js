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
const classright = () => "../../components/classification/classright.js";
const classleft = () => "../../components/classification/classleft.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    classright,
    classleft
  },
  computed: __spreadValues({}, common_vendor.mapState({
    One: (state) => state.classification.One,
    two: (state) => state.classification.two,
    three: (state) => state.classification.three,
    four: (state) => state.classification.four,
    five: (state) => state.classification.five
  })),
  onLoad() {
    this.getclassification();
  },
  methods: __spreadValues({}, common_vendor.mapMutations(["getclassification", "gotclassification"]))
};
if (!Array) {
  const _component_classright = common_vendor.resolveComponent("classright");
  const _component_classleft = common_vendor.resolveComponent("classleft");
  (_component_classright + _component_classleft)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      datas: _ctx.One
    }),
    b: common_vendor.o(($event) => _ctx.gotclassification(_ctx.One)),
    c: common_vendor.p({
      datas: _ctx.two
    }),
    d: common_vendor.o(($event) => _ctx.gotclassification(_ctx.two)),
    e: common_vendor.p({
      datas: _ctx.three
    }),
    f: common_vendor.o(($event) => _ctx.gotclassification(_ctx.three)),
    g: common_vendor.p({
      datas: _ctx.four
    }),
    h: common_vendor.o(($event) => _ctx.gotclassification(_ctx.four)),
    i: common_vendor.p({
      datas: _ctx.five
    }),
    j: common_vendor.o(($event) => _ctx.gotclassification(_ctx.five))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/pages/classification/classification.vue"]]);
wx.createPage(MiniProgramPage);
