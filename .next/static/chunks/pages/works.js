/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/works"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fworks&absolutePagePath=D%3A%5CRodrigo%5Ccursos%5Cportfolio%5Cpages%5Cworks.js!":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fworks&absolutePagePath=D%3A%5CRodrigo%5Ccursos%5Cportfolio%5Cpages%5Cworks.js! ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/works\",\n      function () {\n        return __webpack_require__(/*! ./pages/works.js */ \"./pages/works.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/works\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZ3b3JrcyZhYnNvbHV0ZVBhZ2VQYXRoPUQlM0ElNUNSb2RyaWdvJTVDY3Vyc29zJTVDcG9ydGZvbGlvJTVDcGFnZXMlNUN3b3Jrcy5qcyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2VhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi93b3Jrc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvd29ya3MuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL3dvcmtzXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fworks&absolutePagePath=D%3A%5CRodrigo%5Ccursos%5Cportfolio%5Cpages%5Cworks.js!\n");

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\nvar StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n    shouldForwardProp: function(prop) {\n        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === \"transition\";\n    }\n});\n_c = StyledDiv;\nvar Section = function(param) {\n    var children = param.children, _delay = param.delay, delay = _delay === void 0 ? 0 : _delay;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {\n        initial: {\n            y: 10,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        },\n        transition: {\n            duration: 0.8,\n            delay: delay\n        },\n        mb: 6,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\section.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledDiv\");\n$RefreshReg$(_c1, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBc0M7QUFDc0I7QUFFNUQsSUFBTUcsU0FBUyxHQUFHRix3REFBTSxDQUFDRCxxREFBVSxFQUFFO0lBQ25DRSxpQkFBaUIsRUFBRUcsU0FBQUEsSUFBSSxFQUFJO1FBQ3pCLE9BQU9ILG1FQUFpQixDQUFDRyxJQUFJLENBQUMsSUFBSUEsSUFBSSxLQUFLLFlBQVk7S0FDeEQ7Q0FDRixDQUFDO0FBSklGLEtBQUFBLFNBQVM7QUFNZixJQUFNRyxPQUFPLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLGlCQUFFQyxLQUFLLEVBQUxBLEtBQUssdUJBQUUsQ0FBQzt5QkFDbkMsOERBQUNMLFNBQVM7UUFBQ00sT0FBTyxFQUFFO1lBQUNDLENBQUMsRUFBRSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUM7UUFBRUMsT0FBTyxFQUFFO1lBQUNGLENBQUMsRUFBRSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUM7UUFBRUUsVUFBVSxFQUFFO1lBQUNDLFFBQVEsRUFBRSxHQUFHO1lBQUVOLEtBQUssRUFBTEEsS0FBSztTQUFDO1FBQUVPLEVBQUUsRUFBRSxDQUFDO2tCQUM1R1IsUUFBUTs7Ozs7YUFDQztDQUNiO0FBSktELE1BQUFBLE9BQU87QUFNYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb24uanM/NzY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCB7IGNoYWtyYSwgc2hvdWxkRm9yd2FyZFByb3AgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5jb25zdCBTdHlsZWREaXYgPSBjaGFrcmEobW90aW9uLmRpdiwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IHtcclxuICAgIHJldHVybiBzaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSAndHJhbnNpdGlvbidcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGRlbGF5PSAwfSkgPT4gKFxyXG4gIDxTdHlsZWREaXYgaW5pdGlhbD17e3k6IDEwLCBvcGFjaXR5OiAwfX0gYW5pbWF0ZT17e3k6IDAsIG9wYWNpdHk6IDF9fSB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuOCwgZGVsYXl9fSBtYj17Nn0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9TdHlsZWREaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iXSwibmFtZXMiOlsibW90aW9uIiwiY2hha3JhIiwic2hvdWxkRm9yd2FyZFByb3AiLCJTdHlsZWREaXYiLCJkaXYiLCJwcm9wIiwiU2VjdGlvbiIsImNoaWxkcmVuIiwiZGVsYXkiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/section.js\n");

/***/ }),

/***/ "./pages/works.js":
/*!************************!*\
  !*** ./pages/works.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\nvar _this = undefined;\n\n\n\nvar Works = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n            as: \"h3\",\n            fontSize: 20,\n            mb: 4,\n            children: \"Works\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\pages\\\\works.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\pages\\\\works.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Works;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\nvar _c;\n$RefreshReg$(_c, \"Works\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUEwRTtBQUMvQjtBQUUzQyxJQUFNSyxLQUFLLEdBQUcsV0FBTTtJQUNsQixxQkFDRSw4REFBQ0wsdURBQVM7a0JBQ1IsNEVBQUNDLHFEQUFPO1lBQUNLLEVBQUUsRUFBQyxJQUFJO1lBQUNDLFFBQVEsRUFBRSxFQUFFO1lBQUVDLEVBQUUsRUFBRSxDQUFDO3NCQUFFLE9BRXRDOzs7OztpQkFBVTs7Ozs7YUFDQSxDQUNiO0NBQ0Y7QUFSS0gsS0FBQUEsS0FBSztBQVVYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dvcmtzLmpzP2UyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nLCBTaW1wbGVHcmlkLCBEaXZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uJ1xyXG5cclxuY29uc3QgV29ya3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBmb250U2l6ZT17MjB9IG1iPXs0fT5cclxuICAgICAgICBXb3Jrc1xyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiRGl2aWRlciIsIlNlY3Rpb24iLCJXb3JrcyIsImFzIiwiZm9udFNpemUiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fworks&absolutePagePath=D%3A%5CRodrigo%5Ccursos%5Cportfolio%5Cpages%5Cworks.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);