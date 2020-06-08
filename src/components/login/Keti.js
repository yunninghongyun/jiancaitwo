import React, { Component } from 'react'
import './login.css'
import { Input, Button, DatePicker, Alert, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Axios from 'axios'
let url = window.api
class Keti extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorynum: [],
      personnels: [],
      number1: 99,
      id: 0,
      userId: 0,
      number: '',
      name: '',
      source: '河北省科技厅',
      department: '材料工程系',
      director: '',
      directorDp: '',
      approvalTime: new Date(),
      allocateOutlay: '',
      matchedOutlay: '',
      points: true,
      peopleNum: 0,
      plan: true,
      level: '国家级',
      direction: '横向',
      participant: '',
      end: true,
      endTime: new Date(),
      conversion: true,

      createTime: '',
      creator: '',
      deleted: true,
      updateTime: '',
      updater: '',
    }
  }
  componentDidMount() {
    let id = sessionStorage.getItem('SubjectRegId')
    console.log(id)

    if (id && id > 0) {
      Axios.get(`${url}/SubjectReg/get?id=${id}`)
        .then((res) => {
          console.log(res.data.personnels.length)
          if (res.data && res.data.id) {
            this.setState({
              id: res.data.id,
              number: res.data.number,
              name: res.data.name,
              source: res.data.source,
              department: res.data.department,
              director: res.data.director,
              directorDp: res.data.directorDp,
              participant: res.data.participant,
              approvalTime:
                res.data.approvalTime != null &&
                res.data.approvalTime.length > 10
                  ? res.data.approvalTime.substring(0, 10)
                  : '2020-01-01',
              allocateOutlay: res.data.allocateOutlay,
              matchedOutlay: res.data.matchedOutlay,
              points: res.data.points,
              plan: res.data.plan,
              level: res.data.level,
              direction: res.data.direction,
              end: res.data.end,
              endTime:
                res.data.endTime != null && res.data.endTime.length > 10
                  ? res.data.endTime.substring(0, 10)
                  : '2020-01-01',
              conversion: res.data.conversion,
              peopleNum: res.data.personnels.length,
              personnels: res.data.personnels,
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
    let personnels = []
    let choice = false
    let cou = document.querySelectorAll('input')
    console.log(cou.length)
    for (let i = 0; i < cou.length; i++) {
      // if (cou[i].value == null || cou[i].value == "") {
      if (i > 15 && (i - 15) % 3 == 1) {
        let data = {
          num: cou[i].value, //排名
          name: cou[i + 1].value, //名字
          department: cou[i + 2].value, //部门
        }
        if (data.num != '' && data.name != '' && data.department != '') {
          personnels.push(data)
        }
        console.log(personnels)
        // }
      }
    }
    let data = {
      id: this.state.id,
      number: this.state.number,
      name: this.state.name,
      source: this.state.source,
      department: this.state.department,
      director: this.state.director,
      directorDp: this.state.directorDp,
      approvalTime: this.state.approvalTime,
      allocateOutlay: this.state.allocateOutlay,
      // participant: this.state.participant,
      matchedOutlay: this.state.matchedOutlay,
      points: this.state.points,
      plan: this.state.plan,
      level: this.state.level,
      direction: this.state.direction,
      end: this.state.end,
      endTime: this.state.endTime,
      conversion: this.state.conversion,
      personnels: personnels,
    }
    console.log(data)
    if (this.state.id > 0) {
      Axios.post(`${url}/SubjectReg/update`, data)
        .then((res) => {
          console.log(res.data)
          if (res.data && res.data.id > 0) {
            alert('修改成功！')
            sessionStorage.setItem('SubjectRegId', 0)
            this.props.link('Subject')
          }
        })
        .catch((err) => console.log(err))
    } else {
      Axios.post(`${url}/SubjectReg/add`, data)
        .then((res) => {
          console.log(res.data)
          if (res.data && res.data.id && res.data.id > 0) {
            alert('提交成功！')
            this.props.link('Subject')
          } else {
            alert('提交失败')
          }
        })
        .catch((err) => console.log(err))
    }

    // }
  }
  cancel = () => {
    this.props.link('Subject')
  }
  handleChange = (value) => {
    let c = []
    if (value > this.state.personnels.length) {
      for (let i = 0; i < value - this.state.personnels.length; i++) {
        c.push(
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        )
      }
    }
    this.setState({
      categorynum: c,
    })
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
            <div className="form_title">课题登记</div>
            <div className="form_content">
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>编号:</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={this.state.number}
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>名称:</span>
                <input
                  type="text"
                  defaultValue={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>课题来源:</span>
                <select
                  className="xiaoqi_select"
                  value={this.state.source}
                  onChange={(e) => this.setState({ source: e.target.value })}
                >
                  <option value="河北省科技厅">河北省科技厅</option>
                  <option value="河北省社科基金">河北省社科基金</option>
                  <option value="河北省教育厅">河北省教育厅</option>
                  <option value="河北省社科联">河北省社科联</option>
                  <option value="秦皇岛市科技局">秦皇岛市科技局</option>
                  <option value="秦皇岛市社科联">秦皇岛市社科联</option>
                  <option value="学院">学院</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>负责人所属部门:</span>
                <select
                  className="xiaoqi_select"
                  value={this.state.department}
                  onChange={(e) =>
                    this.setState({ department: e.target.value })
                  }
                >
                  <option value="材料工程系">材料工程系</option>
                  <option value="建筑工程系">建筑工程系</option>
                  <option value="机电工程系">机电工程系</option>
                  <option value="信息工程系">信息工程系</option>
                  <option value="财经管理系">财经管理系</option>
                  <option value="现代服务管理系">现代服务管理系</option>
                  <option value="艺术设计系">艺术设计系</option>
                  <option value="体育教学部">体育教学部</option>
                  <option value="基础部">基础部</option>
                  <option value="思想政治理论课教育部">
                    思想政治理论课教育部
                  </option>
                  <option value="行政">行政</option>
                  <option value="外单位">外单位</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>负责人:</span>
                <input
                  type="text"
                  defaultValue={this.state.director}
                  onChange={(e) => this.setState({ director: e.target.value })}
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>参研人人数:</span>
                <Select
                  showSearch
                  style={{ width: '100%', margin: '4px 12px 0 12px' }}
                  placeholder="参研人人数"
                  optionFilterProp="children"
                  className="numoftype"
                  onChange={this.handleChange}
                  Value={this.state.peopleNum}
                >
                  {sel}
                </Select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>立项时间:</span>
                <DatePicker
                  locale={locale}
                  style={{ width: '99%', marginLeft: 0, marginRight: '18px' }}
                  placeholder="请选择日期"
                  format="YYYY-MM-DD"
                  value={moment(this.state.approvalTime, 'YYYY-MM-DD')}
                  onChange={(e) =>
                    this.setState({ approvalTime: e.format('YYYY-MM-DD') })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>下拨经费:</span>
                <input
                  type="text"
                  defaultValue={this.state.allocateOutlay}
                  onChange={(e) =>
                    this.setState({ allocateOutlay: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>配套经费:</span>
                <input
                  type="text"
                  defaultValue={this.state.matchedOutlay}
                  onChange={(e) =>
                    this.setState({ matchedOutlay: e.target.value })
                  }
                />
              </div>
              <div className="form_item">
                <span>课题级别:</span>
                <select
                  className="xiaoqi_select"
                  value={this.state.level}
                  onChange={(e) => this.setState({ level: e.target.value })}
                >
                  <option value="国家级">国家级</option>
                  <option value="省级">省级</option>
                  <option value="市厅级">市厅级</option>
                  <option value="院级">院级</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>是否重点:</span>
                <div className="radio_container">
                  <form>
                    <input
                      type="radio"
                      name="points"
                      checked={this.state.points ? true : false}
                      onChange={(e) => this.setState({ points: true })}
                    />
                    是
                    <input
                      type="radio"
                      name="points"
                      checked={!this.state.points ? true : false}
                      onChange={(e) => this.setState({ points: false })}
                    />
                    否
                  </form>
                </div>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>是否规划:</span>
                <div className="radio_container">
                  <form>
                    <input
                      type="radio"
                      name="plan"
                      checked={this.state.plan ? true : false}
                      onChange={(e) => this.setState({ plan: true })}
                    />
                    是
                    <input
                      type="radio"
                      name="plan"
                      checked={!this.state.plan ? true : false}
                      onChange={(e) => this.setState({ plan: false })}
                    />
                    否
                  </form>
                </div>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>横/纵向:</span>
                <select
                  className="xiaoqi_select"
                  value={this.state.direction}
                  onChange={(e) => this.setState({ direction: e.target.value })}
                >
                  <option value="横向">横向</option>
                  <option value="纵向">纵向</option>
                </select>
              </div>
              <div className="form_item">
                <div className="arrow_right">*</div>
                <span>是否结题:</span>
                <div className="radio_container">
                  <form>
                    <input
                      type="radio"
                      name="end"
                      checked={this.state.end ? true : false}
                      onChange={(e) => this.setState({ end: true })}
                    />
                    是
                    <input
                      type="radio"
                      name="end"
                      checked={!this.state.end ? true : false}
                      onChange={(e) => this.setState({ end: false })}
                    />
                    否
                  </form>
                </div>
              </div>
              {this.state.end ? (
                <div style={{ width: '100%', display: 'flex' }}>
                  {' '}
                  <div className="form_item">
                    <span>结题时间:</span>
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
                  <div className="form_item">
                    <div className="arrow_right">*</div>
                    <span>是否转化:</span>
                    <div className="radio_container">
                      <form>
                        <input
                          type="radio"
                          name="conversion"
                          checked={this.state.conversion ? true : false}
                          onChange={(e) => this.setState({ conversion: true })}
                        />
                        是
                        <input
                          type="radio"
                          name="conversion"
                          checked={!this.state.conversion ? true : false}
                          onChange={(e) => this.setState({ conversion: false })}
                        />
                        否
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}

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

              <div className="xia" style={{ margin: '10px auto' }}>
                <table
                  border="1"
                  className="tbody"
                  style={{ width: '300px', textAlign: 'center' }}
                >
                  <thead>
                    <tr>
                      <td style={{ width: '30%' }}>排名</td>
                      <td style={{ width: '30%' }}>参研人</td>
                      <td style={{ width: '40%' }}>参研人部门</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.personnels.map((item, index) => (
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="ichoice-change"
                            defaultValue={item.num}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="ichoice-change"
                            defaultValue={item.name}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="ichoice-change"
                            defaultValue={item.department}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="canyanren">{this.state.categorynum}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*                
                <footer>
                    <div className="copyRight">
                    Copyright (c) 2019 Xiaoyu Video Communications ( Beijing ) Technology Co. Ltd
                    </div>
                </footer> */}
      </div>
    )
  }
}

export default Keti
