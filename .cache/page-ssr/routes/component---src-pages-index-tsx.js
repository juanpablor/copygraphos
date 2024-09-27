"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 7200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1148);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3433);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(801);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9511);




const IndexPage = () => {
  const data = _data_data_json__WEBPACK_IMPORTED_MODULE_2__;
  const {
    title,
    copies,
    items
  } = data.homePage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: styles.title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-full sm:w-3/4 flex-col sm:flex-row gap-4 mx-auto"
  }, items.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index,
    className: styles.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _images__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z[item.image],
    className: "w-full h-auto",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: styles.title
  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${styles.card} w-full sm:w-3/4 mx-auto`
  }, copies.map((copy, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    key: index
  }, copy.paragraph)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Quienes somos");
const styles = {
  container: "flex flex-col gap-6",
  card: "flex flex-col bg-white rounded rounded-[2rem] gap-4 shadow-2xl p-8 w-full",
  title: "text-xl text-semidark text-center font-semibold"
};

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map