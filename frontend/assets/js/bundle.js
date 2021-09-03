/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!****************************************************************!*\
  !*** ./src/A0020-this-in-functions/A0020-this-in-functions.ts ***!
  \****************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.funcao = void 0;
function funcao(arg1, age) {
    console.log(this);
    console.log(arg1, age);
}
exports.funcao = funcao;
funcao.call(new Date(), 'Caio', 25);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map