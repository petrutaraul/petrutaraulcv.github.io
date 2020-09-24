import React, { Component } from "react";
import "./index.scss";

export class RHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header totalCenter columnFlex">
        <div className="header__image">
          <img
            src={this.props.mypic}
            alt="raul-profile-pic"
            className="header__image--image"
          />
        </div>
        <div className="header__details totalCenter">
          <h1 className="header__details--header">{this.props.name}</h1>
          <p className="header__details--job">{this.props.job}</p>
          <button className="header__details--contact-btn secondary-btn">
            CONTACT
          </button>
          <div className="header__details--social"></div>
        </div>
      </div>
    );
  }
}
