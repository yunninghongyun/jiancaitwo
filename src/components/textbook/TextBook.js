import React, { Component } from "react";
import { Button, Pagination, Input } from "antd";
import Axios from "axios";
let url = window.api;
class TextBook extends Component {
  constructor(prpos) {
    super(prpos);
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
      data: [],
      jiaocai: [],
      pageNo: 10,
      totalElements: 1,
      pageSize: 1,
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    Axios.get(`${url}/WritingReg/getList`)
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
    sessionStorage.setItem("WritingRegId", id);
    this.props.link("zhuzuo");
  }
  handleDel(id) {
    console.log(id);
    Axios.get(`${url}/WritingReg/delete?id=${id}`)
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
    sessionStorage.setItem("WritingRegId", 0);
    this.props.link("zhuzuo");
  };
  render() {
    return (
      <div>
        <div>
          <div className="form_item">
            <Button>查询</Button>&nbsp;&nbsp;&nbsp;
            <Button onClick={this.addClick.bind(this)}>新增案例</Button>
            <div className="radio_container">
              <form style={{ marginTop: "4px" }}>
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
                  onChange={(e) => this.setState({ writingOrTextbook: false })}
                />
                教材
              </form>
            </div>
          </div>
        </div>
        {this.state.writingOrTextbook == true ? (
          <table className="social-top">
            <thead className="little">
              <tr className="little-list">
                <td className="text">序号</td>
                <td className="text">著作名称</td>
                <td className="text">出版单位</td>
                <td className="text">出版时间</td>
                <td className="text">著者</td>
                <td className="text">教材类别</td>
                <td className="text">上传附件</td>
                <td className="text">是否为项目成果</td>
                <td className="text">所属部门</td>
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
                      <span>{item.publisher}</span>
                    </td>
                    <td className="text">
                      <span>
                        {item.publicationTime != null &&
                        item.publicationTime.length > 10
                          ? item.publicationTime.substring(0, 10)
                          : item.publicationTime}
                      </span>
                    </td>
                    <td className="text">
                      <span>{item.author}</span>
                    </td>
                    <td className="text">
                      <span>
                        {item.category == "教育部规划教材"
                          ? "教育部规划教材"
                          : item.category == "非规划教材"
                          ? "非规划教材"
                          : "校本"}
                      </span>
                    </td>
                    <td className="text">
                      <span>{item.upload}</span>
                    </td>
                    <td className="text">
                      <span>{item.deliverables ? "是" : "否"}</span>
                    </td>
                    <td className="text">
                      <span>{item.department}</span>
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
        ) : (
          <table className="social-top">
            <thead className="little">
              <tr className="little-list">
                <td className="text">序号</td>
                <td className="text">著作名称</td>
                <td className="text">出版单位</td>
                <td className="text">出版时间</td>
                <td className="text">著者</td>
                <td className="text">教材类别</td>
                <td className="text">上传附件</td>
                <td className="text">是否为项目成果</td>
                <td className="text">所属部门</td>
                <td style={{ marginLeft: "40px" }}>操作</td>
              </tr>
            </thead>
            {this.state.jiaocai.length == 0 || this.state.jiaocai == [] ? (
              <tbody className="little1">
                <tr>
                  <td colSpan="14">
                    <div className="aaa">暂无数据</div>
                  </td>
                </tr>
              </tbody>
            ) : (
              this.state.jiaocai.map((item, index) => (
                <tbody key={index} className="tbody">
                  <tr className="abody">
                    <td className="text">
                      <span>{index + 1}</span>
                    </td>
                    <td className="text">
                      <span>{item.name}</span>
                    </td>
                    <td className="text">
                      <span>{item.publisher}</span>
                    </td>
                    <td className="text">
                      <span>
                        {item.publicationTime != null &&
                        item.publicationTime.length > 10
                          ? item.publicationTime.substring(0, 10)
                          : item.publicationTime}
                      </span>
                    </td>
                    <td className="text">
                      <span>{item.author}</span>
                    </td>
                    <td className="text">
                      <span>
                        {item.category == "教育部规划教材"
                          ? "教育部规划教材"
                          : item.category == "非规划教材"
                          ? "非规划教材"
                          : "校本"}
                      </span>
                    </td>
                    <td className="text">
                      <span>{item.upload}</span>
                    </td>
                    <td className="text">
                      <span>{item.deliverables ? "是" : "否"}</span>
                    </td>
                    <td className="text">
                      <span>{item.department}</span>
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
        )}
        <div className="qiye-bottom">
          <Pagination
            current={this.state.pageNo}
            total={this.state.totalElements}
            pageSize={this.state.pageSize}
            onChange={this.onChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default TextBook;
