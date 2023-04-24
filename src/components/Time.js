import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
    };
  }
  handleUpdateTime = () => {
    let date = new Date();
    console.log(date);
    this.setState({
      time: date.toTimeString(),
    });
  };
  //   componentDidUpdate() {
  //     setTimeout(this.handleUpdateTime, 1000);
  //   }
  render() {
    // this.handleUpdateTime();
    return <div>{this.state.time}</div>;
  }
}
