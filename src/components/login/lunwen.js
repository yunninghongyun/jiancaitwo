import React, { Component } from "react";
import "./login.css";
import { Input, Button, DatePicker, Alert, Select } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import Axios from "axios";
let url = window.api;
class Lunwen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorynum: [],
      personnels: [],
      number1: 99,

      id: 0,
      userId: 0,
      title: "",
      journalName: "",
      organizer: "",
      journalNo: "",
      publishedTime: new Date(),
      author: "",
      department: "材料工程系",
      journalLv: "国外检索SCI",
      upload: "",
      deliverables: true,

      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",
    };
  }
  componentDidMount() {
    let id = sessionStorage.getItem("PaperRegId");
    console.log(id);
    if (id && id > 0) {
      Axios.get(`${url}/PaperReg/get?id=${id}`)
        .then((res) => {
          console.log(res.data.personnels.length);
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              title: res.data.title,
              journalName: res.data.journalName,
              organizer: res.data.organizer,
              journalNo: res.data.journalNo,
              publishedTime:
                res.data.publishedTime != null &&
                res.data.publishedTime.length > 10
                  ? res.data.publishedTime.substring(0, 10)
                  : "2020-01-01",
              author: res.data.author,
              department: res.data.department,
              journalLv: res.data.journalLv,
              upload: res.data.upload,
              deliverables: res.data.deliverables,

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
      if (i > 8 && (i - 8) % 3 == 1) {
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
      title: this.state.title,
      journalName: this.state.journalName,
      organizer: this.state.organizer,
      journalNo: this.state.journalNo,
      publishedTime: this.state.publishedTime,
      // author: this.state.author,
      department: this.state.department,
      journalLv: this.state.journalLv,
      upload: this.state.upload,
      deliverables: this.state.deliverables,

      personnels: personnels,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/PaperReg/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            sessionStorage.setItem("PaperRegId", 0);
            this.props.link("Paper");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/PaperReg/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("Paper");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }

    // }
  };
  cancel = () => {
    this.props.link("Paper");
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
    const dateFormat = "YYYY-MM-DD";
    let sel = [];
    for (let i = 1; i < this.state.number1; i++) {
      sel.push(<Select.Option value={i}>{i}</Select.Option>);
    }
    return (
      <div>
        <div className="register_container">
          <div className="zhuceform">
            <div className="form_title">论文登记</div>
            <div className="form_content">
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>题目:</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>期刊名称:</span>
                <input
                  type="text"
                  defaultValue={this.state.journalName}
                  onChange={(e) =>
                    this.setState({ journalName: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>主办单位:</span>
                <input
                  type="text"
                  defaultValue={this.state.organizer}
                  onChange={(e) => this.setState({ organizer: e.target.value })}
                />
              </div>

              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>期刊号:</span>
                <input
                  type="text"
                  defaultValue={this.state.journalNo}
                  onChange={(e) => this.setState({ journalNo: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>发表时间:</span>
                <DatePicker
                  locale={locale}
                  style={{ width: "99%", marginLeft: 0, marginRight: "18px" }}
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  value={moment(this.state.publishedTime, "YYYY-MM-DD")}
                  onChange={(e) =>
                    this.setState({ publishedTime: e.format("YYYY-MM-DD") })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>作者人数:</span>
                <Select
                  showSearch
                  style={{ width: "100%", margin: "4px 12px 0 12px" }}
                  placeholder="作者人数"
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
                <span>所属部门:</span>
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
                <span>期刊级别:</span>
                <select
                  className="xiaoqi_select"
                  value={this.state.journalLv}
                  onChange={(e) => this.setState({ journalLv: e.target.value })}
                >
                  <option value="国外检索SCI">国外检索SCI</option>
                  <option value="国外检索SSCI">国外检索SSCI</option>
                  <option value="国内核心期刊">国内核心期刊</option>
                  <option value="报纸学术论文">报纸学术论文</option>
                  <option value="其他科技刊物">其他科技刊物</option>
                </select>
              </div>
              <div className="form_item">
                <span>上传附件</span>:
                <input
                  type="file"
                  onChange={(value) => this.setState({ upload: value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>是否为项目成果:</span>
                <div className="radio_container">
                  <form>
                    <input
                      type="radio"
                      name="deliverables"
                      checked={this.state.deliverables ? true : false}
                      onChange={(e) => this.setState({ deliverables: true })}
                    />
                    是
                    <input
                      type="radio"
                      name="deliverables"
                      checked={!this.state.deliverables ? true : false}
                      onChange={(e) => this.setState({ deliverables: false })}
                    />
                    否
                  </form>
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

              <div className="xia" style={{ margin: "10px auto" }}>
                <table
                  border="1"
                  className="tbody"
                  style={{ width: "300px", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <td style={{ width: "30%" }}>排名</td>
                      <td style={{ width: "30%" }}>参研人</td>
                      <td style={{ width: "40%" }}>参研人部门</td>
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

export default Lunwen;
