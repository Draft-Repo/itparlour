import React, { Component } from "react";
import CKEditor from "../../../ckeditor/Ckeditor";
import Publish from "./Publish";
import Category from "./Category";
import FeaturedImage from "./FeaturedImage";

import "./Pagemaker.scss";

class Pagemaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: null,
      slugEditing: false,
      base_url: window.location.origin,
      title: ""
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.slugEditing = this.slugEditing.bind(this);
    this.changeSlug = this.changeSlug.bind(this);
  }

  changeTitle(e) {
    this.setState({ title: e.target.value });
  }
  changeSlug(e, title) {
    if (title) {
      if (this.state.slug == null) {
        this.setState({
          slug: e.target.value
            .toLowerCase()
            .split(/\s+/)
            .slice(0, 3)
            .join("-")
        });
      }
    } else {
      this.setState({ slug: e.target.value.split(/\s+/).join("-") });
    }
  }
  slugEditing() {
    if (this.state.slugEditing) {
      this.setState({ slugEditing: false });
    } else {
      this.setState({ slugEditing: true });
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3 title">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <b>Page Title</b>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder=" Type a good title 10-90 charecter is best for seo."
                onChange={e => {
                  this.changeTitle(e);
                }}
                onBlur={e => {
                  this.changeSlug(e, true);
                }}
                value={this.state.title}
              />
            </div>
            <div className="ml-3">
              <div>
                {this.state.slug == null ? (
                  <p>&nbsp;</p>
                ) : (
                  <p>
                    Permalink:&nbsp;
                    {this.state.slugEditing ? (
                      <span>
                        {this.state.base_url}/
                        <input
                          type="text"
                          value={this.state.slug}
                          onChange={e => {
                            this.changeSlug(e);
                          }}
                        />
                      </span>
                    ) : (
                      <a
                        target="_blank"
                        href={this.state.base_url + "/" + this.state.slug}
                      >
                        {this.state.base_url}/{this.state.slug}
                      </a>
                    )}
                    <button className="ml-2" onClick={this.slugEditing}>
                      {this.state.slugEditing ? "OK" : "Edit"}
                    </button>
                  </p>
                )}
              </div>
            </div>

             <CKEditor /> 
          </div>

          <div className="col-md-4" dropable="true">
            <Publish />
            <Category />
            <FeaturedImage />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagemaker;
