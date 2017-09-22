'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxQueueOffline = require('redux-queue-offline');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NetworkListener = function NetworkListener(Provider) {
  return _react2.default.createClass({
    displayName: 'NetworkListener',
    componentDidMount: function componentDidMount() {
      if (window && window.addEventListener) {
        window.addEventListener('online', this._onlineListener);
        window.addEventListener('offline', this._offlineListener);
      }
    },
    componentWillUnmount: function componentWillUnmount() {
      if (window && window.removeEventListener) {
        window.removeEventListener('online', this._onlineListener);
        window.removeEventListener('offline', this._offlineListener);
      }
    },
    render: function render() {
      return _react2.default.createElement(Provider, this.props);
    },
    _onlineListener: function _onlineListener() {
      this.props.store.dispatch({
        type: _reduxQueueOffline.ONLINE
      });
    },
    _offlineListener: function _offlineListener() {
      this.props.store.dispatch({
        type: _reduxQueueOffline.OFFLINE
      });
    }
  });
};

exports.default = NetworkListener;