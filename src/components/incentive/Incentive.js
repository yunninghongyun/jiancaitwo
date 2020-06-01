import React, { Component } from "react";
import { Divider, Table, Button } from "antd";
import Axios from "axios";
let url = window.api;
class Incentive extends Component {
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
      awardName: "",
      resultName: "",
      approvalUnits: "",
      awardTime: new Date(),
      prize: "",
      awardLv: "",
      ranking: "",
      department: "",
      upload: "",

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
    Axios.get(`${url}/AwardsReg/getList`)
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
    sessionStorage.setItem("AwardsRegId", id);
    this.props.link("jiangli");
  }
  handleDel(id) {
    console.log(id);
    Axios.get(`${url}/AwardsReg/delete?id=${id}`)
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
    sessionStorage.setItem("AwardsRegId", 0);
    this.props.link("jiangli");
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
              <td className="text">奖励名称</td>
              <td className="text">成果名称</td>
              <td className="text">批准单位</td>
              <td className="text">获奖时间</td>
              <td className="text">奖项</td>
              <td className="text">奖励级别</td>
              <td className="text">排名</td>
              <td className="text">所属部门</td>
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
                    <span>{item.awardName}</span>
                  </td>
                  <td className="text">
                    <span>{item.resultName}</span>
                  </td>
                  <td className="text">
                    <span>{item.approvalUnits}</span>
                  </td>
                  <td className="text">
                    <span>
                      {item.awardTime != null && item.awardTime.length > 10
                        ? item.awardTime.substring(0, 10)
                        : item.awardTime}
                    </span>
                  </td>
                  <td className="text">
                    <span>{item.prize}</span>
                  </td>
                  <td className="text">
                    <span>{item.awardLv}</span>
                  </td>
                  <td className="text">
                    <span>{item.ranking}</span>
                  </td>
                  <td className="text">
                    <span>{item.department}</span>
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

export default Incentive;
