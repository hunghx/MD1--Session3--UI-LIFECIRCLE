import React, { Component } from "react";
import Child from "./components/Child";
import Time from "./components/Time";
import FormLayout from "./components/FormLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import StudentManager from "./components/StudentManager";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isShow: true,
    };
    // khởi tạo , chỉ chạy 1 lần duy nhất.
    console.log("đây là constructor");
  }
  // chạy khi component này được mount ra DOM
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillReceiveProps() {
    //  chạy khi có sự thay đổi của props hoặc state
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
    // console.log("count đã bị thay đổi ", this.state.count);
  };
  handleDelete = () => {
    this.setState({
      isShow: false,
    });
  };
  render() {
    {
      console.log("đây là render");
    }
    return (
      <div className="container">
        {/* {this.state.isShow ? <Child /> : ""}
        <h1>Đếm số</h1>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDelete}>Xoá</button>
        <Time />

        <FormLayout /> */}
        <StudentManager />
      </div>
    );
  }
}
