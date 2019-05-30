webpackHotUpdate(5,{

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__(57);

var _promise2 = _interopRequireDefault(_promise);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _User = __webpack_require__(406);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macbook/Documents/My_projects/nextjs/pages/auth/index.js?entry';


var authIndexPage = function authIndexPage(props) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, 'The auth Page of ', props.appName), _react2.default.createElement(_User2.default, { name: 'Ivan', age: '25', __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}));
};
authIndexPage.getInitialProps = function (context) {
	var promise = new _promise2.default(function (resolve, reject) {
		setTimeout(function () {
			resolve({ appName: "Super Auth App" });
		}, 1000);
	});
	return promise;
};
exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJVc2VyIiwiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsT0FBRDt3QkFFckIsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQUFzQiwyQkFEdkIsQUFDQyxBQUE0QixBQUM1QiwwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxRQUFPLEtBQWxCLEFBQXNCO2FBQXRCO2VBSm9CLEFBRXJCLEFBRUM7QUFBQTs7QUFKRjtBQVFBLGNBQUEsQUFBYyxrQkFBa0IsbUJBQVcsQUFDMUM7S0FBTSxnQ0FBc0IsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQ2hEO2FBQVcsWUFBTSxBQUNoQjtXQUFRLEVBQUUsU0FBVixBQUFRLEFBQVcsQUFDbkI7QUFGRCxLQUFBLEFBRUcsQUFDSDtBQUpELEFBQWdCLEFBS2hCLEVBTGdCO1FBS2hCLEFBQU8sQUFDUDtBQVBELEFBUUE7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjYm9vay9Eb2N1bWVudHMvTXlfcHJvamVjdHMvbmV4dGpzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/macbook/Documents/My_projects/nextjs/pages/auth/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/macbook/Documents/My_projects/nextjs/pages/auth/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(80)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/auth")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iYjJiOTlhMGQ0NmIzZjczMTA2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aD8xMmIwYjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXInO1xuXG5jb25zdCBhdXRoSW5kZXhQYWdlID0gKHByb3BzKSA9PiAoXG5cblx0PGRpdj5cblx0XHQ8aDE+VGhlIGF1dGggUGFnZSBvZiB7cHJvcHMuYXBwTmFtZX08L2gxPlxuXHRcdDxVc2VyIG5hbWU9XCJJdmFuXCIgYWdlPVwiMjVcIiAvPlxuXHQ8L2Rpdj5cblxuKVxuYXV0aEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBjb250ZXh0ID0+IHtcblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHJlc29sdmUoeyBhcHBOYW1lOiBcIlN1cGVyIEF1dGggQXBwXCIgfSk7XG5cdFx0fSwgMTAwMCk7XG5cdH0pO1xuXHRyZXR1cm4gcHJvbWlzZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGF1dGhJbmRleFBhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYXV0aD9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9