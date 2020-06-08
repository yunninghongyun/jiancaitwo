import React, { Component } from 'react'
import './login.css'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Axios from 'axios'
import '../SocialServices/socialservices.css'
let url = window.api
class Jiexiangthree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      userId: 0,

      createTime: '',
      creator: '',
      deleted: true,
      updateTime: '',
      updater: '',
    }
  }
  componentDidMount() {}
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
  }
  cancel = () => {
    this.props.link('settlementRegistration')
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
    let sel = []
    for (let i = 1; i < this.state.number1; i++) {
      sel.push(<Select.Option value={i}>{i}</Select.Option>)
    }
    return (
      <div>
        <div className="register_container">
          <div className="zhuceform">
            <div className="form_title">服务成效与特色</div>
            <div className="form_content socialServices jiexiangthree">
              <table>
                <tbody>
                  <tr className="top">
                    <td>
                      <div>
                        <div className="three-title">（一）社会效益</div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                      </div>
                      <div>
                        <div className="three-title">（二）经济效益</div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                      </div>
                      <div>
                        <div className="three-title">（三）服务特色</div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default Jiexiangthree
