import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "The about page"
    };
  }
  componentDidMount() {
    this.setState({
      pageTitle: "Do you want to know more about us?"
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
      </div>
    );
  }
}

export default About;
