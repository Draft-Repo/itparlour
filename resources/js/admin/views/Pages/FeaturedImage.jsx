import React from "react";

class FeaturedImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-visibility bg-white" draggable="true">
          <div
            data-toggle="collapse"
            data-target="#featuredImage"
            className="page-visibility-toggler p-2"
          >
            <div className="row">
              <div className="col-10">Featured image</div>
              <div className="col-2 text-right">
                <span className="text-right">&#9660;</span>
              </div>
            </div>
          </div>
          <div
            id="featuredImage"
            className="collapse show p-2 page-visibility-container"
          >
            
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default FeaturedImage;
