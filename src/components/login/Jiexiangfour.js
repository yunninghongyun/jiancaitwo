import React, { Component } from 'react'
import './login.css'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Axios from 'axios'
import '../SocialServices/socialservices.css'
let url = window.api
class Jiexiangfour extends Component {
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
            <div className="form_title">主要完成人情况</div>
            <div className="form_content socialServices jiexiangfour">
              <table>
                <tbody>
                  <tr className="first">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="top">
                    <td colSpan="2">
                      <span className="num">
                        第<input type="text" />
                        完成人
                      </span>
                      <br />姓 名
                    </td>
                    <td colSpan="1">
                      <input type="text" />
                    </td>
                    <td colSpan="3">完成本项目工作量比例（%）</td>
                    <td colSpan="1">
                      <input type="text" />
                    </td>
                  </tr>
                  <tr className="top">
                    <td colSpan="2">所在单位（部门）</td>
                    <td colSpan="5">
                      <input type="text" />
                    </td>
                  </tr>
                  <tr className="top">
                    <td colSpan="2">现从事工作及专长</td>
                    <td colSpan="2">
                      <input type="text" />
                    </td>
                    <td colSpan="1">联系方式</td>
                    <td colSpan="2">
                      <input type="text" />
                    </td>
                  </tr>
                  <tr className="top four-down reason">
                    <td colSpan="1">主要贡献</td>
                    <td colSpan="6">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <div className="four-right">
                        <div>
                          本人签字：
                          <input type="text" />
                        </div>
                        <div>
                          <input type="text" className="year" />年
                          <input type="text" />月
                          <input type="text" />日
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>注：此页科根据完成人的数量增加</div>
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

export default Jiexiangfour
