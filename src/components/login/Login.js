import React, { Component } from "react";
import "./login.css";
import { Input, Button } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import img from "../image/wode.png";
import axios from "axios";
import "./login.css";
const url = window.api;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleEnterKey);
  }

  componentWillUmount() {
    document.removeEventListener("keydown", this.handleEenterKey);
  }

  handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      this.Login();
    }
  };
  Login() {
    let data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    if (
      data.username == "" ||
      data.password == "" ||
      data.username == null ||
      data.password == null
    ) {
      alert("请输入用户名或密码！");
    } else {
      axios
        .post(`${url}/login`, data)
        .then((res) => {
          console.log(res);
          if (res.data.id > 0) {
            // this.setState({

            //      username:res.data.username,
            //      name:res.data.name,
            //      department:res.data.department,
            //      role:res.data.role,
            //      id:res.data.id,
            //      password: res.data.password

            // })
            sessionStorage.setItem("Userid", res.data.id);
            sessionStorage.setItem("UserRole", res.data.role);
            sessionStorage.setItem("UserDepartment", res.data.department);
            sessionStorage.setItem("name", res.data.name);
            window.location.href = "/main";
          } else {
            alert("用户名或密码输入错误！");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <div className="login">
        <div className="login-inner"></div>
        <div className="top-img">
          <img src={img} alt="" />
        </div>
        <div className="login-box">
          <div className="box-main">
            <div className="userName">
              <span style={{ width: "90%" }}>
                <Input
                  size="large"
                  placeholder="请输入用户名"
                  defaultValue={this.state.username}
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                ></Input>
              </span>
            </div>
            <div className="password">
              <span style={{ width: "90%" }}>
                <Input.Password
                  size="large"
                  placeholder="请输入密码"
                  defaultValue={this.state.password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </span>
            </div>
            <div className="btn">
              <button
                size="large"
                className="login-btn"
                onClick={this.Login.bind(this)}
              >
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
