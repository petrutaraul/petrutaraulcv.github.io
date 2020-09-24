import React from "react";
import axios from "axios";

import { RHeader } from "./components";

export class Components extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        header: {
          name: "",
          job: "",
        },
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
        mypic={require("../pictures/profile-picture.png")}
        name={data.header.name}
        job={data.header.job}
      />
    );
  }
}
