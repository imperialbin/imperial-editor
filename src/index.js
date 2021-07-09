import React, { Component } from "react";
import PropTypes from "prop-types";

if (typeof window !== "undefined") {
  const ace = require("imperial-ace-builds");
}

class CodeEditor extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      const { onChange, setReadOnly, setValue, theme, mode } = this.props;

      require(`imperial-ace-builds/src-noconflict/mode-${mode}`);
      require(`imperial-ace-builds/src-noconflict/theme-${theme}`);

      const editor = ace.edit("ace-editor");
      this.editor = editor;
      editor.getSession().setMode(`ace/mode/${mode}`);
      editor.setTheme(`ace/theme/${theme}`);
      editor.on("change", (e) => onChange(editor.getValue(), e));
      editor.setReadOnly(setReadOnly);
      editor.setValue(setValue);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { style, editorId } = this.props;
    return <div id={editorId} style={style}></div>;
  }
}

CodeEditor.propTypes = {
  editorId: PropTypes.string,
  onChange: PropTypes.func,
  setReadOnly: PropTypes.bool,
  setValue: PropTypes.string,
  theme: PropTypes.string,
  mode: PropTypes.string,
  style: PropTypes.object,
};

CodeEditor.defaultProps = {
  editorId: "ace-editor",
  onChange: () => {},
  setValue: "",
  setReadOnly: false,
  theme: "custom",
  mode: "javascript",
  style: { height: "100vh", width: "100vw" },
};

module.exports = CodeEditor;
