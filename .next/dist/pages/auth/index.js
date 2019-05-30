'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _User = require('../../components/User');

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