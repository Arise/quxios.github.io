(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "block footer" },
        React.createElement(
          "a",
          { href: "https://www.patreon.com/quxios" },
          "Patreon"
        ),
        " |\xA0",
        React.createElement(
          "a",
          { href: "https://twitter.com/Quxios" },
          "Twitter"
        ),
        " |\xA0",
        React.createElement(
          "a",
          { href: "https://www.youtube.com/c/QuxiosDev" },
          "Youtube"
        ),
        " |\xA0",
        React.createElement(
          "a",
          { href: "https://github.com/quxios" },
          "Github"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

exports.default = Footer;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocsPage = function (_React$Component) {
  _inherits(DocsPage, _React$Component);

  function DocsPage(props) {
    _classCallCheck(this, DocsPage);

    var _this = _possibleConstructorReturn(this, (DocsPage.__proto__ || Object.getPrototypeOf(DocsPage)).call(this, props));

    _this.state = {
      docs: []
    };
    return _this;
  }

  _createClass(DocsPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'page container docs' },
          React.createElement(
            'div',
            { className: 'title' },
            'Documentation Page'
          ),
          React.createElement(_sidebar2.default, null),
          React.createElement(
            'div',
            { className: 'content' },
            React.createElement(_page2.default, null)
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return DocsPage;
}(React.Component);

exports.default = DocsPage;

},{"./../components/footer":1,"./page":3,"./sidebar":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var PluginBlock = function (_React$Component) {
  _inherits(PluginBlock, _React$Component);

  function PluginBlock() {
    _classCallCheck(this, PluginBlock);

    return _possibleConstructorReturn(this, (PluginBlock.__proto__ || Object.getPrototypeOf(PluginBlock)).apply(this, arguments));
  }

  _createClass(PluginBlock, [{
    key: 'makeBody',
    value: function makeBody() {
      var body = 'testing\n# TEST\n\n- list\n- list\n- list\n\n~~~\n code\n~~~\n';
      return marked(body);
    }
  }, {
    key: 'render',
    value: function render() {
      var body = this.makeBody();
      return React.createElement(
        'div',
        { className: 'block' },
        React.createElement(
          'div',
          { className: 'header' },
          'header'
        ),
        React.createElement('div', { className: 'help', dangerouslySetInnerHTML: { __html: body } })
      );
    }
  }]);

  return PluginBlock;
}(React.Component);

exports.default = PluginBlock;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var _distFromTop = 150;

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.state = {
      top: 0
    };
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var top = 0;
      if (window.scrollY > _distFromTop) {
        top = window.scrollY - _distFromTop;
      }
      this.setState({ top: top });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        marginTop: this.state.top
      };
      return React.createElement(
        'div',
        { className: 'sidebar', style: style },
        React.createElement(
          'div',
          { className: 'block' },
          'list of sections / subsections'
        )
      );
    }
  }]);

  return Sidebar;
}(React.Component);

exports.default = Sidebar;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'home container' },
          React.createElement(
            'div',
            { className: 'block showcase' },
            React.createElement(
              Link,
              { to: '/plugins' },
              React.createElement('img', { src: '/imgs/plugins.png' })
            )
          ),
          React.createElement(
            'div',
            { className: 'block showcase' },
            React.createElement(
              Link,
              { to: '/projects' },
              React.createElement('img', { src: '/imgs/projects.png' })
            )
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return HomePage;
}(React.Component);

exports.default = HomePage;

},{"./../components/footer":1}],6:[function(require,module,exports){
'use strict';

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _list = require('./plugins/list');

var _list2 = _interopRequireDefault(_list);

var _page = require('./plugins/page');

var _page2 = _interopRequireDefault(_page);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

var _docs = require('./docs');

var _docs2 = _interopRequireDefault(_docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    IndexRoute = _ReactRouter.IndexRoute,
    hashHistory = _ReactRouter.hashHistory;

//import DocsList from './docs/list'
//import DocsPage from './docs/page'

ReactDOM.render(React.createElement(
  Router,
  { history: hashHistory },
  React.createElement(Route, { path: '/', component: _home2.default }),
  React.createElement(
    Route,
    { path: '/plugins', component: _plugins2.default },
    React.createElement(IndexRoute, { component: _list2.default }),
    React.createElement(Route, { path: '/plugins/:pluginName', component: _page2.default })
  ),
  React.createElement(Route, { path: '/projects', component: _projects2.default })
), document.getElementById('site'));

},{"./docs":2,"./home":5,"./plugins":8,"./plugins/list":9,"./plugins/page":10,"./projects":14}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);
  }

  _createClass(PluginManager, null, [{
    key: 'load',
    value: function load(type, callback) {
      var file = void 0;
      if (type === 'plugins') {
        file = this.pluginsPath;
      } else if (type === 'tags') {
        file = this.tagsPath;
      } else {
        return;
      }
      var xhr = new XMLHttpRequest();
      xhr.overrideMimeType("application/json");
      xhr.open('GET', file, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == '200') {
          if (callback) {
            var obj = JSON.parse(xhr.responseText);
            callback(obj);
          }
        }
      };
      xhr.send(null);
    }
  }]);

  return PluginManager;
}();

PluginManager.pluginsPath = '/data/plugins.json';
PluginManager.tagsPath = '/data/tags.json';
exports.default = PluginManager;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginManager = require('./../pluginManager');

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

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
      plugins: [],
      tag: '',
      tags: []
    };
    return _this;
  }

  _createClass(PluginsPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _pluginManager2.default.load('plugins', this.setPlugins.bind(this));
      _pluginManager2.default.load('tags', this.setTags.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (/\/plugins\/(.*)/i.test(nextProps.location.pathname)) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'setPlugins',
    value: function setPlugins(plugins) {
      this.setState({ plugins: plugins });
    }
  }, {
    key: 'getPlugin',
    value: function getPlugin(name) {
      var plugin = null;
      for (var i = 0; i < this.state.plugins.length; i++) {
        if (this.state.plugins[i].name === name) {
          plugin = this.state.plugins[i];
          break;
        }
      }
      return plugin;
    }
  }, {
    key: 'setTags',
    value: function setTags(newTags) {
      var names = Object.keys(newTags);
      var tags = [];
      names.forEach(function (name) {
        tags.push({
          name: name,
          val: newTags[name]
        });
      });
      this.setState({ tags: tags });
    }
  }, {
    key: 'setTag',
    value: function setTag(tag) {
      if (this.state.tag === tag) {
        tag = '';
      }
      this.setState({ tag: tag });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'RPG Maker MV Plugins';
      var pluginName = this.props.params.pluginName;
      var plugin = this.getPlugin(pluginName);
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'page container' },
          React.createElement(
            'div',
            { className: 'title' },
            pluginName || title
          ),
          React.createElement(
            'div',
            { className: 'content' },
            this.props.children && React.cloneElement(this.props.children, {
              tag: this.state.tag,
              setTag: this.setTag.bind(this),
              plugins: this.state.plugins,
              plugin: plugin
            })
          ),
          React.createElement(_sidebar2.default, {
            pluginName: pluginName,
            tag: this.state.tag,
            tags: this.state.tags,
            setTag: this.setTag.bind(this)
          }),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return PluginsPage;
}(React.Component);

exports.default = PluginsPage;

},{"./../components/footer":1,"./../pluginManager":7,"./sidebar":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginBlock = require('./pluginBlock');

var _pluginBlock2 = _interopRequireDefault(_pluginBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginList = function (_React$Component) {
  _inherits(PluginList, _React$Component);

  function PluginList() {
    _classCallCheck(this, PluginList);

    return _possibleConstructorReturn(this, (PluginList.__proto__ || Object.getPrototypeOf(PluginList)).apply(this, arguments));
  }

  _createClass(PluginList, [{
    key: 'filter',
    value: function filter(plugin) {
      var tag = this.props.tag;
      if (tag === '') return true;
      var tags = plugin.tags.split(',');
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].trim() === tag) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var plugins = this.props.plugins || [];
      return React.createElement(
        'div',
        { className: 'list' },
        plugins.filter(this.filter.bind(this)).map(function (plugin, i) {
          return React.createElement(_pluginBlock2.default, { key: i, plugin: plugin, setTag: _this2.props.setTag });
        })
      );
    }
  }]);

  return PluginList;
}(React.Component);

exports.default = PluginList;

},{"./pluginBlock":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginBlock = require('./pluginBlock');

var _pluginBlock2 = _interopRequireDefault(_pluginBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginPage = function (_React$Component) {
  _inherits(PluginPage, _React$Component);

  function PluginPage() {
    _classCallCheck(this, PluginPage);

    return _possibleConstructorReturn(this, (PluginPage.__proto__ || Object.getPrototypeOf(PluginPage)).apply(this, arguments));
  }

  _createClass(PluginPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'list' },
        React.createElement(_pluginBlock2.default, { plugin: this.props.plugin, max: true, setTag: this.props.setTag })
      );
    }
  }]);

  return PluginPage;
}(React.Component);

exports.default = PluginPage;

},{"./pluginBlock":11}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var PluginBlock = function (_React$Component) {
  _inherits(PluginBlock, _React$Component);

  function PluginBlock() {
    _classCallCheck(this, PluginBlock);

    return _possibleConstructorReturn(this, (PluginBlock.__proto__ || Object.getPrototypeOf(PluginBlock)).apply(this, arguments));
  }

  _createClass(PluginBlock, [{
    key: 'makeRequires',
    value: function makeRequires() {
      var _ref = this.props.plugin || {},
          requires = _ref.requires,
          download = _ref.download;

      if (requires) {
        requires = requires.trim();
        return React.createElement(
          'span',
          { className: 'sub' },
          '| Requires: ',
          React.createElement(
            Link,
            { to: '/plugins/' + requires },
            requires
          ),
          ' | ',
          React.createElement(
            'a',
            { href: download },
            'Download'
          )
        );
      } else {
        return React.createElement(
          'span',
          { className: 'sub' },
          '| ',
          React.createElement(
            'a',
            { href: download },
            'Download'
          )
        );
      }
    }
  }, {
    key: 'makeBody',
    value: function makeBody() {
      var _ref2 = this.props.plugin || {},
          video = _ref2.video,
          about = _ref2.about,
          help = _ref2.help;

      var body = '';
      if (video) {
        var code = /\?v=(.*)/.exec(video);
        if (!code) {
          code = /youtu\.be\/(.*)/.exec(video);
        }
        if (code) {
          body += '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/' + code[1] + '" frameborder="0" allowfullscreen></iframe></center>';
        }
      }
      if (this.props.max) {
        body += about + '\n' + help;
      } else {
        body += '' + about;
      }
      return marked(body);
    }
  }, {
    key: 'makeTags',
    value: function makeTags() {
      var _this2 = this;

      var _ref3 = this.props.plugin || {},
          tags = _ref3.tags;

      if (!tags) return null;
      return tags.split(',').map(function (tag, i) {
        tag = tag.trim();
        return React.createElement(
          Link,
          {
            to: '/plugins',
            key: i,
            className: 'tag',
            onClick: _this2.onTag.bind(_this2, tag) },
          tag
        );
      });
    }
  }, {
    key: 'onTag',
    value: function onTag(tag) {
      this.props.setTag(tag);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref4 = this.props.plugin || {},
          name = _ref4.name,
          version = _ref4.version;

      var requires = this.makeRequires();
      var body = this.makeBody();
      var tags = this.makeTags();
      return React.createElement(
        'div',
        { className: 'block' },
        React.createElement(
          'div',
          { className: 'header' },
          React.createElement(
            Link,
            { to: '/plugins/' + name },
            name
          ),
          ' | ',
          React.createElement(
            'span',
            { className: 'sub' },
            'Version: ',
            version,
            ' ',
            this.makeRequires()
          )
        ),
        React.createElement('div', { className: 'help', dangerouslySetInnerHTML: { __html: body } }),
        React.createElement(
          'div',
          { className: 'footer' },
          'Tags: ',
          tags
        )
      );
    }
  }]);

  return PluginBlock;
}(React.Component);

exports.default = PluginBlock;

},{}],12:[function(require,module,exports){
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

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var _distFromTop = 150;

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.state = {
      top: 0
    };
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var top = 0;
      if (window.scrollY > _distFromTop) {
        top = window.scrollY - _distFromTop;
      }
      this.setState({ top: top });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        marginTop: this.state.top
      };
      return React.createElement(
        'div',
        { className: 'sidebar', style: style },
        this.props.pluginName ? React.createElement(
          Link,
          { to: '/plugins', className: 'header' },
          'Back to Plugins'
        ) : null,
        React.createElement(_tags2.default, { tag: this.props.tag, tags: this.props.tags, setTag: this.props.setTag })
      );
    }
  }]);

  return Sidebar;
}(React.Component);

exports.default = Sidebar;

},{"./tags":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var PluginTags = function (_React$Component) {
  _inherits(PluginTags, _React$Component);

  function PluginTags() {
    _classCallCheck(this, PluginTags);

    return _possibleConstructorReturn(this, (PluginTags.__proto__ || Object.getPrototypeOf(PluginTags)).apply(this, arguments));
  }

  _createClass(PluginTags, [{
    key: 'onClick',
    value: function onClick(tag) {
      this.props.setTag(tag);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'block' },
        this.props.tags.map(function (tag, i) {
          var name = tag.name,
              val = tag.val;

          var size = (Math.floor((val - 1) / 2) + 0.5) * 0.20 + 0.8;
          var style = { fontSize: size + 'em' };
          var className = 'tag';
          className += _this2.props.tag === name ? ' selected' : '';
          return React.createElement(
            Link,
            {
              to: '/plugins',
              key: i,
              className: className,
              style: style,
              onClick: _this2.onClick.bind(_this2, name) },
            name
          );
        })
      );
    }
  }]);

  return PluginTags;
}(React.Component);

exports.default = PluginTags;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import Sidebar from './sidebar'


var ProjectsPage = function (_React$Component) {
  _inherits(ProjectsPage, _React$Component);

  function ProjectsPage(props) {
    _classCallCheck(this, ProjectsPage);

    var _this = _possibleConstructorReturn(this, (ProjectsPage.__proto__ || Object.getPrototypeOf(ProjectsPage)).call(this, props));

    _this.state = {
      docs: []
    };
    return _this;
  }

  _createClass(ProjectsPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'page container projects' },
          React.createElement(
            'div',
            { className: 'title' },
            'Projects'
          ),
          React.createElement(
            'div',
            { className: 'block showcase' },
            React.createElement('img', { src: '/imgs/comingSoon.png' })
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return ProjectsPage;
}(React.Component);

exports.default = ProjectsPage;

},{"./../components/footer":1}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGRvY3NcXGluZGV4LmpzeCIsImVzNlxcZG9jc1xccGFnZS5qc3giLCJlczZcXGRvY3NcXHNpZGViYXIuanN4IiwiZXM2XFxob21lXFxpbmRleC5qc3giLCJlczZcXG1haW4uanN4IiwiZXM2XFxwbHVnaW5NYW5hZ2VyLmpzIiwiZXM2XFxwbHVnaW5zXFxpbmRleC5qc3giLCJlczZcXHBsdWdpbnNcXGxpc3QuanN4IiwiZXM2XFxwbHVnaW5zXFxwYWdlLmpzeCIsImVzNlxccGx1Z2luc1xccGx1Z2luQmxvY2suanN4IiwiZXM2XFxwbHVnaW5zXFxzaWRlYmFyLmpzeCIsImVzNlxccGx1Z2luc1xcdGFncy5qc3giLCJlczZcXHByb2plY3RzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQixNOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxnQ0FBUjtBQUFBO0FBQUEsU0FERjtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUcsTUFBSyw0QkFBUjtBQUFBO0FBQUEsU0FGRjtBQUFBO0FBR0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQ0FBUjtBQUFBO0FBQUEsU0FIRjtBQUFBO0FBSUU7QUFBQTtBQUFBLFlBQUcsTUFBSywyQkFBUjtBQUFBO0FBQUE7QUFKRixPQURGO0FBUUQ7Ozs7RUFWaUMsTUFBTSxTOztrQkFBckIsTTs7Ozs7Ozs7Ozs7QUNBckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7O0FBQ25CLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU07QUFESyxLQUFiO0FBRmlCO0FB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QUlQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUNBQUssV0FBVSxLQUFmLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNFLHlDQUFLLEtBQUksc0JBQVQ7QUFERixXQUpGO0FBYUU7QUFiRjtBQUZGLE9BREY7QUFvQkQ7Ozs7RUEvQnVDLE1BQU0sUzs7a0JBQTNCLFkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgZm9vdGVyJz5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcXV4aW9zXCI+UGF0cmVvbjwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1F1eGlvc1wiPlR3aXR0ZXI8L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9RdXhpb3NEZXZcIj5Zb3V0dWJlPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9xdXhpb3NcIj5HaXRodWI8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkb2NzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NvbnN0IHRpdGxlID0gJ1JQRyBNYWtlciBNViBQbHVnaW5zJztcclxuICAgIC8vY29uc3QgcGx1Z2luTmFtZSA9IHRoaXMucHJvcHMucGFyYW1zLnBsdWdpbk5hbWU7XHJcbiAgICAvL2NvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKHBsdWdpbk5hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIGNvbnRhaW5lciBkb2NzJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIERvY3VtZW50YXRpb24gUGFnZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8UGFnZSAvPlxyXG4gICAgICAgICAgICB7LyogdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG4gICAgICAgICAgICAgIHRhZzogdGhpcy5zdGF0ZS50YWcsXHJcbiAgICAgICAgICAgICAgc2V0VGFnOiA6OnRoaXMuc2V0VGFnLFxyXG4gICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuc3RhdGUucGx1Z2lucyxcclxuICAgICAgICAgICAgICBwbHVnaW5cclxuICAgICAgICAgICAgfSkqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBtYWtlQm9keSgpIHtcclxuICAgIGxldCBib2R5ID1cclxuYHRlc3RpbmdcclxuIyBURVNUXHJcblxyXG4tIGxpc3RcclxuLSBsaXN0XHJcbi0gbGlzdFxyXG5cclxufn5+XHJcbiBjb2RlXHJcbn5+flxyXG5gO1xyXG4gICAgcmV0dXJuIG1hcmtlZChib2R5KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMubWFrZUJvZHkoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgICBoZWFkZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVscCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBib2R5fX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5jb25zdCBfZGlzdEZyb21Ub3AgPSAxNTA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9wOiAwXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2Nyb2xsID0gOjp0aGlzLm9uU2Nyb2xsO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBvblNjcm9sbCgpIHtcclxuICAgIGxldCB0b3AgPSAwO1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gX2Rpc3RGcm9tVG9wKSB7XHJcbiAgICAgIHRvcCA9IHdpbmRvdy5zY3JvbGxZIC0gX2Rpc3RGcm9tVG9wO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvcCB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhpcy5zdGF0ZS50b3BcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICBsaXN0IG9mIHNlY3Rpb25zIC8gc3Vic2VjdGlvbnNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgc2hvd2Nhc2UnPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9wbHVnaW5zXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL3BsdWdpbnMucG5nJyAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBzaG93Y2FzZSc+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL3Byb2plY3RzLnBuZycgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBzaG93Y2FzZSc+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RvY3NcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvZG9jcy5wbmcnIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKi99XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL2hvbWUnXHJcblxyXG5pbXBvcnQgUGx1Z2luc0xheW91dCBmcm9tICcuL3BsdWdpbnMnXHJcbmltcG9ydCBQbHVnaW5MaXN0IGZyb20gJy4vcGx1Z2lucy9saXN0J1xyXG5pbXBvcnQgUGx1Z2luUGFnZSBmcm9tICcuL3BsdWdpbnMvcGFnZSdcclxuXHJcbmltcG9ydCBQcm9qZWN0c0xheW91dCBmcm9tICcuL3Byb2plY3RzJ1xyXG5cclxuaW1wb3J0IERvY3NMYXlvdXQgZnJvbSAnLi9kb2NzJ1xyXG4vL2ltcG9ydCBEb2NzTGlzdCBmcm9tICcuL2RvY3MvbGlzdCdcclxuLy9pbXBvcnQgRG9jc1BhZ2UgZnJvbSAnLi9kb2NzL3BhZ2UnXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfS8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9wbHVnaW5zXCIgY29tcG9uZW50PXtQbHVnaW5zTGF5b3V0fT5cclxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtQbHVnaW5MaXN0fS8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BsdWdpbnMvOnBsdWdpbk5hbWVcIiBjb21wb25lbnQ9e1BsdWdpblBhZ2V9Lz5cclxuICAgIDwvUm91dGU+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9wcm9qZWN0c1wiIGNvbXBvbmVudD17UHJvamVjdHNMYXlvdXR9Lz5cclxuICAgIHsvKjxSb3V0ZSBwYXRoPVwiL2RvY3NcIiBjb21wb25lbnQ9e0RvY3NMYXlvdXR9IC8+Ki99XHJcbiAgPC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlJylcclxuKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTWFuYWdlciB7XHJcbiAgc3RhdGljIHBsdWdpbnNQYXRoID0gJy9kYXRhL3BsdWdpbnMuanNvbic7XHJcbiAgc3RhdGljIHRhZ3NQYXRoID0gJy9kYXRhL3RhZ3MuanNvbic7XHJcblxyXG4gIHN0YXRpYyBsb2FkKHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgZmlsZTtcclxuICAgIGlmICh0eXBlID09PSAncGx1Z2lucycpIHtcclxuICAgICAgZmlsZSA9IHRoaXMucGx1Z2luc1BhdGg7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0YWdzJykge1xyXG4gICAgICBmaWxlID0gdGhpcy50YWdzUGF0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlLCB0cnVlKTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gJzIwMCcpIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgY2FsbGJhY2sob2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHhoci5zZW5kKG51bGwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGx1Z2luTWFuYWdlciBmcm9tICcuLy4uL3BsdWdpbk1hbmFnZXInXHJcblxyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbnNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGx1Z2luczogW10sXHJcbiAgICAgIHRhZzogJycsXHJcbiAgICAgIHRhZ3M6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIFBsdWdpbk1hbmFnZXIubG9hZCgncGx1Z2lucycsIDo6dGhpcy5zZXRQbHVnaW5zKTtcclxuICAgIFBsdWdpbk1hbmFnZXIubG9hZCgndGFncycsIDo6dGhpcy5zZXRUYWdzKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIGlmICgvXFwvcGx1Z2luc1xcLyguKikvaS50ZXN0KG5leHRQcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRQbHVnaW5zKHBsdWdpbnMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwbHVnaW5zIH0pO1xyXG4gIH1cclxuICBnZXRQbHVnaW4obmFtZSkge1xyXG4gICAgbGV0IHBsdWdpbiA9IG51bGw7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucGx1Z2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5wbHVnaW5zW2ldLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICBwbHVnaW4gPSB0aGlzLnN0YXRlLnBsdWdpbnNbaV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwbHVnaW47XHJcbiAgfVxyXG4gIHNldFRhZ3MobmV3VGFncykge1xyXG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhuZXdUYWdzKTtcclxuICAgIGxldCB0YWdzID0gW107XHJcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIHRhZ3MucHVzaCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB2YWw6IG5ld1RhZ3NbbmFtZV1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFncyB9KTtcclxuICB9XHJcbiAgc2V0VGFnKHRhZykge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudGFnID09PSB0YWcpIHtcclxuICAgICAgdGFnID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFnIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9ICdSUEcgTWFrZXIgTVYgUGx1Z2lucyc7XHJcbiAgICBjb25zdCBwbHVnaW5OYW1lID0gdGhpcy5wcm9wcy5wYXJhbXMucGx1Z2luTmFtZTtcclxuICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKHBsdWdpbk5hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICB7IHBsdWdpbk5hbWUgfHwgdGl0bGUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG4gICAgICAgICAgICAgIHRhZzogdGhpcy5zdGF0ZS50YWcsXHJcbiAgICAgICAgICAgICAgc2V0VGFnOiA6OnRoaXMuc2V0VGFnLFxyXG4gICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuc3RhdGUucGx1Z2lucyxcclxuICAgICAgICAgICAgICBwbHVnaW5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgIHBsdWdpbk5hbWU9e3BsdWdpbk5hbWV9XHJcbiAgICAgICAgICAgIHRhZz17dGhpcy5zdGF0ZS50YWd9XHJcbiAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgc2V0VGFnPXs6OnRoaXMuc2V0VGFnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQbHVnaW5CbG9jayBmcm9tICcuL3BsdWdpbkJsb2NrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZmlsdGVyKHBsdWdpbikge1xyXG4gICAgY29uc3QgdGFnID0gdGhpcy5wcm9wcy50YWc7XHJcbiAgICBpZiAodGFnID09PSAnJykgcmV0dXJuIHRydWU7XHJcbiAgICBjb25zdCB0YWdzID0gcGx1Z2luLnRhZ3Muc3BsaXQoJywnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGFnc1tpXS50cmltKCkgPT09IHRhZykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHBsdWdpbnMgPSB0aGlzLnByb3BzLnBsdWdpbnMgfHwgW107XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XHJcbiAgICAgICAge3BsdWdpbnMuZmlsdGVyKDo6dGhpcy5maWx0ZXIpLm1hcCgocGx1Z2luLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFBsdWdpbkJsb2NrIGtleT17aX0gcGx1Z2luPXtwbHVnaW59IHNldFRhZz17dGhpcy5wcm9wcy5zZXRUYWd9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGx1Z2luQmxvY2sgZnJvbSAnLi9wbHVnaW5CbG9jaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cclxuICAgICAgICA8UGx1Z2luQmxvY2sgcGx1Z2luPXt0aGlzLnByb3BzLnBsdWdpbn0gbWF4PXt0cnVlfSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBtYWtlUmVxdWlyZXMoKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICByZXF1aXJlcyxcclxuICAgICAgZG93bmxvYWRcclxuICAgIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGlmIChyZXF1aXJlcykge1xyXG4gICAgICByZXF1aXJlcyA9IHJlcXVpcmVzLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICB8IFJlcXVpcmVzOiA8TGluayB0bz17YC9wbHVnaW5zLyR7cmVxdWlyZXN9YH0+XHJcbiAgICAgICAgICAgIHtyZXF1aXJlc31cclxuICAgICAgICAgIDwvTGluaz4gfCA8YSBocmVmPXtkb3dubG9hZH0+XHJcbiAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3ViJz5cclxuICAgICAgICAgIHwgPGEgaHJlZj17ZG93bmxvYWR9PlxyXG4gICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuICBtYWtlQm9keSgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdmlkZW8sXHJcbiAgICAgIGFib3V0LFxyXG4gICAgICBoZWxwXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBsZXQgYm9keSA9ICcnO1xyXG4gICAgaWYgKHZpZGVvKSB7XHJcbiAgICAgIHZhciBjb2RlID0gL1xcP3Y9KC4qKS8uZXhlYyh2aWRlbyk7XHJcbiAgICAgIGlmICghY29kZSkge1xyXG4gICAgICAgIGNvZGUgPSAveW91dHVcXC5iZVxcLyguKikvLmV4ZWModmlkZW8pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2RlKSB7XHJcbiAgICAgICAgYm9keSArPSBgPGNlbnRlcj48aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtjb2RlWzFdfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT48L2NlbnRlcj5gXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm1heCkge1xyXG4gICAgICBib2R5ICs9IGAke2Fib3V0fVxcbiR7aGVscH1gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5ICs9IGAke2Fib3V0fWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFya2VkKGJvZHkpO1xyXG4gIH1cclxuICBtYWtlVGFncygpIHtcclxuICAgIGNvbnN0IHsgdGFncyB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBpZiAoIXRhZ3MpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRhZ3Muc3BsaXQoJywnKS5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICB0YWcgPSB0YWcudHJpbSgpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICB0bz0nL3BsdWdpbnMnXHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3RhZydcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25UYWcuYmluZCh0aGlzLCB0YWcpfT5cclxuICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuICBvblRhZyh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdmVyc2lvblxyXG4gICAgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgY29uc3QgcmVxdWlyZXMgPSB0aGlzLm1ha2VSZXF1aXJlcygpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMubWFrZUJvZHkoKTtcclxuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLm1ha2VUYWdzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvcGx1Z2lucy8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9MaW5rPiB8IDxzcGFuIGNsYXNzTmFtZT0nc3ViJz5cclxuICAgICAgICAgICAgVmVyc2lvbjoge3ZlcnNpb259IHt0aGlzLm1ha2VSZXF1aXJlcygpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVscCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBib2R5fX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICAgICAgICBUYWdzOiB7dGFnc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUYWdzIGZyb20gJy4vdGFncydcclxuXHJcbmNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcbmNvbnN0IF9kaXN0RnJvbVRvcCA9IDE1MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3A6IDBcclxuICAgIH1cclxuICAgIHRoaXMub25TY3JvbGwgPSA6OnRoaXMub25TY3JvbGw7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIG9uU2Nyb2xsKCkge1xyXG4gICAgbGV0IHRvcCA9IDA7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBfZGlzdEZyb21Ub3ApIHtcclxuICAgICAgdG9wID0gd2luZG93LnNjcm9sbFkgLSBfZGlzdEZyb21Ub3A7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9wIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnRvcFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgeyB0aGlzLnByb3BzLnBsdWdpbk5hbWUgPyA8TGluayB0bz0nL3BsdWdpbnMnIGNsYXNzTmFtZT0naGVhZGVyJz5CYWNrIHRvIFBsdWdpbnM8L0xpbms+IDogbnVsbCB9XHJcbiAgICAgICAgPFRhZ3MgdGFnPXt0aGlzLnByb3BzLnRhZ30gdGFncz17dGhpcy5wcm9wcy50YWdzfSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luVGFncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25DbGljayh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWwgfSA9IHRhZztcclxuICAgICAgICAgIGNvbnN0IHNpemUgPSAoKE1hdGguZmxvb3IoKHZhbCAtIDEpIC8gMikgKyAwLjUpICogMC4yMCkgKyAwLjg7XHJcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IHsgZm9udFNpemU6IGAke3NpemV9ZW1gIH07XHJcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ3RhZyc7XHJcbiAgICAgICAgICBjbGFzc05hbWUgKz0gdGhpcy5wcm9wcy50YWcgPT09IG5hbWUgPyAnIHNlbGVjdGVkJyA6ICcnO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz0nL3BsdWdpbnMnXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzLCBuYW1lKX0+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8vaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0c1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkb2NzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NvbnN0IHRpdGxlID0gJ1JQRyBNYWtlciBNViBQbHVnaW5zJztcclxuICAgIC8vY29uc3QgcGx1Z2luTmFtZSA9IHRoaXMucHJvcHMucGFyYW1zLnBsdWdpbk5hbWU7XHJcbiAgICAvL2NvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKHBsdWdpbk5hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIGNvbnRhaW5lciBwcm9qZWN0cyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgc2hvd2Nhc2UnPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvY29taW5nU29vbi5wbmcnIC8+XHJcbiAgICAgICAgICAgIHsvKiB0aGlzLnByb3BzLmNoaWxkcmVuICYmIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XHJcbiAgICAgICAgICAgICAgdGFnOiB0aGlzLnN0YXRlLnRhZyxcclxuICAgICAgICAgICAgICBzZXRUYWc6IDo6dGhpcy5zZXRUYWcsXHJcbiAgICAgICAgICAgICAgcGx1Z2luczogdGhpcy5zdGF0ZS5wbHVnaW5zLFxyXG4gICAgICAgICAgICAgIHBsdWdpblxyXG4gICAgICAgICAgICB9KSovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0=
