'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _soundcloudAudio = require('soundcloud-audio');

var _soundcloudAudio2 = _interopRequireDefault(_soundcloudAudio);

var _withSoundCloudAudio = require('./withSoundCloudAudio');

var _withSoundCloudAudio2 = _interopRequireDefault(_withSoundCloudAudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SoundPlayerContainer = function (_Component) {
    _inherits(SoundPlayerContainer, _Component);

    function SoundPlayerContainer() {
        _classCallCheck(this, SoundPlayerContainer);

        return _possibleConstructorReturn(this, (SoundPlayerContainer.__proto__ || Object.getPrototypeOf(SoundPlayerContainer)).apply(this, arguments));
    }

    _createClass(SoundPlayerContainer, [{
        key: 'wrapChild',
        value: function wrapChild(child) {
            return _react2.default.cloneElement(child, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;


            if (!children) {
                return;
            }

            if (!Array.isArray(children)) {
                return this.wrapChild(children);
            }

            return _react2.default.createElement(
                'span',
                null,
                _react2.default.Children.map(children, this.wrapChild.bind(this))
            );
        }
    }]);

    return SoundPlayerContainer;
}(_react.Component);

SoundPlayerContainer.propTypes = {
    streamUrl: _react.PropTypes.string,
    resolveUrl: _react.PropTypes.string,
    clientId: _react.PropTypes.string,
    soundCloudAudio: _react.PropTypes.instanceOf(_soundcloudAudio2.default),
    onStartTrack: _react.PropTypes.func,
    onStopTrack: _react.PropTypes.func,
    onPauseTrack: _react.PropTypes.func,
    onVolumeChange: _react.PropTypes.func,
    autoPlay: _react.PropTypes.bool,
    onReady: _react.PropTypes.func
};

exports.default = (0, _withSoundCloudAudio2.default)(SoundPlayerContainer);