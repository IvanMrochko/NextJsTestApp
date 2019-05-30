'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macbook/Documents/My_projects/nextjs/pages/index.js?entry';


var indexPage = function (_Component) {
	(0, _inherits3.default)(indexPage, _Component);

	function indexPage() {
		(0, _classCallCheck3.default)(this, indexPage);

		return (0, _possibleConstructorReturn3.default)(this, (indexPage.__proto__ || (0, _getPrototypeOf2.default)(indexPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(indexPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, ' The main Page of ', this.props.appName), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, ' Go to ', _react2.default.createElement(_link2.default, { href: '/auth', __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, ' Auth')), _react2.default.createElement('button', { onClick: function onClick() {
					return _index2.default.push('/auth');
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, 'Go to Auth'));
		}
	}], [{
		key: 'getInitialProps',
		value: function getInitialProps(context) {
			console.log(context);
			var promise = new _promise2.default(function (resolve, reject) {
				setTimeout(function () {
					resolve({ appName: "Super App" });
				}, 1000);
			});
			return promise;
		}
	}]);

	return indexPage;
}(_react.Component);

exports.default = indexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIlJvdXRlciIsImluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsInB1c2giLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUNEOzs7Ozs7Ozs7OzsyQkFVSSxBQUNSOzBCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUF1QiwyQkFBQSxBQUFLLE1BRDdCLEFBQ0MsQUFBa0MsQUFDbEMsMEJBQUEsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFBVSwyQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztlQUFYO2lCQUFBO0FBQUE7TUFGWCxBQUVDLEFBQVUsQUFDViwyQkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTtZQUFNLGdCQUFBLEFBQU8sS0FBYixBQUFNLEFBQVk7QUFBbkM7ZUFBQTtpQkFBQTtBQUFBO01BSkYsQUFDQyxBQUdDLEFBS0Y7Ozs7a0MsQUFuQnNCLFNBQVMsQUFDL0I7V0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO09BQU0sZ0NBQXNCLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUNoRDtlQUFXLFlBQU0sQUFDaEI7YUFBUSxFQUFFLFNBQVYsQUFBUSxBQUFXLEFBQ25CO0FBRkQsT0FBQSxBQUVHLEFBQ0g7QUFKRCxBQUFnQixBQUtoQixJQUxnQjtVQUtoQixBQUFPLEFBQ1A7Ozs7O0FBVHNCLEEsQUF3QnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9NeV9wcm9qZWN0cy9uZXh0anMifQ==