'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reduxQueueOffline = require('redux-queue-offline');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkListener = function NetworkListener(Provider) {
  return _react2.default.createClass({
    displayName: 'NetworkListener',
    _wasOnline: undefined,
    componentDidMount: function componentDidMount() {
      _reactNative.NetInfo.isConnected.addEventListener('change', this._changeListener);
    },
    componentWillUnmount: function componentWillUnmount() {
      _reactNative.NetInfo.isConnected.removeEventListener('change', this._changeListener);
    },
    render: function render() {
      return _react2.default.createElement(Provider, this.props);
    },
    _changeListener: function _changeListener() {
      var _this = this;

      _reactNative.NetInfo.isConnected.fetch().then(function (isConnected) {
        if (_this._wasOnline !== isConnected) {
          _this._wasOnline = isConnected;
          _this.props.store.dispatch({
            type: isConnected ? _reduxQueueOffline.ONLINE : _reduxQueueOffline.OFFLINE
          });
        }
      });
    }
  });
};

exports.default = NetworkListener;