'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tags = require('./tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginsPage = function (_React$Component) {
  _inherits(PluginsPage, _React$Component);

  function PluginsPage(props) {
    _classCallCheck(this, PluginsPage);

    var _this = _possibleConstructorReturn(this, (PluginsPage.__proto__ || Object.getPrototypeOf(PluginsPage)).call(this, props));

    _this.state = {
      tag: '',
      tags: [{ name: 'Map', val: 4 }, { name: 'Audio', val: 1 }, { name: 'Movement', val: 4 }, { name: 'Stealth', val: 3 }, { name: 'UI', val: 8 }, { name: 'Input', val: 2 }]
    };
    return _this;
  }

  _createClass(PluginsPage, [{
    key: 'setTag',
    value: function setTag(tag) {
      this.setState({ tag: tag });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'RPG Maker MV Plugins';
      var pluginName = this.props.params.pluginName;
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'plugins container' },
          React.createElement(
            'div',
            { className: 'title' },
            pluginName || title
          ),
          React.createElement(
            'div',
            { className: 'content' },
            this.props.children && React.cloneElement(this.props.children, {
              tag: this.state.tag
            })
          ),
          React.createElement(
            'div',
            { className: 'sidebar' },
            React.createElement(_tags2.default, { tags: this.state.tags, setTag: this.setTag.bind(this) })
          )
        )
      );
    }
  }]);

  return PluginsPage;
}(React.Component);

exports.default = PluginsPage;