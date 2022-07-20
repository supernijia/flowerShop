"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.latitude,
    b: _ctx.longitude,
    c: common_vendor.o((...args) => _ctx.markertap && _ctx.markertap(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u56FD\u4FE1\u5B89\u6280\u672F\u8D44\u6599\u81EA\u505A/html/\u56DB\u9636\u6BB5\u9879\u76EE-\u5C0F\u7A0B\u5E8F/flower/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
