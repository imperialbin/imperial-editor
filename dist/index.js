"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== "undefined") {
  var _ace = require("imperial-ace-builds");
}

var CodeEditor = function (_Component) {
  _inherits(CodeEditor, _Component);

  function CodeEditor() {
    _classCallCheck(this, CodeEditor);

    return _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).apply(this, arguments));
  }

  _createClass(CodeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== "undefined") {
        var _props = this.props,
            onChange = _props.onChange,
            setReadOnly = _props.setReadOnly,
            setValue = _props.setValue,
            theme = _props.theme,
            mode = _props.mode,
            autoFocus = _props.autoFocus;


        require("imperial-ace-builds/src-noconflict/mode-" + mode);
        require("imperial-ace-builds/src-noconflict/theme-" + theme);

        var editor = ace.edit("ace-editor");
        this.editor = editor;
        editor.getSession().setMode("ace/mode/" + mode);
        editor.setTheme("ace/theme/" + theme);
        editor.on("change", function (e) {
          return onChange(editor.getValue(), e);
        });
        editor.setReadOnly(setReadOnly);
        editor.setValue(setValue);

        if (autoFocus) editor.focus();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          style = _props2.style,
          editorId = _props2.editorId;

      return _react2.default.createElement("div", { id: editorId, style: style });
    }
  }]);

  return CodeEditor;
}(_react.Component);

CodeEditor.propTypes = {
  editorId: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  setReadOnly: _propTypes2.default.bool,
  autoFocus: _propTypes2.default.bool,
  setValue: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  mode: _propTypes2.default.string,
  style: _propTypes2.default.object
};

CodeEditor.defaultProps = {
  editorId: "ace-editor",
  onChange: function onChange() {},
  setValue: "",
  autoFocus: false,
  setReadOnly: false,
  theme: "imperial",
  mode: "javascript",
  style: { height: "100vh", width: "100vw" }
};

module.exports = CodeEditor;