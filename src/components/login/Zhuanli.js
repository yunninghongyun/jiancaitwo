import React, { Component } from "react";
import "./login.css";
import { DatePicker, Button, Select } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import Axios from "axios";
let url = window.api;
class Zhuanli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorynum: [],
      personnels: [],
      peopleNum: 0,
      number1: 99,
      userId: 0,
      id: 0,
      name: "",
      category: "发明专利",
      inventor: "",
      patentee: "个人",
      authorization: new Date(),
      department: "",
      conversion: true,

      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",
    };
  }
  componentDidMount() {
    let id = sessionStorage.getItem("IssueRegId");
    console.log(id);

    if (id && id > 0) {
      Axios.get(`${url}/IssueReg/get?id=${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              name: res.data.name,
              category: res.data.category,
              inventor: res.data.inventor,
              patentee: res.data.patentee,
              department: res.data.department,
              authorization:
                res.data.authorization != null &&
                res.data.authorization.length > 10
                  ? res.data.authorization.substring(0, 10)
                  : "2020-01-01",
              conversion: res.data.conversion,
              peopleNum: res.data.personnels.length,
              personnels: res.data.personnels,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  submit = () => {
    // if (
    //   this.state.name == "" ||
    //   this.state.area == "" ||
    //   this.state.level == "" ||
    //   this.state.code == "" ||
    //   this.state.schoolCode == "" ||
    //   this.state.location == "" ||
    //   this.state.year == "" ||
    //   this.state.enrolment == "" ||
    //   this.state.inSchoolNum == "" ||
    //   this.state.graduatesNum == "" ||
    //   this.state.employmentRate == "" ||
    //   this.state.teacherSize == "" ||
    //   this.state.traineesNum == "" ||
    //   this.state.inaugurationNum == "" ||
    //   this.state.orderNum == "" ||
    //   this.state.internshipsNum == "" ||
    //   this.state.counterpartNum == "" ||
    //   this.state.teacherInternshipsNum == "" ||
    //   this.state.companyPartTimeNum == "" ||
    //   this.state.partTimeNum == "" ||
    //   this.state.teacherPartTimeNum == "" ||
    //   this.state.companyTimeNum == ""
    // ) {
    //   alert("必填项不能为空！");
    // } else {
    let personnels = [];
    let choice = false;
    let cou = document.querySelectorAll("input");
    console.log(cou.length);
    for (let i = 0; i < cou.length; i++) {
      // if (cou[i].value == null || cou[i].value == "") {
      if (i > 5 && (i - 5) % 3 == 1) {
        let data = {
          num: cou[i].value, //排名
          name: cou[i + 1].value, //名字
          department: cou[i + 2].value, //部门
        };
        if (data.num != "" && data.name != "" && data.department != "") {
          personnels.push(data);
        }
        console.log(personnels);
        // }
      }
    }
    let data = {
      id: this.state.id,
      name: this.state.name,
      category: this.state.category,
      inventor: this.state.inventor,
      patentee: this.state.patentee,
      department: this.state.department,
      authorization: this.state.authorization,
      conversion: this.state.conversion,
      personnels: personnels,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/IssueReg/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            sessionStorage.setItem("IssueRegId", 0);
            this.props.link("Patent");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/IssueReg/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("Patent");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }

    // }
  };
  cancel = () => {
    this.props.link("Patent");
  };
  handleChange = (value) => {
    let c = [];
    if (value > this.state.personnels.length) {
      for (let i = 0; i < value - this.state.personnels.length; i++) {
        c.push(
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        );
      }
    }
    this.setState({
      categorynum: c,
    });
  };
  render() {
    let sel = [];
    for (let i = 1; i < this.state.number1; i++) {
      sel.push(<Select.Option value={i}>{i}</Select.Option>);
    }
    return (
      <div>
        <div className="register_container">
          <div className="zhuceform">
            <div className="form_title">专利登记</div>
            <div className="form_content">
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>名称</span>:
                <input
                  type="text"
                  defaultValue={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>类别</span>:
                <select
                  className="xiaoqi_select"
                  value={this.state.category}
                  onChange={(e) => this.setState({ category: e.target.value })}
                >
                  <option value="发明专利">发明专利</option>
                  <option value="实用新型专利">实用新型专利</option>
                  <option value="外观设计专利">外观设计专利</option>
                  <option value="软件著作权">软件著作权</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>发明人人数:</span>
                <Select
                  showSearch
                  style={{ width: "100%", margin: "4px 12px 0 12px" }}
                  placeholder="参研人人数"
                  optionFilterProp="children"
                  className="numoftype"
                  onChange={this.handleChange}
                  Value={this.state.peopleNum}
                >
                  {sel}
                </Select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>专利权人</span>:
                <select
                  className="xiaoqi_select"
                  value={this.state.patentee}
                  onChange={(e) => this.setState({ patentee: e.target.value })}
                >
                  <option value="个人">个人</option>
                  <option value="河北建材职业技术学院">
                    河北建材职业技术学院
                  </option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>授权公告日</span>:
                <DatePicker
                  style={{ width: "99%", marginLeft: 0, marginRight: "18px" }}
                  placeholder="请选择日期"
                  value={moment(this.state.authorization)}
                  onChange={(e) => {
                    this.setState({ authorization: e.format("YYYY-MM-DD") });
                  }}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>是否转化:</span>
                <div className="radio_container">
                  <form>
                    <input
                      type="radio"
                      name="conversion"
                      checked={this.state.conversion ? true : false}
                      onChange={(e) => this.setState({ conversion: true })}
                    />
                    是
                    <input
                      type="radio"
                      name="conversion"
                      checked={!this.state.conversion ? true : false}
                      onChange={(e) => this.setState({ conversion: false })}
                    />
                    否
                  </form>
                </div>
              </div>
              <div className="form_item">
                <span>上传附件</span>:
                <input
                  type="file"
                  onChange={(value) => this.setState({ year: value })}
                />
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
              <div className="xia" style={{ margin: "10px auto" }}>
                <table
                  border="1"
                  className="tbody"
                  style={{ width: "300px", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <td style={{ width: "30%" }}>排名</td>
                      <td style={{ width: "30%" }}>发明人</td>
                      <td style={{ width: "40%" }}>发明人部门</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.personnels.map((item, index) => (
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="ichoice-change"
                            defaultValue={item.num}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="ichoice-change"
                            defaultValue={item.name}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="ichoice-change"
                            defaultValue={item.department}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="canyanren">{this.state.categorynum}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*                
                <footer>
                    <div className="copyRight">
                    Copyright (c) 2019 Xiaoyu Video Communications ( Beijing ) Technology Co. Ltd
                    </div>
                </footer> */}
      </div>
    );
  }
}

export default Zhuanli;
