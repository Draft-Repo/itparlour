import React, { Component } from "react";
import CKEditor from "../../../ckeditor/Ckeditor";
import Publish from "./Publish";

import "./Pagemaker.scss";

class Pagemaker extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3 title">
              <div className="input-group-prepend">
                <span className="input-group-text">Page Title</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder=" Type a good title 10-90 charecter is best for seo."
              />
            </div>
            <p>
              Permalink:
              <input placeholder="/pages/test/" disabled />
            </p>
            <CKEditor />
          </div>

          <div className="col-md-4" dropable="true">
            <Publish />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagemaker;
