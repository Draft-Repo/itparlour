import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import CKEditor from "../../../ckeditor/Ckeditor";

import "./Pagemaker.scss";

const DateSelector = () => {
  const [publishDate, setPublishDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={publishDate}
        onChange={date => setPublishDate(date)}
        placeholderText="  Available from"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        timeInputLabel="Time:"
        name="publishingTime"
        id="publishingTime"
      />
    </div>
  );
};

class Pagemaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: ""
    };
    this.visibilityChange = this.visibilityChange.bind(this);
  }

  visibilityChange(e) {
    this.setState({
      visibility: e.target.value
    });
  }

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
            <div className="page-visibility bg-white" draggable="true">
              <div
                data-toggle="collapse"
                data-target="#publishContainer"
                className="page-visibility-toggler p-2"
              >
                <div className="row">
                  <div className="col-10">Publish</div>
                  <div className="col-2 text-right">
                    <span className="text-right">&#9660;</span>
                  </div>
                </div>
              </div>
              <div
                id="publishContainer"
                className="collapse p-2 page-visibility-container"
              >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Status </b>
                      </td>
                      <td>
                        <select defaultValue="Publish">
                          <option>Publish</option>
                          <option>Draft</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Visibility </b>
                      </td>
                      <td>
                        <select
                          id="visibility"
                          defaultValue="public"
                          onChange={this.visibilityChange}
                        >
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          <option value="protected">Protected</option>
                        </select>
                      </td>
                    </tr>

                    {this.state.visibility == "protected" ? (
                      <tr>
                        <td colSpan="2" className="pb-2">
                          <b>Password </b>
                          <br />
                          <input type="text" readOnly />
                        </td>
                      </tr>
                    ) : null}

                    <tr className="datepicker">
                      <td>
                        <b>Publish&nbsp;@</b>
                      </td>
                      <td>
                        <DateSelector />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div className="row">
                  <div className="col-7 text-center">
                    <button type="button" className="btn btn-link text-trash">
                      Move to trash
                    </button>
                  </div>

                  <div className="col-5 text-center">
                    <button type="button" className="btn btn-success">
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagemaker;
