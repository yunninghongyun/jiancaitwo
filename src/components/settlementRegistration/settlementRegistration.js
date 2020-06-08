import React, { Component } from 'react'
import { Table, Divider, Button, Modal, Input } from 'antd'
// import './socialservices.css'
import './settlementRegistration.css'

class SettlementRegistration extends Component {
  constructor() {
    super()
    this.state = {
      data: '',
      visible: false,
    }
  }
  componentDidMount() {
    this.setState({
      data: [
        {
          textAlign: 'center',
          dataIndex: 1,
          no: 1,
          name: '123',
          department: '123',
          person: '123',
          participate: '123',
          work: '123',
          services: '123',
          train: '123',
          projectNo: '123',
          effect: '123',
          name9: '123',
          key: 'no',
          state: <a href="#">待申报</a>,
        },
      ],
    })
  }
  handleClick = () => {
    sessionStorage.setItem('SubjectRegId', 0)
    this.props.link('jiexiangofengmian')
  }
  handleSee = () => {
    sessionStorage.setItem('SubjectRegId', 0)
    this.props.link('jiexiangfengmian')
  }
  render() {
    return (
      <div>
        <div>
          <Button>查询</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleClick}>添加结项登记表</Button>
        </div>
        <table className="social-top">
          <thead className="little">
            <tr className="little-list">
              <td className="text">序号</td>
              <td className="text">项目编号</td>
              <td className="text">项目名称</td>
              <td className="text">项目负责人</td>
              <td className="text">所在部门（单位）</td>
              <td className="text">起始时间</td>
              <td className="text">审核</td>
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
                    <span>{item.number}</span>
                  </td>
                  <td className="text">
                    <span>{item.name}</span>
                  </td>
                  <td className="text">
                    <span>{item.source}</span>
                  </td>
                  <td className="text">
                    <span>{item.allocateOutlay}</span>
                  </td>
                  <td className="text">
                    <span>{item.level}</span>
                  </td>
                  <td className="text">
                    <span
                      onClick={this.handleSee.bind(this, item.id)}
                      style={{
                        cursor: 'pointer',
                        color: 'rgb(58,136,249)',
                        marginLeft: '5px',
                        width: '50px',
                      }}
                    >
                      查看
                    </span>
                    <span
                      // onClick={this.handleChange.bind(this, item.id)}
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
                      style={{
                        cursor: 'pointer',
                        color: 'red',
                        marginLeft: '5px',
                        width: '50px',
                      }}
                    >
                      审核
                    </span>
                    <span
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
      </div>
    )
  }
}

export default SettlementRegistration
