import React, { Component } from 'react'
import './login.css'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Axios from 'axios'
import '../SocialServices/socialservices.css'
let url = window.api
class Lixiang extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorynum: [],
      personnels: [],
      peopleNum: 0,
      number1: 99,
      userId: 0,
      id: 0,
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
    let id = sessionStorage.getItem('ApplicationFormId')
    console.log(id)

    if (id && id > 0) {
      Axios.get(`${url}/ApplicationForm/get?id=${id}`)
        .then((res) => {
          console.log(res.data)
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              category: res.data.category,
              projectName: res.data.projectName,
              serviceCategory: res.data.serviceCategory,
              unitName: res.data.unitName,
              unitContacts: res.data.unitContacts,
              unitAdd: res.data.unitAdd,
              unitTelephone: res.data.unitTelephone,
              projectLeader: res.data.projectLeader,
              leaderTelephone: res.data.leaderTelephone,
              projectParticipants: res.data.projectParticipants,
              serviceContent: res.data.serviceContent,
              unitOpinion: res.data.unitOpinion,
              departmentOpinion: res.data.departmentOpinion,
              departmentSign: res.data.departmentSign,
              unitYear: res.data.unitYear,
              unitMonth: res.data.unitMonth,
              unitDay: res.data.unitDay,
              personSign: res.data.personSign,
              departmentYear: res.data.departmentYear,
              departmentMonth: res.data.departmentMonth,
              departmentDay: res.data.departmentDay,
            })
          }
        })
        .catch((err) => console.log(err))
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
    // }

    let data = {
      id: this.state.id,
      category: this.state.category,
      projectName: this.state.projectName,
      serviceCategory: this.state.serviceCategory,
      unitName: this.state.unitName,
      unitContacts: this.state.unitContacts,
      unitAdd: this.state.unitAdd,
      unitTelephone: this.state.unitTelephone,
      projectLeader: this.state.projectLeader,
      leaderTelephone: this.state.leaderTelephone,
      projectParticipants: this.state.projectParticipants,
      serviceContent: this.state.serviceContent,
      unitOpinion: this.state.unitOpinion,
      departmentOpinion: this.state.departmentOpinion,
      departmentSign: this.state.departmentSign,
      unitYear: this.state.unitYear,
      unitMonth: this.state.unitMonth,
      unitDay: this.state.unitDay,
      personSign: this.state.personSign,
      departmentYear: this.state.departmentYear,
      departmentMonth: this.state.departmentMonth,
      departmentDay: this.state.departmentDay,
    }
    console.log(data)
    if (this.state.id > 0) {
      Axios.post(`${url}/ApplicationForm/update`, data)
        .then((res) => {
          console.log(res.data)
          if (res.data && res.data.id > 0) {
            alert('修改成功！')
            sessionStorage.setItem('ApplicationFormId', 0)
            this.props.link('SociaServices')
          }
        })
        .catch((err) => console.log(err))
    } else {
      Axios.post(`${url}/ApplicationForm/add`, data)
        .then((res) => {
          console.log(res.data)
          if (res.data && res.data.id && res.data.id > 0) {
            alert('提交成功！')
            this.props.link('ApplicationForm')
          } else {
            alert('提交失败')
          }
        })
        .catch((err) => console.log(err))
    }
  }
  cancel = () => {
    this.props.link('SocialServices')
  }
  handleChange = (value) => {
    // let c = []
    // if (value > this.state.personnels.length) {
    //   for (let i = 0; i < value - this.state.personnels.length; i++) {
    //     c.push(
    //       <tr>
    //         <td>
    //           <input type="text" />
    //         </td>
    //         <td>
    //           <input type="text" />
    //         </td>
    //         <td>
    //           <input type="text" />
    //         </td>
    //       </tr>
    //     )
    //   }
    // }
    // this.setState({
    //   categorynum: c,
    // })
  }
  render() {
    const dateFormat = 'YYYY-MM-DD'
    // let sel = []
    // for (let i = 1; i < this.state.number1; i++) {
    //   sel.push(<Select.Option value={i}>{i}</Select.Option>)
    // }
    return (
      <div>
        <div className="register_container">
          <div className="zhuceform">
            <div className="form_title">服务社会项目申请表</div>
            <div className="form_content socialServices">
              <table>
                <tbody>
                  <tr className="top">
                    <td>项目名称</td>
                    <td colSpan="2">
                      <input
                        type="text"
                        value={this.state.projectName}
                        onChange={(e) =>
                          this.setState({ projectName: e.target.value })
                        }
                      />
                    </td>
                    <td>服务类别</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.serviceCategory}
                        onChange={(e) =>
                          this.setState({ serviceCategory: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="top">
                    <td rowSpan="2">服务对象</td>
                    <td>单位名称</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.unitName}
                        onChange={(e) =>
                          this.setState({ unitName: e.target.value })
                        }
                      />
                    </td>
                    <td>联系人</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.unitContacts}
                        onChange={(e) =>
                          this.setState({ unitContacts: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="top">
                    <td>单位地址</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.unitAdd}
                        onChange={(e) =>
                          this.setState({ unitAdd: e.target.value })
                        }
                      />
                    </td>
                    <td>联系电话</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.unitTelephone}
                        onChange={(e) =>
                          this.setState({ unitTelephone: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="top">
                    <td>项目负责人</td>
                    <td colSpan="2">
                      <input
                        type="text"
                        value={this.state.projectLeader}
                        onChange={(e) =>
                          this.setState({ projectLeader: e.target.value })
                        }
                      />
                    </td>
                    <td>联系电话</td>
                    <td>
                      <input
                        type="text"
                        value={this.state.leaderTelephone}
                        onChange={(e) =>
                          this.setState({ leaderTelephone: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="top">
                    <td>项目参与人</td>
                    <td colSpan="4">
                      <input
                        type="text"
                        value={this.state.projectLeader}
                        onChange={(e) =>
                          this.setState({ projectLeader: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="top">
                    <td>服务内容简介</td>
                    <td colSpan="4">
                      <textarea
                        value={this.state.serviceContent}
                        onChange={(e) =>
                          this.setState({ serviceContent: e.target.value })
                        }
                      ></textarea>
                    </td>
                  </tr>

                  <tr className="down">
                    <td colSpan="3">
                      <div>项目负责人所在单位（部门）意见：</div>
                      <div>
                        <textarea
                          value={this.state.unitOpinion}
                          onChange={(e) =>
                            this.setState({ unitOpinion: e.target.value })
                          }
                        ></textarea>
                      </div>
                      <div>
                        部门领导（签章）
                        <input
                          type="text"
                          value={this.state.departmentSign}
                          onChange={(e) =>
                            this.setState({ departmentSign: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="year"
                          value={this.state.unitYear}
                          onChange={(e) =>
                            this.setState({ unitYear: e.target.value })
                          }
                        />
                        年
                        <input
                          type="text"
                          value={this.state.unitMonth}
                          onChange={(e) =>
                            this.setState({ unitMonth: e.target.value })
                          }
                        />
                        月
                        <input
                          type="text"
                          value={this.state.unitDay}
                          onChange={(e) =>
                            this.setState({ unitDay: e.target.value })
                          }
                        />
                        日
                      </div>
                    </td>
                    <td colSpan="2">
                      <div>产学研合作部门意见：</div>
                      <div>
                        <textarea
                          value={this.state.departmentOpinion}
                          onChange={(e) =>
                            this.setState({ departmentOpinion: e.target.value })
                          }
                        ></textarea>
                      </div>
                      <div>
                        负责人（签章）
                        <input
                          type="text"
                          value={this.state.personSign}
                          onChange={(e) =>
                            this.setState({ personSign: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="year"
                          value={this.state.departmentYear}
                          onChange={(e) =>
                            this.setState({ departmentYear: e.target.value })
                          }
                        />
                        年
                        <input
                          type="text"
                          value={this.state.departmentMonth}
                          onChange={(e) =>
                            this.setState({ departmentMonth: e.target.value })
                          }
                        />
                        月
                        <input
                          type="text"
                          value={this.state.departmentDay}
                          onChange={(e) =>
                            this.setState({ departmentDay: e.target.value })
                          }
                        />
                        日
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                备注：1.本表一式二份，学院产学研合作部存一份，项目负责人所在单位（部门）存一份；2.附合同（协议）或委托书文本；3.附实施方案
              </div>
              <div className="btn_box">
                <div className="btn_container">
                  <Button
                    style={{
                      width: '60px',
                      height: '30px',
                      backgroundColor: '#1890ff',
                      color: '#fff',
                    }}
                    onClick={this.submit.bind(this)}
                  >
                    {this.state.id == 0 ? '提交' : '修改'}
                  </Button>
                  <Button
                    style={{
                      width: '60px',
                      height: '30px',
                      color: '#fff',
                      backgroundColor: '#000',
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
      </div>
    )
  }
}

export default Lixiang
