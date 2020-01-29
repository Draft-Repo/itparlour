import React, { Component, useState } from "react";
import CKEditor from "./../../../ckeditor/CKEditor";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "./Pagemaker.scss";

const DateSelector = () => {
  const [publishDate, setPublishDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ position: "fixed", left: "-82px" }}>
        <CalendarContainer className={className}>{children}</CalendarContainer>
      </div>
    );
  };
  return (
    <DatePicker
      selected={publishDate}
      onChange={date => setPublishDate(date)}
      calendarContainer={MyContainer}
      placeholderText="Available from"
      dateFormat="dd/MM/yyyy h:mm aa"
      showTimeInput
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      timeInputLabel="Time:"
    />
  );
};

class Pagemaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "",
      publishDate: ""
    };
    this.visibilityChange = this.visibilityChange.bind(this);
    this.setDateTime = this.setDateTime.bind(this);
  }

  visibilityChange(e) {
    this.setState({
      visibility: e.target.value
    });
  }
  setDateTime() {
    this.setState({
      publishDate: "2013-01-08"
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
                readOnly
              />
            </div>
            <p>
              Permalink: <a target="_blank">Linkhere</a>
            </p>
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
