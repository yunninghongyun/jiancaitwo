import React, { Component } from 'react'
import './login.css'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
// import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
// import Axios from 'axios'
import '../SocialServices/socialservices.css'
let url = window.api
class Jiexiangbiao extends Component {
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
  submit = () => {}
  cancel = () => {
    this.props.link('settlementRegistration')
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
            <div className="form_title">
              河北建材职业技术学院社会服务项目结项登记表
            </div>
            <div className="form_content jiexiang">
              <div className="form_item">
                {/* <div className="arrow_right">*</div> */}
                <span>项目编号:</span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
              </div>
              <div className="form_item">
                {/* <div className="arrow_right">*</div> */}
                <span>项目名称:</span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
              </div>
              <div className="form_item">
                {/* <div className="arrow_right">*</div> */}
                <span>项目负责人:</span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
              </div>
              <div className="form_item">
                {/* <div className="arrow_right">*</div> */}
                <span>所在部门（单位）:</span>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
              </div>
              <div className="form_item jiexiang-time">
                <span>起始时间:</span>
                <DatePicker
                  format="YYYY-MM-DD"
                  // locale={locale}
                  style={{
                    width: '99%',
                    marginLeft: 0,
                    marginRight: '18px',
                  }}
                  placeholder="请选择日期"
                  value={moment(this.state.endTime)}
                  onChange={(e) => {
                    this.setState({ endTime: e.format('YYYY-MM-DD') })
                  }}
                />
                至
                <DatePicker
                  format="YYYY-MM-DD"
                  // locale={locale}
                  style={{
                    width: '99%',
                    marginLeft: 0,
                    marginRight: '18px',
                  }}
                  placeholder="请选择日期"
                  value={moment(this.state.endTime)}
                  onChange={(e) => {
                    this.setState({ endTime: e.format('YYYY-MM-DD') })
                  }}
                />
              </div>

              {/* <div>
                <div className="form_item">
                  项目编号：
                  <input type="text" />
                </div>
                <div>
                  项目名称：
                  <input type="text" />
                </div>
                <div>
                  项目负责人：
                  <input type="text" />
                </div>
                <div>
                  所在部门（单位）：
                  <input type="text" />
                </div>
                <div>
                  起始时间：
                  <input type="text" />
                </div>
              </div> */}
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

export default Jiexiangbiao
