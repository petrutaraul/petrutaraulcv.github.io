import React from "react";
import axios from "axios";

import { RHeader } from "./components";

export class Components extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "",
        job: "",
        image: "",
      },
    };
  }

  getData() {
    axios.get("https://api.npoint.io/088987bfa1f605d108a5").then((response) => {
      const data = response.data;
      this.setState({ data });
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const data = this.state.data;

    return (
      <RHeader
        mypic="pictures/profile-picture.jpg"
        name={data.name}
        job={data.job}
      />
    );
  }
}
