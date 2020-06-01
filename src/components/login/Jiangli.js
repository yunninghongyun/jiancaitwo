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
      awardName: "",
      resultName: "",
      approvalUnits: "",
      awardTime: new Date(),
      prize: "",
      awardLv: "特等奖",
      ranking: "",
      department: "材料工程系",
      upload: "",

      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",
    };
  }
  componentDidMount() {
    let id = sessionStorage.getItem("AwardsRegId");
    console.log(id);

    if (id && id > 0) {
      Axios.get(`${url}/AwardsReg/get?id=${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              awardName: res.data.awardName,
              resultName: res.data.resultName,
              approvalUnits: res.data.approvalUnits,
              awardTime:
                res.data.awardTime != null && res.data.awardTime.length > 10
                  ? res.data.awardTime.substring(0, 10)
                  : "2020-01-01",
              prize: res.data.prize,
              awardLv: res.data.awardLv,
              ranking: res.data.ranking,
              upload: res.data.upload,
              department: res.data.department,
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
      if (i > 6 && (i - 6) % 3 == 1) {
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
      awardName: this.state.awardName,
      resultName: this.state.resultName,
      approvalUnits: this.state.approvalUnits,
      awardTime: this.state.awardTime,
      prize: this.state.prize,
      awardLv: this.state.awardLv,
      ranking: this.state.ranking,
      upload: this.state.upload,
      department: this.state.department,
      personnels: personnels,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/AwardsReg/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            sessionStorage.setItem("AwardsRegId", 0);
            this.props.link("Incentive");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/AwardsReg/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("Incentive");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }

    // }
  };
  cancel = () => {
    this.props.link("Incentive");
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
            <div className="form_title">奖励登记</div>
            <div className="form_content">
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>奖励名称</span>:
                <input
                  type="text"
                  defaultValue={this.state.awardName}
                  onChange={(e) => this.setState({ awardName: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>成果名称</span>:
                <input
                  type="text"
                  defaultValue={this.state.resultName}
                  onChange={(e) =>
                    this.setState({ resultName: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>批准单位</span>:
                <input
                  type="text"
                  defaultValue={this.state.approvalUnits}
                  onChange={(e) =>
                    this.setState({ approvalUnits: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>获奖时间</span>:
                <DatePicker
                  style={{ width: "99%", marginLeft: 0, marginRight: "18px" }}
                  placeholder="请选择日期"
                  value={moment(this.state.awardTime)}
                  onChange={(e) => {
                    this.setState({ awardTime: e.format("YYYY-MM-DD") });
                  }}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>奖项</span>:
                <input
                  type="text"
                  defaultValue={this.state.prize}
                  onChange={(e) => this.setState({ prize: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>奖励级别</span>:
                <select
                  className="xiaoqi_select"
                  value={this.state.awardLv}
                  onChange={(e) => this.setState({ awardLv: e.target.value })}
                >
                  <option value="特等奖">特等奖</option>
                  <option value="一等奖">一等奖</option>
                  <option value="二等奖">二等奖</option>
                  <option value="三等奖">三等奖</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>排名人数:</span>
                <Select
                  showSearch
                  style={{ width: "100%", margin: "4px 12px 0 12px" }}
                  placeholder="排名人数"
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
                <span>负责人所属部门:</span>
                <select
                  className="xiaoqi_select"
                  value={this.state.department}
                  onChange={(e) =>
                    this.setState({ department: e.target.value })
                  }
                >
                  <option value="材料工程系">材料工程系</option>
                  <option value="建筑工程系">建筑工程系</option>
                  <option value="机电工程系">机电工程系</option>
                  <option value="信息工程系">信息工程系</option>
                  <option value="财经管理系">财经管理系</option>
                  <option value="现代服务管理系">现代服务管理系</option>
                  <option value="艺术设计系">艺术设计系</option>
                  <option value="体育教学部">体育教学部</option>
                  <option value="基础部">基础部</option>
                  <option value="思想政治理论课教育部">
                    思想政治理论课教育部
                  </option>
                  <option value="行政">行政</option>
                  <option value="外单位">外单位</option>
                </select>
              </div>
              <div className="form_item">
                <span>上传附件</span>:
                <input
                  type="file"
                  onChange={(value) => this.setState({ upload: value })}
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
