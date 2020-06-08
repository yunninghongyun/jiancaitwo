import React, { Component } from "react";
import "./login.css";
import { Input, Button, DatePicker, Alert, Select } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import Axios from "axios";
import "../SocialServices/socialservices.css";
let url = window.api;
class Jiexiangfengmian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      userId: 0,
      data: [],
      projectNo: "",
      projectName: "",
      projectLeader: "",
      department: "",
      startTime: "",
      year: "",
      month: "",
      day: "",
      applicationFormId: "",
      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",
    };
  }
  componentDidMount() {
    let id = sessionStorage.getItem("ApplicationFormId");
    if (id && id > 0) {
      Axios.get(`${url}/ClosingForm/get?id=${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              userId: res.state.userId,
              projectNo: res.data.projectNo,
              projectName: res.data.projectName,
              projectLeader: res.data.projectLeader,
              department: res.data.department,
              startTime: res.data.startTime,
              year: res.data.year,
              month: res.data.month,
              day: res.data.day,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  submit = () => {
    let data = {
      id: this.state.id,
      userId: this.state.userId,
      projectNo: this.data.projectNo,
      projectName: this.data.projectName,
      projectLeader: this.data.projectLeader,
      department: this.data.department,
      startTime: this.data.startTime,
      year: this.data.year,
      month: this.data.month,
      day: this.data.day,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/ClosingForm/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            // sessionStorage.setItem("ApplicationFormId", 0);
            this.props.link("jiexiangfengmian");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/ClosingForm/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("jiexiangfengmian");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  cancel = () => {
    this.props.link("settlementRegistration");
  };
  render() {
    const dateFormat = "YYYY-MM-DD";
    let sel = [];
    for (let i = 1; i < this.state.number1; i++) {
      sel.push(<Select.Option value={i}>{i}</Select.Option>);
    }
    return (
      <div>
        <div className="register_container">
          <div className="zhuceform">
            <div className="form_title">
              河北建材职业技术学院社会服务项目结项登记表
            </div>
            <div className="form_content socialServices jiexiangfengmian">
              <div className="fengmian-content">
                <div className="fengmian-title">
                  <div>项目编号：</div>
                  <input
                    type="text"
                    value={this.state.projectNo}
                    onChange={(e) =>
                      this.setState({ projectNo: e.target.value })
                    }
                  />
                </div>
                <div className="fengmian-title">
                  <div>项目名称：</div>
                  <input
                    type="text"
                    value={this.state.projectName}
                    onChange={(e) =>
                      this.setState({ projectName: e.target.value })
                    }
                  />
                </div>
                <div className="fengmian-title">
                  <div>项目负责人：</div>
                  <input
                    type="text"
                    value={this.state.projectLeader}
                    onChange={(e) =>
                      this.setState({ projectLeader: e.target.value })
                    }
                  />
                </div>
                <div className="fengmian-title">
                  <div>所在部门（单位）：</div>
                  <input
                    type="text"
                    value={this.state.department}
                    onChange={(e) =>
                      this.setState({ department: e.target.value })
                    }
                  />
                </div>
                <div className="fengmian-title">
                  <div>起始时间：</div>
                  <input
                    type="text"
                    value={this.state.startTime}
                    onChange={(e) =>
                      this.setState({ startTime: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="fengmian-down">
                <div className="fengmian-down-title">河北建材职业技术学院</div>
                <div className="fengmian-time">
                  <input
                    type="text"
                    className="year"
                    value={this.state.year}
                    onChange={(e) => this.setState({ year: e.target.value })}
                  />
                  年
                  <input
                    type="text"
                    value={this.state.month}
                    onChange={(e) => this.setState({ month: e.target.value })}
                  />
                  月
                  <input
                    type="text"
                    value={this.state.day}
                    onChange={(e) => this.setState({ day: e.target.value })}
                  />
                  日
                </div>
              </div>
              <div className="btn_box">
                <div className="btn_container">
                  <Button
                    style={{
                      width: "60px",
                      height: "30px",
                      backgroundColor: "#1890ff",
                      color: "#fff",
                    }}
                    onClick={this.submit.bind(this)}
                  >
                    {this.state.id == 0 ? "提交" : "修改"}
                  </Button>
                  <Button
                    style={{
                      width: "60px",
                      height: "30px",
                      color: "#fff",
                      backgroundColor: "#000",
                    }}
                    onClick={this.cancel.bind(this)}
                  >
                    取消
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jiexiangfengmian;
