import React, { Component } from "react";

import "./index.scss";

export class RHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    window.onscroll = function (e) {
      if (this.oldScroll < this.scrollY) {
        document.getElementById("header__swipe").style.display = "none";
      } else {
        document.getElementById("header__swipe").style.display = "block";
      }
      this.oldScroll = this.scrollY;
    };

    var windowWidth = window.innerWidth;
    if (windowWidth < 1200) {
      document.getElementById("header__swipe--text").innerHTML =
        "Swipe up to scroll";
    } else {
      document.getElementById("header__swipe--text").innerHTML = "Scroll down";
    }
  }

  render() {
    const props = this.props;

    return (
      <div className="header totalCenter columnFlex">
        <div className="header__details totalCenter">
          <h1 className="header__details--header">{props.name}</h1>
          <p className="header__details--job">{props.job}</p>
          <div className="header__buttons">
            <a
              className="header__details--contact-btn secondary-btn"
              href={`mailto:${props.contact}`}
            >
              CONTACT
            </a>
            <a
              className="header__details--contact-btn primary-btn"
              href={props.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </a>
          </div>
          <div className="header__details--social">
            <ul>
              {props.socials.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link} target={item.newTab ? "_blank" : null}>
                      <img src={item.icon} alt={`${item.label}`} />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="header__swipe" id="header__swipe">
          <p className="header__swipe--text" id="header__swipe--text" />
          <div className="header__swipe--bar" />
        </div>
      </div>
    );
  }
}
