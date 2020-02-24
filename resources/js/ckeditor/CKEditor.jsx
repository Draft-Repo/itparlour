import React from "react";
import scriptLoader from "react-async-script-loader";
import config from "./config";

class CKEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ckeditorName:
        this.props.name ||
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 5)
    };
  }
  UNSAFE_componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) {
      if (isScriptLoadSucceed) {
        CKEDITOR.replace(this.state.ckeditorName, this.props.config || config);
      } else console.log("CKEditor script loading failed");
    }
  }

  render() {
    return (
      <div>
        <textarea
          className="CKEditor"
          name={this.state.ckeditorName}
        ></textarea>
      </div>
    );
  }
}

export default scriptLoader([
  "https://cdn.ckeditor.com/4.13.1/full/ckeditor.js"
])(CKEditor);
