import React, { Component } from 'react'
import './login.css'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Axios from 'axios'
import '../SocialServices/socialservices.css'
let url = window.api
class Change extends Component {
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

  cancel = () => {
    this.props.link('SocialServices')
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
            <div className="form_title">服务社会项目变更表</div>
            <div className="form_content socialServices">
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="top">
                    <td colSpan="3">项目名称</td>
                    <td colSpan="3">
                      <input type="text" />
                    </td>
                    <td colSpan="3">服务项目编号</td>
                    <td colSpan="3">
                      <input type="text" />
                    </td>
                  </tr>
                  <tr className="top reason">
                    <td colSpan="3">变更原因</td>
                    <td colSpan="9">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <div className="reason-right">
                        项目负责人（签字）：
                        <input type="text" className="sign" />
                      </div>
                      <div className="reason-right">
                        <input type="text" className="year" />年
                        <input type="text" />月
                        <input type="text" />日
                      </div>
                    </td>
                  </tr>
                  <tr className="top">
                    <td colSpan="3">变更内容</td>
                    <td colSpan="9">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </td>
                  </tr>
                  <tr className="top">
                    <td colSpan="3">项目负责人</td>
                    <td colSpan="3">
                      <input type="text" />
                    </td>
                    <td colSpan="3">联系电话</td>
                    <td colSpan="3">
                      <input type="text" />
                    </td>
                  </tr>
                  <tr className="top">
                    <td colSpan="4">项目负责人部门意见</td>
                    <td colSpan="4">产学研合作部意见</td>

                    <td colSpan="4">主管领导意见</td>
                  </tr>
                  <tr className="top qianzi">
                    <td colSpan="4">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <div className="qianzi-left">负责人：</div>
                      <div className="qianzi-right">
                        <input type="text" className="year" value="2020" />年
                        <input type="text" value="20" />月
                        <input type="text" />日
                      </div>
                    </td>

                    <td colSpan="4">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <div className="qianzi-left">负责人：</div>
                      <div className="qianzi-right">
                        <input type="text" className="year" value="2020" />年
                        <input type="text" value="20" />月
                        <input type="text" />日
                      </div>
                    </td>

                    <td colSpan="4">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <div className="qianzi-left">主管领导：</div>
                      <div className="qianzi-right">
                        <input type="text" className="year" value="2020" />年
                        <input type="text" value="20" />月
                        <input type="text" />日
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                1、此表一式两份，一份项目负责人留存，一份产学研合作部备案留存。
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

export default Change
