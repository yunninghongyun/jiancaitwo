import React, { Component } from "react";
import "./xiaoqi.css";
import "./login.css";
import { Button, DatePicker, Upload, message } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import Axios from "axios";
let url = window.api;
class Xiaoqi extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",

      id: 0,
      userId: 1,
      cooperationName: "",
      unitName: "",
      unitAddress: "",
      corporationName: "",
      contactsName: "",
      unitPhone: "",
      unitMail: "",
      agreementSigning: new Date(),
      date: new Date(),
      category: "现代学徒制",
      department: "",
      role: "",
      agreementUpload: "",
      cooperationTerm: "",
      seal: "",
      data: [],
    };
  }
  componentDidMount() {
    let id = sessionStorage.getItem("CooperationCaseId");
    console.log(id);
    if (id && id > 0) {
      console.log("1111");
      Axios.get(`${url}/CooperationCase/get?id=${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              cooperationName: res.data.cooperationName,
              unitName: res.data.unitName,
              unitAddress: res.data.unitAddress,
              corporationName: res.data.corporationName,
              contactsName: res.data.contactsName,
              unitPhone: res.data.unitPhone,
              unitMail: res.data.unitMail,
              agreementSigning:
                res.data.agreementSigning != null &&
                res.data.agreementSigning.length > 10
                  ? res.data.agreementSigning.substring(0, 10)
                  : "2020-01-01",
              date:
                res.data.date != null && res.data.date.length > 10
                  ? res.data.date.substring(0, 10)
                  : "2020-01-01",

              category: res.data.category,
              department: res.data.department,
              agreementUpload: res.data.agreementUpload,
              cooperationTerm: res.data.cooperationTerm,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  submit = () => {
    // if(this.state.name==""||this.state.zone==""||this.state.code==""||this.state.sum==""
    //     ||this.state.yearsum==""||this.state.size==""||this.state.peoplesum==""||
    //     this.state.year==""||this.state.money==""){
    //         alert("必填项不能为空！")
    //     }else{
    let data = {
      id: this.state.id,
      cooperationName: this.state.cooperationName,
      unitName: this.state.unitName,
      unitAddress: this.state.unitAddress,
      corporationName: this.state.corporationName,
      contactsName: this.state.contactsName,
      unitPhone: this.state.unitPhone,
      unitMail: this.state.unitMail,
      agreementSigning: this.state.agreementSigning,
      date: this.state.date,
      category: this.state.category,
      department: this.state.department,
      agreementUpload: this.state.agreementUpload,
      cooperationTerm: this.state.cooperationTerm,
      userId: this.state.userId,
    };
    console.log(data);
    if (this.state.id > 0) {
      Axios.post(`${url}/CooperationCase/update`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id > 0) {
            alert("修改成功！");
            sessionStorage.setItem("CooperationCaseId", 0);
            this.props.link("SchoolCompany");
          }
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post(`${url}/CooperationCase/add`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data && res.data.id && res.data.id > 0) {
            alert("提交成功！");
            this.props.link("SchoolCompany");
          } else {
            alert("提交失败");
          }
        })
        .catch((err) => console.log(err));
    }
    // }
  };
  cancel = () => {
    this.props.link("SchoolCompany");
  };
  render() {
    const props = {
      name: "file",
      action: "http://47.92.195.192:9001/api/CooperationCase/upload",
      headers: {
        authorization: "authorization-text",
      },
      data: {
        // agreementUpload: this.state.cooperationName,
        Id: this.state.id,
        CooperationCase: this.state.cooperationName,
        // uploader: this.state.uploader,
        // userId: this.state.userId,
      },

      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} 上传成功`, 2);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} 上传失败`);
        }
      },
    };
    return (
      <div>
        <div className="register_container">
          <div className="zhuceform">
            <div className="form_title">校企合作项目填写</div>
            <div className="form_content">
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>合作项目名称</span>:
                <input
                  type="text"
                  defaultValue={this.state.cooperationName}
                  onChange={(e) =>
                    this.setState({ cooperationName: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>类别</span>:
                <select
                  className="xiaoqi_select"
                  defaultValue={this.state.category}
                  onChange={(e) => this.setState({ category: e.target.value })}
                >
                  <option value="现代学徒制">现代学徒制</option>
                  <option value="订单培养">订单培养</option>
                  <option value="共建实习基地">共建实习基地</option>
                  <option value="其他">其他</option>
                </select>
              </div>

              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>企业单位名称</span>:
                <input
                  type="text"
                  defaultValue={this.state.unitName}
                  onChange={(e) => this.setState({ unitName: e.target.value })}
                />
                {/* <span style={{width:"50px"}}>人</span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>企业通讯地址</span>:
                <input
                  type="text"
                  defaultValue={this.state.unitAddress}
                  onChange={(e) =>
                    this.setState({ unitAddress: e.target.value })
                  }
                />
                {/* <span style={{width:"50px"}}>元</span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>企业法人姓名</span>:
                <input
                  type="text"
                  defaultValue={this.state.corporationName}
                  onChange={(e) =>
                    this.setState({ corporationName: e.target.value })
                  }
                />
                {/* <span style={{width:"50px"}}></span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>企业联系人姓名</span>:
                <input
                  type="text"
                  defaultValue={this.state.contactsName}
                  onChange={(e) =>
                    this.setState({ contactsName: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>企业联系电话</span>:
                <input
                  type="text"
                  defaultValue={this.state.unitPhone}
                  onChange={(e) => this.setState({ unitPhone: e.target.value })}
                />
              </div>
              <div className="form_item">
                <span>企业联系邮箱</span>:
                <input
                  type="text"
                  defaultValue={this.state.unitMail}
                  onChange={(e) => this.setState({ unitMail: e.target.value })}
                />
                {/* <span style={{width:"50px"}}>人</span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>协议签订时间</span>:
                <DatePicker
                  locale={locale}
                  style={{ width: "99%", marginLeft: 0, marginRight: "18px" }}
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  value={moment(this.state.agreementSigning, "YYYY-MM-DD")}
                  onChange={(e) =>
                    this.setState({ agreementSigning: e.format("YYYY-MM-DD") })
                  }
                />
                {/* <span style={{width:"50px"}}></span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>合作期限</span>:
                <input
                  type="text"
                  defaultValue={this.state.cooperationTerm}
                  onChange={(e) =>
                    this.setState({ cooperationTerm: e.target.value })
                  }
                />
                {/* <span style={{width:"50px"}}></span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>日期</span>:
                <DatePicker
                  locale={locale}
                  style={{ width: "99%", marginLeft: 0, marginRight: "18px" }}
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  value={moment(this.state.date, "YYYY-MM-DD")}
                  onChange={(e) =>
                    this.setState({ date: e.format("YYYY-MM-DD") })
                  }
                />
                {/* <input type="text" onChange={(value)=>this.setState({year:value})} /> */}
                {/* <span style={{width:"50px"}}></span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>系部</span>:
                <input
                  type="text"
                  defaultValue={this.state.department}
                  onChange={(e) =>
                    this.setState({ department: e.target.value })
                  }
                />
                {/* <span style={{width:"50px"}}></span> */}
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>合作协议上传</span>:
                <Upload
                  className="updata"
                  {...props}
                  defaultFileList={this.state.CooperationCase}
                >
                  上传
                </Upload>
                {/* <input
                  type="file"
                  defaultValue={this.state.agreementUpload}
                  onChange={(e) =>
                    this.setState({ agreementUpload: e.target.value })
                  }
                /> */}
                {/* <span style={{width:"50px"}}></span> */}
              </div>

              <div className="btn_box">
                <div className="btn_container">
                  <Button
                    style={{
                      width: "60px",
                      height: "30px",
                      backgroundColor: "#1890ff",
                      color: "#fff",
                      fontWeight: 600,
                    }}
                    onClick={this.submit.bind(this)}
                  >
                    {this.state.id == 0 ? "提交" : "修改"}
                  </Button>
                  <Button
                    style={{
                      width: "60px",
                      height: "30px",
                      backgroundColor: "#000",
                      color: "#fff",
                      fontWeight: 600,
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

export default Xiaoqi;
