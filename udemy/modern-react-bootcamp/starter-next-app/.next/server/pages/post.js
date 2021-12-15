"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Post({ id , comments  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/sarahkrivera/workspace/learn-to-code/udemy/modern-react-bootcamp/starter-next-app/pages/post.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"POST PAGE #\",\n                    id\n                ]\n            }),\n            comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comment, {\n                    ...comment,\n                    __source: {\n                        fileName: \"/Users/sarahkrivera/workspace/learn-to-code/udemy/modern-react-bootcamp/starter-next-app/pages/post.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }, comment.id)\n            )\n        ]\n    }));\n};\nconst Comment = ({ email , body  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/sarahkrivera/workspace/learn-to-code/udemy/modern-react-bootcamp/starter-next-app/pages/post.js\",\n            lineNumber: 15,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                __source: {\n                    fileName: \"/Users/sarahkrivera/workspace/learn-to-code/udemy/modern-react-bootcamp/starter-next-app/pages/post.js\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                },\n                __self: undefined,\n                children: email\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/sarahkrivera/workspace/learn-to-code/udemy/modern-react-bootcamp/starter-next-app/pages/post.js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                },\n                __self: undefined,\n                children: body\n            })\n        ]\n    })\n;\nasync function getServerSideProps({ query  }) {\n    const { id  } = query;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);\n    const { data  } = res;\n    return {\n        props: {\n            id: id,\n            comments: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFFVixRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNDLEVBQUUsR0FBRUMsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlDLE1BQU07O2tGQUVEQyxDQUFFOzs7Ozs7OztvQkFBQyxDQUFXO29CQUFDRixFQUFFOzs7WUFDakJDLFFBQVEsQ0FBQ0UsR0FBRyxFQUFFQyxPQUFPLHdFQUNuQkMsT0FBTzt1QkFBc0JELE9BQU87Ozs7Ozs7bUJBQXZCQSxPQUFPLENBQUNKLEVBQUU7Ozs7QUFJaEMsQ0FBQztBQUVELEtBQUssQ0FBQ0ssT0FBTyxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyx5RUFDN0JDLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFFSCxLQUFLOztpRkFDVEksQ0FBQzs7Ozs7OzswQkFBRUgsSUFBSTs7Ozs7QUFJTCxlQUFlSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNuRCxLQUFLLENBQUMsQ0FBQyxDQUFDWixFQUFFLEVBQUMsQ0FBQyxHQUFHWSxLQUFLO0lBQ3BCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ2YsZ0RBQVMsRUFBRSxxREFBcUQsRUFBRUUsRUFBRTtJQUN0RixLQUFLLENBQUMsQ0FBQyxDQUFDZSxJQUFJLEVBQUMsQ0FBQyxHQUFHRixHQUFHO0lBQ3BCLE1BQU0sQ0FBQyxDQUFDO1FBQUNHLEtBQUssRUFBRSxDQUFDO1lBQUNoQixFQUFFLEVBQUVBLEVBQUU7WUFBRUMsUUFBUSxFQUFFYyxJQUFJO1FBQUMsQ0FBQztJQUFDLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItbmV4dC1hcHAvLi9wYWdlcy9wb3N0LmpzPzI1NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IGlkLCBjb21tZW50cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5QT1NUIFBBR0UgI3tpZH08L2gxPlxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICA8Q29tbWVudCBrZXk9e2NvbW1lbnQuaWR9IHsuLi5jb21tZW50fSAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBlbWFpbCwgYm9keSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGg1PntlbWFpbH08L2g1PlxuICAgIDxwPntib2R5fTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPSR7aWR9YCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcmVzO1xuICByZXR1cm4geyBwcm9wczogeyBpZDogaWQsIGNvbW1lbnRzOiBkYXRhIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIlBvc3QiLCJpZCIsImNvbW1lbnRzIiwiaDEiLCJtYXAiLCJjb21tZW50IiwiQ29tbWVudCIsImVtYWlsIiwiYm9keSIsImRpdiIsImg1IiwicCIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwicmVzIiwiZ2V0IiwiZGF0YSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();