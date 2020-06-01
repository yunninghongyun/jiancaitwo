import React, { Component } from "react";
import { Divider, Button } from "antd";
import Axios from "axios";
let url = window.api;
class Paper extends Component {
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
      id: 1,
      userId: 0,
      title: "",
      journalName: "",
      organizer: "",
      journalNo: "",
      publishedTime: new Date(),
      author: "",
      department: "",
      journalLv: "",
      upload: "",
      deliverables: true,

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
    Axios.get(`${url}/PaperReg/getList`)
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
    sessionStorage.setItem("PaperRegId", id);
    this.props.link("lunwem");
  }
  handleDel(id) {
    console.log(id);
    Axios.get(`${url}/PaperReg/delete?id=${id}`)
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
    sessionStorage.setItem("PaperRegId", 0);
    this.props.link("lunwem");
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
              <td className="text">题目</td>
              <td className="text">期刊名称</td>
              <td className="text">主办单位</td>
              <td className="text">期刊号</td>
              <td className="text">发表时间</td>
              <td className="text">作者</td>
              <td className="text">所属部门</td>
              <td className="text">期刊级别</td>
              <td className="text">上传附件</td>
              <td className="text">是否为项目成果</td>
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
                    <span>{item.title}</span>
                  </td>
                  <td className="text">
                    <span>{item.journalName}</span>
                  </td>
                  <td className="text">
                    <span>{item.organizer}</span>
                  </td>
                  <td className="text">
                    <span>{item.journalNo}</span>
                  </td>
                  <td className="text">
                    <span>
                      {item.publishedTime != null &&
                      item.publishedTime.length > 10
                        ? item.publishedTime.substring(0, 10)
                        : item.publishedTime}
                    </span>
                  </td>
                  <td className="text">
                    <span>{item.author}</span>
                  </td>
                  <td className="text">
                    <span>{item.department}</span>
                  </td>
                  <td className="text">
                    <span>{item.journalLv}</span>
                  </td>
                  <td className="text">
                    <span>{item.upload}</span>
                  </td>
                  <td className="text">
                    <span>{item.deliverables ? "是" : "否"}</span>
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

export default Paper;
