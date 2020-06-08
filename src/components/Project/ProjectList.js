import React, { Component } from 'react'
import { Table, Divider, Button, Modal, Input } from 'antd'
import Axios from 'axios'
let url = window.api
class ProjectList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorynum: [],
      personnels: [],
      peopleNum: 0,
      number1: 99,
      userId: 0,
      id: 1,
      data: [],
      projectName: '',
      serviceCategory: '',
      unitName: '',
      unitContacts: '',
      unitAdd: '',
      unitTelephone: '',
      projectLeader: '',
      leaderTelephone: '',
      projectParticipants: '',
      serviceContent: '',
      unitOpinion: '',
      departmentOpinion: '',
      departmentSign: '',
      unitYear: '',
      unitMonth: '',
      unitDay: '',
      personSign: '',
      departmentYear: '',
      departmentMonth: '',
      departmentDay: '',
      createTime: '',
      creator: '',
      deleted: true,
      updateTime: '',
      updater: '',
    }
  }
  componentDidMount() {
      Axios.get(`${url}/ApplicationForm/getList`)
        .then((res) => {
          console.log(res.data)
          if (res.data) {
            this.setState({
              data: res.data
            })
          }else {
            this.setState({
              data: [],
            });
          }
        })
        .catch((err) => console.log(err))
    
  }

  handleClick = (id) => {
    sessionStorage.setItem("ApplicationFormId", id);
    this.props.link('SocialServices')
  }
  handleAdd = () => {}
  handleChange = () => {}
  handleCommitment = () => {}
  handleCancle = () => {
    this.setState({
      visible: false,
    })
  }
  handleOk = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <div className="projectlist">
        <div>
          <Button>查询</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleAdd}>添加社会服务</Button>
        </div>
        <table className="social-top">
          <thead className="little">
            <tr className="little-list">
              <td className="text">序号</td>
              <td className="text">项目名称</td>
              <td className="text">部门</td>
              <td className="text">负责人</td>
              <td className="text">参与人</td>
              <td className="text">工作比例</td>
              <td className="text">服务学时</td>
              <td className="text">培训人数</td>
              <td className="text">项目编号</td>
              <td className="text">服务效果</td>
              <td className="text">佐证材料</td>
              <td style={{ marginLeft: '40px' }}>操作</td>
            </tr>
          </thead>
          {this.state.data.length == 0 || this.state.data == [] ? (
            <tbody className="little1">
              <tr>
                <td colSpan="12">
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
                    <span>{item.projectName}</span>
                  </td>
                  <td className="text">
                    <span>{item.name}</span>
                  </td>
                  <td className="text">
                    <span>{item.projectLeader}</span>
                  </td>
                  <td className="text">
                    <span>{item.projectParticipants}</span>
                  </td>
                  <td className="text">
                    <span></span>
                  </td>
                  <td className="text">
                    <span>{index + 1}</span>
                  </td>
                  <td className="text">
                    <span>{index + 1}</span>
                  </td>
                  <td className="text">
                    <span>{index + 1}</span>
                  </td>
                  <td className="text">
                    <span>{index + 1}</span>
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
                      查看
                    </span>
                    <span
                      onClick={this.handleChange.bind(this, item.id)}
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

export default ProjectList
