import React, { useState } from "react";
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

  componentDidMount() {
    CKEDITOR.replace(this.state.ckeditorName, this.props.config || config);
  }

  render() {
    return (
      <div>
        <textarea
          className="ckeditor"
          name={this.state.ckeditorName}
        ></textarea>
      </div>
    );
  }
}
export default CKEditor;
