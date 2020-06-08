import React, { Component } from 'react'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Axios from 'axios'
import '../SocialServices/socialservices.css'
let url = window.api
class LetterCommitment extends Component {
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

  // cancel = () => {
  //   this.props.link('LetterCommitment')
  // }
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
              河北建材职业技术学院社会服务项目负责人承诺书
            </div>
            <div className="form_content commitment">
              <div className="commitment-word">
                <p>
                  本人认为有条件、有能力并自愿代表学院作为该项目的负责人，承诺如下：
                </p>
                <p>
                  1．本人将按照《河北建材职业技术学院社会服务项目管理办法》的要求实施项目。
                </p>

                <p>2．项目实施过程中，不侵犯他人知识产权及其他合法权益。</p>

                <p>
                  3．与校外签约方因履行合同产生争议时，本人及时向学院报告，共同协商解决。因本人的过错对学院的声誉、利益等造成损失的，本人愿意承担一切经济及法律责任。
                </p>

                <p>
                  4．若变更或终止项目合同(协议)内容，须征得学院同意。本人与项目委托方协商达成变更(或终止)项目合同(协议)的一致意见后，签订书面变更(或终止)协议，报学院备案。
                </p>

                <p>
                  5．项目实施过程中，本人无条件接受学院相关部门的检查、监督和指导。
                </p>
                <p>
                  6．该委托项目完成后，本人将经过项目委托方验收的结项报告交学院产学研合作部备案。
                </p>
              </div>
              <div className="commitment-text">
                项目负责人（签字）：
                <input />
              </div>
              <div className="commitment-time">
                <input type="text" className="year" />年
                <input type="text" />月
                <input type="text" />日
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
                    // onClick={this.cancel.bind(this)}
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

export default LetterCommitment
