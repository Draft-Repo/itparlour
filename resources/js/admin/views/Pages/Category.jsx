import React from "react";
import "./Category.scss";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCategory: false,
      newCategory: "",
      parentCategory: "",
      categories: [],
      error: null,
      messege: null
    };
    this.addCategory = this.addCategory.bind(this);
    this.testme = this.testme.bind(this);
  }

  async componentDidMount() {
    const { data: categories } = await axios.get("/api/category");
    this.setState({ categories });
  }

  async addCategory() {
    const { data: response } = await axios({
      method: "post",
      url: "/api/category/",
      data: {
        category: this.state.newCategory,
        parent: this.state.parentCategory
      }
    });
    this.setState({
      categories: response.data,
      messege: response.messege,
      error: response.error
    });
    if (this.state.error == false) {
      this.setState({ newCategory: "" });
    }
    setTimeout(this.testme, 1500);
  }

  testme() {
    this.setState({ messege: null });
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-visibility bg-white" draggable="true">
          <div
            data-toggle="collapse"
            data-target="#categoryContainer"
            className="page-visibility-toggler p-2"
          >
            <div className="row">
              <div className="col-10">Category</div>
              <div className="col-2 text-right">
                <span className="text-right">&#9660;</span>
              </div>
            </div>
          </div>
          <div
            id="categoryContainer"
            className="collapse show p-2 page-visibility-container"
          >
            <ul className="category-list">
              {this.state.categories.map((value, index) => {
                return (
                  <li key={index}>
                    <input
                      type="checkbox"
                      id={index}
                      value={value.category_name}
                    />
                    <label htmlFor={index}>{value.category_name}</label>
                  </li>
                );
              })}
            </ul>
            <hr className="m-2" />
            {this.state.addCategory ? (
              <div>
                <input
                  type="text"
                  className="col-12 mb-2 mt-0"
                  value={this.state.newCategory}
                  onChange={e => {
                    this.setState({ newCategory: e.target.value });
                  }}
                  required
                />
                <select
                  className="col-12 mb-2"
                  onChange={e => {
                    this.setState({ parentCategory: e.target.value });
                  }}
                >
                  <option value="">--Parent Category--</option>
                  {this.state.categories.map((value, index) => {
                    return (
                      <option key={value.id} value={value.id}>
                        {value.category_name}
                      </option>
                    );
                  })}
                </select>
                {this.state.messege == null ? (
                  <button
                    className="btn btn-link"
                    onClick={() =>
                      this.setState({
                        addCategory: false,
                        newCategory: "",
                        parentCategory: ""
                      })
                    }
                  >
                    Cancel
                  </button>
                ) : (
                  <button className="btn btn-link text-danger">
                    {this.state.messege}
                  </button>
                )}

                <button
                  className="btn btn-success btn-sm float-right"
                  onClick={this.addCategory}
                >
                  Add Category
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-link">&nbsp;</button>
                <button
                  className="btn btn-link btn-sm float-right"
                  onClick={() => this.setState({ addCategory: true })}
                >
                  Add Category
                </button>
              </div>
            )}
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Category;
