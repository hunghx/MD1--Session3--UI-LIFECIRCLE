import React, { Component } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

export default class StudentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      listStudent: JSON.parse(localStorage.getItem("list-students")) || [],
      newStudent: { firstName: "", lastName: "", username: "" },
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  // quản lí dữ liệu người dùng nhật ở ô input
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // cập nhật lại state
    this.setState({
      // {fn:"hùng",ln:"Hồ",us:"hunghx",ln:"nam"}
      newStudent: { ...this.state.newStudent, [name]: value },
    });
  };
  // hàm xử lí thêm mới dữ liệu
  handleAdd = (e) => {
    e.preventDefault();
    // tạo id tự tăng
    let id =
      this.state.listStudent.length === 0
        ? 1
        : this.state.listStudent[this.state.listStudent.length - 1].id + 1;
    // cập nhật lại mảng
    let newList = [...this.state.listStudent, { id, ...this.state.newStudent }];
    this.setState({
      listStudent: newList,
      newStudent: { firstName: "", lastName: "", username: "" },
    });
    // lưu vào local storage
    localStorage.setItem("list-students", JSON.stringify(newList));
    this.handleClose();
  };

  render() {
    console.log(this.state.newStudent);
    return (
      <div>
        <h1 className="text-center">Quản lý học sinh</h1>

        {/* nút thêm mới */}
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Form>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add new student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter first name"
                  name="firstName"
                  value={this.state.newStudent.firstName}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter last name"
                  name="lastName"
                  value={this.state.newStudent.lastName}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter username"
                  name="username"
                  value={this.state.newStudent.username}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={(e) => this.handleAdd(e)}
              >
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
        {/* nút thêm mới */}
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listStudent.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
