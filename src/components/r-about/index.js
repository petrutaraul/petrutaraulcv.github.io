import React, { Component } from "react";

import "./index.scss";

export class RAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;

    return (
      <div className="about-me totalCenter columnFlex">
        <h1>{props.description}</h1>
      </div>
    );
  }
}
