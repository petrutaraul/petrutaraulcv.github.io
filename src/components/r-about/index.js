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
      <div className="about-me totalCenter">
        <div className="wrapper totalCenter">
          <img className="about-me__image" alt="about me" src={props.image} />
          <div className="about-me__details totalCenter">
            <p className="about-me__details--text">{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
