import React, { Component } from "react";
import { Button, Pagination, Input } from "antd";
import Axios from "axios";
let url = window.api;
class Patent extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      id: 0,
      userId: 0,
      number: "",

      categorynum: [],
      // personnels: [],
      peopleNum: 0,

      userId: 0,
      id: 0,
      name: "",
      category: "",
      inventor: "",
      patentee: "",
      authorization: new Date(),
      department: "",
      conversion: true,
      data: [],
      totalElements: 100,
      pageSize: 10,
      pageNo: 1,
      createTime: "",
      creator: "",
      deleted: true,
      updateTime: "",
      updater: "",
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    Axios.get(`${url}/IssueReg/getList`)
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
    sessionStorage.setItem("IssueRegId", id);
    this.props.link("zhuanli");
  }
  handleDel(id) {
    console.log(id);
    Axios.get(`${url}/IssueReg/delete?id=${id}`)
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
    sessionStorage.setItem("IssueRegId", 0);
    this.props.link("zhuanli");
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
              <td className="text">名称</td>
              <td className="text">类别</td>
              <td className="text">发明人及所属部门</td>
              <td className="text">专利权人</td>
              <td className="text">授权公告日</td>
              <td className="text">是否转化</td>
              <td className="text">上传附件</td>
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
                    <span>{item.name}</span>
                  </td>
                  <td className="text">
                    <span>
                      {item.category == "发明专利"
                        ? "发明专利"
                        : item.category == "实用新型专利"
                        ? "实用新型专利"
                        : item.category == "外观设计专利"
                        ? "外观设计专利"
                        : "软件著作权"}
                    </span>
                  </td>
                  <td className="text">
                    <span>{item.personnels}</span>
                  </td>
                  <td className="text">
                    <span>
                      {item.patentee == "个人"
                        ? "个人"
                        : item.patentee == "河北建材职业技术学院"
                        ? "河北建材职业技术学院"
                        : "其他"}
                    </span>
                  </td>
                  <td className="text">
                    <span>
                      {item.authorization != null &&
                      item.authorization.length > 10
                        ? item.authorization.substring(0, 10)
                        : item.authorization}
                    </span>
                  </td>
                  <td className="text">
                    <span>{item.conversion ? "是" : "否"}</span>
                  </td>
                  <td className="text">
                    <span>{item.upload}</span>
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

export default Patent;
