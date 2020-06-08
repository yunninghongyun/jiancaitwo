import React, { Component } from 'react'
import { Button, Pagination, Input } from 'antd'
import './subject.css'
import Axios from 'axios'
let url = window.api
class Subject extends Component {
  constructor(prpos) {
    super(prpos)
    this.state = {
      id: 0,
      userId: 0,
      number: '',
      //   personnels: [],
      name: '',
      source: '',
      department: '',
      director: '',
      directorDp: '',
      approvalTime: '',
      allocateOutlay: '',
      matchedOutlay: '',
      points: true,
      plan: true,
      level: '',
      direction: '',
      end: true,
      endTime: '',
      conversion: true,
      data: [],
      totalElements: 100,
      pageSize: 10,
      pageNo: 1,
      createTime: '',
      creator: '',
      deleted: true,
      updateTime: '',
      updater: '',
    }
  }
  componentDidMount() {
    this.getList()
  }
  getList() {
    Axios.get(`${url}/SubjectReg/getList`)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          this.setState({
            data: res.data,
          })
          console.log(this.state.data)
        } else {
          this.setState({
            data: [],
          })
        }
      })
      .catch((err) => console.log(err))
  }
  handleClick(id) {
    sessionStorage.setItem('SubjectRegId', id)
    this.props.link('keti')
  }
  handleDel(id) {
    console.log(id)
    Axios.get(`${url}/SubjectReg/delete?id=${id}`)
      .then((res) => {
        console.log(res.data)
        if (res.data == 0) {
          alert('删除成功')
          this.getList()
        } else {
          alert('删除失败')
        }
      })
      .catch((err) => console.log(err))
  }
  onChange() {
    this.getList()
  }
  addClick = () => {
    sessionStorage.setItem('SubjectRegId', 0)
    this.props.link('keti')
  }
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
              <td className="text">编号</td>
              <td className="text">名称</td>
              <td className="text">课题来源</td>
              <td className="text">负责人所属部门</td>
              <td className="text">负责人</td>
              <td className="text">参研人</td>
              <td className="text">立项时间</td>
              <td className="text">下拨经费</td>
              <td className="text">配套经费</td>
              <td className="text">课题级别</td>
              <td style={{ marginLeft: '40px' }}>操作</td>
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
                    <span>{item.number}</span>
                  </td>
                  <td className="text">
                    <span>{item.name}</span>
                  </td>
                  <td className="text">
                    <span>{item.source}</span>
                  </td>
                  <td className="text">
                    <span>{item.department}</span>
                  </td>
                  <td className="text">
                    <span>{item.director}</span>
                  </td>
                  <td className="text">
                    <span>{item.personnels}</span>
                  </td>
                  <td className="text">
                    <span>
                      {item.approvalTime != null &&
                      item.approvalTime.length > 10
                        ? item.approvalTime.substring(0, 10)
                        : item.approvalTime}
                    </span>
                  </td>
                  <td className="text">
                    <span>{item.allocateOutlay}</span>
                  </td>
                  <td className="text">
                    <span>{item.matchedOutlay}</span>
                  </td>
                  <td className="text">
                    <span>{item.level}</span>
                  </td>
                  <td className="text">
                    <span
                      onClick={this.handleClick.bind(this, item.id)}
                      style={{
                        cursor: 'pointer',
                        color: 'rgb(58,136,249)',
                        marginLeft: '5px',
                        width: '50px',
                      }}
                    >
                      修改
                    </span>
                    <span
                      onClick={this.handleDel.bind(this, item.id)}
                      style={{
                        cursor: 'pointer',
                        color: 'red',
                        marginLeft: '5px',
                        width: '50px',
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
    )
  }
}

export default Subject
