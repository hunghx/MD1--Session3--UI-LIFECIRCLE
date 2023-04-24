import React, { Component } from "react";

export default class Child extends Component {
  componentWillUnmount() {
    console.log("Con sắp bị xoá khỏi dom");
  }
  render() {
    return <div>Child</div>;
  }
}
