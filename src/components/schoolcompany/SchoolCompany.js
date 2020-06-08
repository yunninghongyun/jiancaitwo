import React, { Component } from "react";
import { Divider, Table, Button, Modal, Input } from "antd";
import "./schoolcompany.css";
import Axios from "axios";
let url = window.api;
class SchoolCompany extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",

      id: 1,
      userId: 0,
      cooperationName: "",
      unitName: "",
      unitAddress: "",
      corporationName: "",
      contactsName: "",
      unitPhone: "",
      unitMail: "",
      agreementSigning: "",
      date: "",
      category: "",
      department: "",
      role: "",
      agreementUpload: "",
      cooperationTerm: "",
      seal: "",
      data: [],
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    Axios.get(`${url}/CooperationCase/getList`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          this.setState({
            data: res.data,
          });
          console.log(this.state.data);
        } else {
          this.setState({
            data: [],
          });
        }
      })
      .catch((err) => console.log(err));
  }
  handleClick(id) {
    sessionStorage.setItem("CooperationCaseId", id);
    this.props.link("zhuzuo");
  }
  handleDel(id) {
    console.log(id);
    Axios.get(`${url}/CooperationCase/delete?id=${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data == 0) {
          alert("删除成功");
          this.getList();
        } else {
          alert("删除失败");
        }
      })
      .catch((err) => console.log(err));
  }
  onChange() {
    this.getList();
  }
  addClick = () => {
    sessionStorage.setItem("CooperationCaseId", 0);
    this.props.link("zhuzuo");
  };
  render() {
    return (
      <div>
        <div>
          <Button>查询</Button>&nbsp;&nbsp;&nbsp;
          <Button onClick={this.addClick.bind(this)}>新增案例</Button>
        </div>
        <table className="social-top">
          <thead className="little">
            <tr className="little-list">
              <td className="text">序号</td>
              <td className="text">合作项目名称</td>
              <td className="text">合作类别</td>
              <td className="text">企业单位名称</td>
              <td className="text">企业通讯地址</td>
              <td className="text">企业法人姓名</td>
              <td className="text">企业联系人姓名</td>
              <td className="text">企业联系电话</td>
              <td className="text">企业联系邮箱</td>
              <td className="text">协议签订时间</td>
              <td className="text">合作期限</td>
              <td style={{ marginLeft: "40px" }}>操作</td>
            </tr>
          </thead>
          {this.state.data.length == 0 || this.state.data == [] ? (
            <tbody className="little1">
              <tr>
                <td colSpan="14">
                  <div className="aaa">暂无数据</div>
                </td>
              </tr>
            </tbody>
          ) : (
            this.state.data.map((item, index) => (
              <tbody key={index} className="tbody">
                <tr className="abody">
                  <td className="text">
                    <span>{index + 1}</span>
                  </td>
                  <td className="text">
                    <span>{item.cooperationName}</span>
                  </td>
                  <td className="text">
                    <span>{item.category}</span>
                  </td>
                  <td className="text">
                    <span>{item.unitName}</span>
                  </td>
                  <td className="text">
                    <span>{item.unitAddress}</span>
                  </td>
                  <td className="text">
                    <span>{item.corporationName}</span>
                  </td>
                  <td className="text">
                    <span>{item.contactsName}</span>
                  </td>
                  <td className="text">
                    <span>{item.unitPhone}</span>
                  </td>
                  <td className="text">
                    <span>{item.unitMail}</span>
                  </td>

                  <td className="text">
                    <span>
                      {item.agreementSigning != null &&
                      item.agreementSigning.length > 10
                        ? item.agreementSigning.substring(0, 10)
                        : item.agreementSigning}
                    </span>
                  </td>
                  <td className="text">
                    <span>{item.cooperationTerm}</span>
                  </td>
                  <td className="text">
                    <span
                      onClick={this.handleClick.bind(this, item.id)}
                      style={{
                        cursor: "pointer",
                        color: "rgb(58,136,249)",
                        marginLeft: "5px",
                        width: "50px",
                      }}
                    >
                      修改
                    </span>
                    <span
                      onClick={this.handleDel.bind(this, item.id)}
                      style={{
                        cursor: "pointer",
                        color: "red",
                        marginLeft: "5px",
                        width: "50px",
                      }}
                    >
                      删除
                    </span>
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
        {/* <div className="qiye-bottom">
              <Pagination 
                current={this.state.pageNo}
                total={this.state.totalElements}
                pageSize={this.state.pageSize}
                onChange={this.onChange.bind(this)}
              />
            </div> */}
      </div>
    );
  }
}

export default SchoolCompany;
