import React, { Component } from "react";

class Pagenotfound extends Component {
  render() {
    return (
      <div className={`flex justify-center`}>
        <div className="container mx-auto">
          <span className="display-1 d-block">404</span>
          <h3 className="mt-4 lead">
            The page you are looking for was not found.
          </h3>
        </div>
      </div>
    );
  }
}

export default Pagenotfound;
