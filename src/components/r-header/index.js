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
        <div className="header__details">
          <h1 className="header__details--header">{this.props.name}</h1>
          <p className="header__details--job">{this.props.job}</p>
          <h1 onClick={this.changeNumber}>{this.state.number}</h1>
        </div>
      </div>
    );
  }
}
