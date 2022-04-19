"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"grassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: md\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }), void 0, false, {\n        fileName: \"D:\\\\Rodrigo\\\\cursos\\\\portfolio\\\\components\\\\navbar.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBY1A7QUFDdUI7O0FBRWhELElBQU1lLFFBQVEsR0FBRyxnQkFBNEI7UUFBMUJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUNyQyxJQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBSTtJQUM1QixJQUFNSSxhQUFhLEdBQUdQLG1FQUFpQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztJQUNwRSxxQkFDRSw4REFBQ1osa0RBQVE7UUFBQ2UsSUFBSSxFQUFFQSxJQUFJO2tCQUNsQiw0RUFBQ1osa0RBQUk7WUFDSGlCLENBQUMsRUFBRSxDQUFDO1lBQ0pDLEVBQUUsRUFBRUgsTUFBTSxHQUFHLFdBQVcsR0FBR0ksU0FBUztZQUNwQ0MsS0FBSyxFQUFFTCxNQUFNLEdBQUcsU0FBUyxHQUFHQyxhQUFhO3NCQUV4Q0YsUUFBUTs7Ozs7aUJBQ0o7Ozs7O2FBQ0UsQ0FDWjtDQUNGO0dBZEtILFFBQVE7O1FBRVVGLCtEQUFpQjs7O0FBRm5DRSxLQUFBQSxRQUFRO0FBZ0JkLElBQU1VLE1BQU0sR0FBR0MsU0FBQUEsS0FBSyxFQUFJOztJQUN0QixJQUFNLElBQU0sR0FBS0EsS0FBSyxDQUFkVCxJQUFJO0lBRVoscUJBQ0UsOERBQUNkLGlEQUFHO1FBQUN3QixRQUFRLEVBQUMsT0FBTztRQUNoQkMsRUFBRSxFQUFDLEtBQUs7UUFDUkMsQ0FBQyxFQUFDLE1BQU07UUFDUlAsRUFBRSxFQUFFVCxtRUFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1FBQy9DaUIsS0FBSyxFQUFFO1lBQUNDLGNBQWMsRUFBQyxXQUFXO1NBQUM7UUFDbkNDLE1BQU0sRUFBRSxDQUFDO09BQ0xOLEtBQUs7a0JBRVosNEVBQUN4Qix1REFBUztZQUNSK0IsT0FBTyxFQUFDLE1BQU07WUFDZFosQ0FBQyxFQUFFLENBQUM7WUFDSmEsSUFBSSxFQUFDLGNBQWM7WUFDbkJDLElBQUksRUFBQyxNQUFNO1lBQ1hDLEtBQUssRUFBQyxRQUFRO1lBQ2RDLE9BQU8sRUFBQyxlQUFlOzs4QkFFckIsOERBQUM5QixrREFBSTtvQkFBQzZCLEtBQUssRUFBQyxRQUFRO29CQUFDRSxFQUFFLEVBQUUsQ0FBQzs4QkFDeEIsNEVBQUNoQyxxREFBTzt3QkFBQ3NCLEVBQUUsRUFBQyxJQUFJO3dCQUFDVyxJQUFJLEVBQUMsSUFBSTt3QkFBQ0MsYUFBYSxFQUFFLFNBQVM7a0NBQ2pELDRFQUFDeEMsNkNBQUk7Ozs7aUNBQUc7Ozs7OzZCQUNBOzs7Ozt5QkFDTDs4QkFDUCw4REFBQ0ssbURBQUs7b0JBQ0pvQyxTQUFTLEVBQUU7d0JBQUNDLElBQUksRUFBRSxRQUFRO3dCQUFFQyxFQUFFLEVBQUZBLEVBQUU7cUJBQUM7Ozs7O3lCQUd6Qjs7Ozs7O2lCQUNBOzs7OzthQUNSLENBQ1A7Q0FDRjtJQWpDS2xCLE1BQU07O1FBT0NaLCtEQUFpQjs7O0FBUHhCWSxNQUFBQSxNQUFNO0FBbUNaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBCb3gsXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBIZWFkaW5nLFxyXG4gIEZsZXgsXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxuICBNZW51TGlzdCxcclxuICBNZW51QnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWVcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBIdW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHtocmVmLCBwYXRoLCBjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXHJcbiAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJylcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICA8TGluayBcclxuICAgICAgICBwPXsyfSBcclxuICAgICAgICBiZz17YWN0aXZlID8gJ2dyYXNzVGVhbCcgOiB1bmRlZmluZWR9IFxyXG4gICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPEJveCBwb3NpdGlvbj1cImZpeGVkXCIgXHJcbiAgICAgICAgIGFzPVwibmF2XCIgXHJcbiAgICAgICAgIHc9XCIxMDAlXCIgXHJcbiAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfSBcclxuICAgICAgICAgc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjonYmx1cigxMHB4J319XHJcbiAgICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIFxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXHJcbiAgICAgICAgcD17Mn0gXHJcbiAgICAgICAgbWF4Vz1cImNvbnRhaW5lci5tZFwiIFxyXG4gICAgICAgIHdyYXA9XCJ3cmFwXCIgXHJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIiBcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgID5cclxuICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cclxuICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgZGlyZWN0aW9uPXt7YmFzZTogJ2NvbHVtbicsIG1kfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSHVtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJwIiwiYmciLCJ1bmRlZmluZWQiLCJjb2xvciIsIk5hdmJhciIsInByb3BzIiwicG9zaXRpb24iLCJhcyIsInciLCJzdHlsZSIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIm1heFciLCJ3cmFwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});