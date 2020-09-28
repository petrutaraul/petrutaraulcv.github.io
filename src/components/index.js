import React from "react";
import axios from "axios";

import { RHeader, RAbout } from "./components";

export class Components extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        header: {
          name: "",
          job: "",
          contact: "",
          resume: "",
          social: [],
        },
        about: {
          description: "",
          image: "",
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
      <>
        <RHeader
          name={data.header.name}
          job={data.header.job}
          socials={data.header.social}
          contact={data.header.contact}
          resume={data.header.resume}
        />

        <RAbout description={data.about.description} image={data.about.image} />
      </>
    );
  }
}
