"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ newCampaign; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction newCampaign() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), minimumContribution = ref[0], setminimumContribution = ref[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(evt) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        evt.preventDefault();\n                        console.log(minimumContribution);\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        accounts = _state.sent();\n                        return [\n                            4,\n                            _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.createCampaign(minimumContribution).send({\n                                from: accounts[0],\n                                gas: \"1000000\"\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(evt) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"New Campaign!\"\n            }, void 0, false, {\n                fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Minimum Contribution\"\n                        }, void 0, false, {\n                            fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                            label: \"wei\",\n                            value: minimumContribution,\n                            labelPosition: \"right\",\n                            onChange: function(evt) {\n                                return setminimumContribution(evt.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"submit\",\n                            primary: true,\n                            children: \"Create\"\n                        }, void 0, false, {\n                            fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/glen/projects/solidity/fundraiser/pages/campaigns/new.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(newCampaign, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBdUM7QUFDSztBQUNXO0FBQ2hCO0FBQ007QUFFOUIsU0FBU1EsV0FBVyxHQUFHOztJQUVsQyxJQUFzRFAsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUExRFEsbUJBQW1CLEdBQTRCUixHQUFXLEdBQXZDLEVBQUVTLHNCQUFzQixHQUFJVCxHQUFXLEdBQWY7SUFFbEQsSUFBTVUsWUFBWTttQkFBRyw2RkFBT0MsR0FBRyxFQUFLOzs7O3dCQUNoQ0EsR0FBRyxDQUFDQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixtQkFBbUIsQ0FBQyxDQUFDO3dCQUN0Qjs7NEJBQU1ILHNFQUFvQixFQUFFOzBCQUFBOzt3QkFBdkNZLFFBQVEsR0FBRyxhQUE0QixDQUFDO3dCQUN4Qzs7NEJBQU1YLGdGQUE4QixDQUFDRSxtQkFBbUIsQ0FBQyxDQUFDWSxJQUFJLENBQUM7Z0NBQUVDLElBQUksRUFBRUosUUFBUSxDQUFDLENBQUMsQ0FBQztnQ0FBRUssR0FBRyxFQUFFLFNBQVM7NkJBQUUsQ0FBQzswQkFBQTs7d0JBQXJHLGFBQXFHLENBQUM7Ozs7OztRQUMxRyxDQUFDO3dCQUxLWixZQUFZLENBQVVDLEdBQUc7OztPQUs5QjtJQUlELHFCQUNJLDhEQUFDViwwREFBTTs7MEJBQ0gsOERBQUNzQixJQUFFOzBCQUFDLGVBQWE7Ozs7O29CQUFLOzBCQUN0Qiw4REFBQ3BCLG1EQUFJO2dCQUFDcUIsUUFBUSxFQUFFZCxZQUFZOzBCQUN4Qiw0RUFBQ1AseURBQVU7O3NDQUNQLDhEQUFDdUIsT0FBSztzQ0FBQyxzQkFBb0I7Ozs7O2dDQUFRO3NDQUNuQyw4REFBQ3RCLG9EQUFLOzRCQUFDc0IsS0FBSyxFQUFDLEtBQUs7NEJBQUNDLEtBQUssRUFBRW5CLG1CQUFtQjs0QkFBRW9CLGFBQWEsRUFBQyxPQUFPOzRCQUFDQyxRQUFRLEVBQUUsU0FBQ2xCLEdBQUc7dUNBQUtGLHNCQUFzQixDQUFDRSxHQUFHLENBQUNtQixNQUFNLENBQUNILEtBQUssQ0FBQzs2QkFBQTs7Ozs7Z0NBQUk7c0NBQ3BJLDhEQUFDekIscURBQU07NEJBQUM2QixJQUFJLEVBQUMsUUFBUTs0QkFBQ0MsT0FBTztzQ0FBQyxRQUFNOzs7OztnQ0FBUzs7Ozs7O3dCQUNwQzs7Ozs7b0JBQ1Y7Ozs7OztZQUNGLENBQ1o7QUFDTCxDQUFDO0dBekJ1QnpCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0NhbXBhaWduKCkge1xuXG4gICAgY29uc3QgW21pbmltdW1Db250cmlidXRpb24sIHNldG1pbmltdW1Db250cmlidXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZ0KSA9PiB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhtaW5pbXVtQ29udHJpYnV0aW9uKTtcbiAgICAgICAgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlQ2FtcGFpZ24obWluaW11bUNvbnRyaWJ1dGlvbikuc2VuZCh7IGZyb206IGFjY291bnRzWzBdLCBnYXM6ICcxMDAwMDAwJyB9KTtcbiAgICB9O1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+TmV3IENhbXBhaWduITwvaDE+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwid2VpXCIgdmFsdWU9e21pbmltdW1Db250cmlidXRpb259IGxhYmVsUG9zaXRpb249J3JpZ2h0JyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0bWluaW11bUNvbnRyaWJ1dGlvbihldnQudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHByaW1hcnk+Q3JlYXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIndlYjMiLCJmYWN0b3J5IiwibmV3Q2FtcGFpZ24iLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwic2V0bWluaW11bUNvbnRyaWJ1dGlvbiIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsImdhcyIsImgxIiwib25TdWJtaXQiLCJGaWVsZCIsImxhYmVsIiwidmFsdWUiLCJsYWJlbFBvc2l0aW9uIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0eXBlIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});