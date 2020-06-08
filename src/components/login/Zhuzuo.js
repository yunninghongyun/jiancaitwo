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
      publisher: "",
      publicationTime: new Date(),
      author: "",
      category: "教育部规划教材",
      upload: "",
      deliverables: true,
      department: "材料工程系",
      writingOrTextbook: true,
      downUrl: "",
      isbn: "",
      participantSum: "",
      approval: true,

      name1: "",
      category1: "教育部规划教材",
      publisher1: "",
      isbn1: "",
      writers1: "",
      upload1: "",
      publicationTime1: new Date(),
      deliverables1: true,
      approval1: true,
      department1: "材料工程系",
      downUrl1: "",
      participantSum1: "",

      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",
    };
  }
  componentDidMount() {
    let id = sessionStorage.getItem("WritingRegId");
    console.log(id);

    if (id && id > 0) {
      Axios.get(`${url}/WritingReg/get?id=${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id) {
            if (res.data.writingOrTextbook == true) {
              this.setState({
                id: res.data.id,
                name: res.data.name,
                publisher: res.data.publisher,
                inventor: res.data.inventor,
                patentee: res.data.patentee,
                department: res.data.department,
                publicationTime:
                  res.data.publicationTime != null &&
                  res.data.publicationTime.length > 10
                    ? res.data.publicationTime.substring(0, 10)
                    : "2020-01-01",
                conversion: res.data.conversion,
                peopleNum: res.data.personnels.length,
                personnels: res.data.personnels,
              });
            } else {
              this.setState({
                id: res.data.id,
                name1: res.data.name,
                publisher1: res.data.publisher,
                inventor1: res.data.inventor,
                patente1e: res.data.patentee,
                department1: res.data.department,
                publicationTime1:
                  res.data.publicationTime != null &&
                  res.data.publicationTime.length > 10
                    ? res.data.publicationTime.substring(0, 10)
                    : "2020-01-01",
                conversion1: res.data.conversion,
                peopleNum1: res.data.personnels.length,
                personnels1: res.data.personnels,
              });
            }
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
      publisher: this.state.publisher,
      inventor: this.state.inventor,
      patentee: this.state.patentee,
      department: this.state.department,
      publicationTime: this.state.publicationTime,
      conversion: this.state.conversion,
      personnels: personnels,
      category: this.state.category,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/WritingReg/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            sessionStorage.setItem("WritingRegId", 0);
            this.props.link("TextBook");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/WritingReg/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("TextBook");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }

    // }
  };
  submitJ = () => {
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
      name: this.state.name,
      publisher: this.state.publisher,
      inventor: this.state.inventor,
      patentee: this.state.patentee,
      department: this.state.department,
      publicationTime: this.state.publicationTime,
      conversion: this.state.conversion,
      personnels: personnels,
      category: this.state.category,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/WritingReg/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            sessionStorage.setItem("WritingRegId", 0);
            this.props.link("TextBook");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/WritingReg/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("TextBook");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }

    // }
  };
  cancel = () => {
    this.props.link("TextBook");
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
            <div className="form_title">著作/教材登记</div>
            <div className="form_item">
              <div className="arrow_right">*</div>
              <span>著作/教材:</span>
              <div className="radio_container">
                <form>
                  <input
                    type="radio"
                    name="conversion"
                    checked={this.state.writingOrTextbook ? true : false}
                    onChange={(e) => this.setState({ writingOrTextbook: true })}
                  />
                  著作
                  <input
                    type="radio"
                    name="conversion"
                    checked={!this.state.writingOrTextbook ? true : false}
                    onChange={(e) =>
                      this.setState({ writingOrTextbook: false })
                    }
                  />
                  教材
                </form>
              </div>
            </div>
            {this.state.writingOrTextbook ? (
              <div className="zhuzuo">
                <div className="form_content">
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>著作名称</span>:
                    <input
                      type="text"
                      defaultValue={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>出版单位</span>:
                    <input
                      type="text"
                      defaultValue={this.state.publisher}
                      onChange={(e) =>
                        this.setState({ publisher: e.target.value })
                      }
                    />
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>出版时间</span>:
                    <DatePicker
                      style={{
                        width: "99%",
                        marginLeft: 0,
                        marginRight: "18px",
                      }}
                      placeholder="请选择日期"
                      value={moment(this.state.publicationTime)}
                      onChange={(e) => {
                        this.setState({
                          publicationTime: e.format("YYYY-MM-DD"),
                        });
                      }}
                    />
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>著者人数:</span>
                    <Select
                      showSearch
                      style={{ width: "100%", margin: "4px 12px 0 12px" }}
                      placeholder="著者人数"
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
                    <span>教材类别</span>:
                    <select
                      className="xiaoqi_select"
                      value={this.state.category}
                      onChange={(e) =>
                        this.setState({ category: e.target.value })
                      }
                    >
                      <option value="教育部规划教材">教育部规划教材</option>
                      <option value="非规划教材">非规划教材</option>
                      <option value="校本">校本</option>
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
                          name="conversion"
                          checked={this.state.deliverables ? true : false}
                          onChange={(e) =>
                            this.setState({ deliverables: true })
                          }
                        />
                        是
                        <input
                          type="radio"
                          name="conversion"
                          checked={!this.state.deliverables ? true : false}
                          onChange={(e) =>
                            this.setState({ deliverables: false })
                          }
                        />
                        否
                      </form>
                    </div>
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
                      <tbody className="canyanren">
                        {this.state.categorynum}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="jiaocai">
                <div className="form_content">
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>教材名称</span>:
                    <input
                      type="text"
                      defaultValue={this.state.name1}
                      onChange={(e) => this.setState({ name1: e.target.value })}
                    />
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>教材类别</span>:
                    <select
                      className="xiaoqi_select"
                      value={this.state.category1}
                      onChange={(e) =>
                        this.setState({ category1: e.target.value })
                      }
                    >
                      <option value="教育部规划教材">教育部规划教材</option>
                      <option value="非规划教材">非规划教材</option>
                      <option value="校本">校本</option>
                    </select>
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>出版单位</span>:
                    <input
                      type="text"
                      defaultValue={this.state.publisher1}
                      onChange={(e) =>
                        this.setState({ publisher1: e.target.value })
                      }
                    />
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>教材ISBN号</span>:
                    <input
                      type="text"
                      defaultValue={this.state.isbn1}
                      onChange={(e) => this.setState({ isbn1: e.target.value })}
                    />
                  </div>

                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>出版时间</span>:
                    <DatePicker
                      style={{
                        width: "99%",
                        marginLeft: 0,
                        marginRight: "18px",
                      }}
                      placeholder="请选择日期"
                      value={moment(this.state.publicationTime1)}
                      onChange={(e) => {
                        this.setState({
                          publicationTime1: e.format("YYYY-MM-DD"),
                        });
                      }}
                    />
                  </div>
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>参编人员人数:</span>
                    <Select
                      showSearch
                      style={{ width: "100%", margin: "4px 12px 0 12px" }}
                      placeholder="参编人员人数"
                      optionFilterProp="children"
                      className="numoftype"
                      onChange={this.handleChange}
                      Value={this.state.peopleNum}
                    >
                      {sel}
                    </Select>
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
                          name="conversion"
                          checked={this.state.deliverables1 ? true : false}
                          onChange={(e) =>
                            this.setState({ deliverables1: true })
                          }
                        />
                        是
                        <input
                          type="radio"
                          name="conversion"
                          checked={!this.state.deliverables1 ? true : false}
                          onChange={(e) =>
                            this.setState({ deliverables1: false })
                          }
                        />
                        否
                      </form>
                    </div>
                  </div>

                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>负责人所属部门:</span>
                    <select
                      className="xiaoqi_select"
                      value={this.state.department1}
                      onChange={(e) =>
                        this.setState({ department1: e.target.value })
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
                  <div className="btn_box">
                    <div className="btn_container">
                      <Button
                        style={{
                          width: "60px",
                          height: "30px",
                          backgroundColor: "#1890ff",
                          color: "#fff",
                        }}
                        onClick={this.submitJ.bind(this)}
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
                      <tbody className="canyanren">
                        {this.state.categorynum}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
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
