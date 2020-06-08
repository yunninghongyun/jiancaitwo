import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import SocialServices from '../SocialServices/SocialServices'
import Invivation from '../invitation/Invivation.js'
import LetterCommitment from '../letterCommitment/letterCommitment'
import SettlementRegistration from '../settlementRegistration/settlementRegistration'
import EvidenceMaterial from '../evidenceMaterial/evidenceMaterial'
import SchoolCompany from '../schoolcompany/SchoolCompany'
import Subject from '../subject/Subject'
import Patent from '../patent/Patent'
import Paper from '../paper/Paper'
import TextBook from '../textbook/TextBook'
import Incentive from '../incentive/Incentive'
import Keti from '../login/Keti'
import Zhuanli from '../login/Zhuanli'
import Lunwen from '../login/lunwen'
import Jiangli from '../login/Jiangli'
import Zhuzuo from '../login/Zhuzuo'
import Lixiang from '../login/Lixiang'
import Jiexiang from '../login/Jiexiang'
import Project from '../login/Project'
import Change from '../login/Change'
import Commitment from '../login/Commitment'
import Jiexiangbiao from '../login/Jiexiangbiao'
import Jiexiangfengmian from '../login/jiexiangfengmian'
import Jiexiangone from '../login/Jiexiangone'
import Jiexiangtwo from '../login/Jiexiangtwo'
import Jiexiangthree from '../login/Jiexiangthree'
import Jiexiangfour from '../login/Jiexiangfour'
import Jiexiangfive from '../login/Jiexiangfive'
import Jiexiangsix from '../login/Jiexiangsix'
import Ceshi from '../ceshi/ceshi'
import ProjectList from '../Project/ProjectList'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: ['社会服务', '校企合作', '科研成果统计'],
      menuName: '社会服务',
      childrenName: '项目列表',
      showComponents: 'ProjectList',
      twoList: '',
      childrenName2: '',
    }
  }
  link(e) {
    this.setState({
      showComponents: e,
    })
  }
  handleClick = (text) => {
    if (text == '项目列表') {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[0],
      })
    } else if (
      text == '社会服务立项表' ||
      text == '承诺书' ||
      text == '邀请函,协议书或上级文件' ||
      text == '结项登记表' ||
      text == '佐证材料'
    ) {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[0],
        childrenName2: this.state.twoList,
      })
    } else if (text == '校企合作案例' || text == '优秀案例上传和下载') {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[1],
      })
    } else if (text == '校企合作案例' || text == '优秀案例上传和下载') {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[1],
      })
    } else if (
      text == '课题登记' ||
      text == '论文登记' ||
      text == '专利登记' ||
      text == '著作/教材登记' ||
      text == '奖励登记'
    ) {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[2],
      })
    }
    if (text == '社会服务立项表') {
      this.setState({
        showComponents: 'SocialServices',
      })
    } else if (text == '承诺书') {
      this.setState({
        showComponents: 'letterCommitment',
      })
    } else if (text == '邀请函,协议书或上级文件') {
      this.setState({
        showComponents: 'invitation',
      })
    } else if (text == '结项登记表') {
      this.setState({
        showComponents: 'settlementRegistration',
      })
    } else if (text == '佐证材料') {
      this.setState({
        showComponents: 'evidenceMaterial',
      })
    } else if (text == '校企合作案例') {
      this.setState({
        showComponents: 'SchoolCompany',
      })
    } else if (text == '课题登记') {
      this.setState({
        showComponents: 'Subject',
      })
    } else if (text == '专利登记') {
      this.setState({
        showComponents: 'Patent',
      })
    } else if (text == '论文登记') {
      this.setState({
        showComponents: 'Paper',
      })
    } else if (text == '著作/教材登记') {
      this.setState({
        showComponents: 'TextBook',
      })
    } else if (text == '奖励登记') {
      this.setState({
        showComponents: 'Incentive',
      })
    } else if (text == '测试') {
      this.setState({
        showComponents: 'Ceshi',
      })
    } else if (text == '项目列表') {
      this.setState({
        showComponents: 'ProjectList',
      })
    } else if (text == '封面') {
      this.setState({
        showComponents: 'jiexiangfengmian',
      })
    } else if (text == '服务项目内容简介') {
      this.setState({
        showComponents: 'jiexiangone',
      })
    } else if (text == '技术服务报告') {
      this.setState({
        showComponents: 'jiexiangtwo',
      })
    } else if (text == '服务成效与特色') {
      this.setState({
        showComponents: 'jiexiangthree',
      })
    } else if (text == '主要完成人员情况') {
      this.setState({
        showComponents: 'jiexiangfour',
      })
    } else if (text == '认定意见') {
      this.setState({
        showComponents: 'jiexiangfive',
      })
    } else if (text == '支撑材料目录') {
      this.setState({
        showComponents: 'jiexiangsix',
      })
    }
  }
  handleBack = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Layout>
          <Header
            className="header"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h1 style={{ color: 'white' }}>建材学院服务系统</h1>
            <a onClick={this.handleBack} href="#" style={{ fontSize: 16 }}>
              退出登录
            </a>
          </Header>
          <Layout>
            <Sider width={260} style={{ background: '#fff', height: '90vh' }}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <i
                        style={{ marginRight: 3 }}
                        className="iconfont icon-leishehuifuwux"
                      ></i>
                      社会服务
                    </span>
                  }
                >
                  <Menu.Item
                    className="ProjectList"
                    key="1"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.ProjectList').innerText
                      )
                    }}
                  >
                    项目列表
                  </Menu.Item>
                  <SubMenu
                    className="FillIn"
                    key="2"
                    title="填写项目文件"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.FillIn').innerText
                      )
                    }}
                  >
                    <Menu.Item
                      className="socialServices"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.socialServices').innerText
                        )
                      }}
                      key="21"
                    >
                      社会服务立项表
                    </Menu.Item>
                    <Menu.Item
                      className="letterCommitment"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.letterCommitment').innerText
                        )
                      }}
                      key="22"
                    >
                      承诺书
                    </Menu.Item>
                    <Menu.Item
                      className="invitation"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.invitation').innerText
                        )
                      }}
                      key="23"
                    >
                      邀请函,协议书或上级文件
                    </Menu.Item>
                    <SubMenu
                      className="settlementRegistration"
                      key="24"
                      title="结项登记表"
                    >
                      <Menu.Item
                        className="jiexiangfengmian"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangfengmian')
                              .innerText
                          )
                        }}
                        key="241"
                      >
                        封面
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangone"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangone').innerText
                          )
                        }}
                        key="242"
                      >
                        服务项目内容简介
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangtwo"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangtwo').innerText
                          )
                        }}
                        key="243"
                      >
                        技术服务报告
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangthree"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangthree').innerText
                          )
                        }}
                        key="244"
                      >
                        服务成效与特色
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangfour"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangfour').innerText
                          )
                        }}
                        key="245"
                      >
                        主要完成人员情况
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangfive"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangfive').innerText
                          )
                        }}
                        key="246"
                      >
                        认定意见
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangsix"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangsix').innerText
                          )
                        }}
                        key="247"
                      >
                        支撑材料目录
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item
                      className="evidenceMaterial"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.evidenceMaterial').innerText
                        )
                      }}
                      key="25"
                    >
                      佐证材料
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu className="Completed" key="3" title="已填写项目文件">
                    <Menu.Item
                      className="socialServices"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.socialServices').innerText
                        )
                      }}
                      key="31"
                    >
                      社会服务立项表
                    </Menu.Item>
                    <Menu.Item
                      className="letterCommitment"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.letterCommitment').innerText
                        )
                      }}
                      key="32"
                    >
                      承诺书
                    </Menu.Item>
                    <Menu.Item
                      className="invitation"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.invitation').innerText
                        )
                      }}
                      key="33"
                    >
                      邀请函,协议书或上级文件
                    </Menu.Item>
                    <SubMenu
                      className="settlementRegistration"
                      key="34"
                      title="结项登记表"
                    >
                      <Menu.Item
                        className="jiexiangfengmian"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangfengmian')
                              .innerText
                          )
                        }}
                        key="341"
                      >
                        封面
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangone"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangone').innerText
                          )
                        }}
                        key="342"
                      >
                        服务项目内容简介
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangtwo"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangtwo').innerText
                          )
                        }}
                        key="343"
                      >
                        技术服务报告
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangthree"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangthree').innerText
                          )
                        }}
                        key="344"
                      >
                        服务成效与特色
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangfour"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangfour').innerText
                          )
                        }}
                        key="345"
                      >
                        主要完成人员情况
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangfive"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangfive').innerText
                          )
                        }}
                        key="346"
                      >
                        认定意见
                      </Menu.Item>
                      <Menu.Item
                        className="jiexiangsix"
                        onClick={() => {
                          this.handleClick(
                            document.querySelector('.jiexiangsix').innerText
                          )
                        }}
                        key="347"
                      >
                        支撑材料目录
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item
                      className="evidenceMaterial"
                      onClick={() => {
                        this.handleClick(
                          document.querySelector('.evidenceMaterial').innerText
                        )
                      }}
                      key="35"
                    >
                      佐证材料
                    </Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <i
                        style={{ marginRight: 3, fontSize: 18 }}
                        className="iconfont icon-xiaoqihezuoshixijidi"
                      ></i>
                      校企合作
                    </span>
                  }
                >
                  <Menu.Item
                    className="school"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.school').innerText
                      )
                    }}
                    key="6"
                  >
                    校企合作案例
                  </Menu.Item>
                  <Menu.Item
                    className="goodCase"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.goodCase').innerText
                      )
                    }}
                    key="7"
                  >
                    优秀案例上传和下载
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <i
                        style={{ marginRight: 3 }}
                        className="iconfont icon-keyanchengguohuojiang"
                      ></i>
                      科研成果统计
                    </span>
                  }
                >
                  <Menu.Item
                    className="subjectRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.subjectRegistration').innerText
                      )
                    }}
                    key="9"
                  >
                    课题登记
                  </Menu.Item>

                  <Menu.Item
                    className="patentRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.patentRegistration').innerText
                      )
                    }}
                    key="10"
                  >
                    专利登记
                  </Menu.Item>
                  <Menu.Item
                    className="paperRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.paperRegistration').innerText
                      )
                    }}
                    key="11"
                  >
                    论文登记
                  </Menu.Item>
                  <Menu.Item
                    className="textbookRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.textbookRegistration')
                          .innerText
                      )
                    }}
                    key="12"
                  >
                    著作/教材登记
                  </Menu.Item>
                  <Menu.Item
                    className="incentiveRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector('.incentiveRegistration')
                          .innerText
                      )
                    }}
                    key="13"
                  >
                    奖励登记
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>工作台</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.menuName}</Breadcrumb.Item>
                {/* { this.state.showComponents ==} */}
                <Breadcrumb.Item>{this.state.childrenName2}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.childrenName}</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.state.showComponents == 'SocialServices' ? (
                  <SocialServices link={this.link.bind(this)} />
                ) : this.state.showComponents == 'letterCommitment' ? (
                  <LetterCommitment />
                ) : this.state.showComponents == 'invitation' ? (
                  <Invivation />
                ) : this.state.showComponents == 'settlementRegistration' ? (
                  <SettlementRegistration link={this.link.bind(this)} />
                ) : this.state.showComponents == 'evidenceMaterial' ? (
                  <EvidenceMaterial link={this.link.bind(this)} />
                ) : this.state.showComponents == 'SchoolCompany' ? (
                  <SchoolCompany link={this.link.bind(this)} />
                ) : this.state.showComponents == 'Subject' ? (
                  <Subject link={this.link.bind(this)} />
                ) : this.state.showComponents == 'Patent' ? (
                  <Patent link={this.link.bind(this)} />
                ) : this.state.showComponents == 'TextBook' ? (
                  <TextBook link={this.link.bind(this)} />
                ) : this.state.showComponents == 'Paper' ? (
                  <Paper link={this.link.bind(this)} />
                ) : this.state.showComponents == 'Incentive' ? (
                  <Incentive link={this.link.bind(this)} />
                ) : this.state.showComponents == 'keti' ? (
                  <Keti link={this.link.bind(this)} />
                ) : this.state.showComponents == 'zhuanli' ? (
                  <Zhuanli link={this.link.bind(this)} />
                ) : this.state.showComponents == 'lunwem' ? (
                  <Lunwen link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiangli' ? (
                  <Jiangli link={this.link.bind(this)} />
                ) : this.state.showComponents == 'zhuzuo' ? (
                  <Zhuzuo link={this.link.bind(this)} />
                ) : this.state.showComponents == 'lixiang' ? (
                  <Lixiang link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiang' ? (
                  <Jiexiang link={this.link.bind(this)} />
                ) : this.state.showComponents == 'project' ? (
                  <Project link={this.link.bind(this)} />
                ) : this.state.showComponents == 'change' ? (
                  <Change link={this.link.bind(this)} />
                ) : this.state.showComponents == 'commitment' ? (
                  <Commitment link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangbiao' ? (
                  <Jiexiangbiao link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangfengmian' ? (
                  <Jiexiangfengmian link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangone' ? (
                  <Jiexiangone link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangtwo' ? (
                  <Jiexiangtwo link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangthree' ? (
                  <Jiexiangthree link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangfour' ? (
                  <Jiexiangfour link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangfive' ? (
                  <Jiexiangfive link={this.link.bind(this)} />
                ) : this.state.showComponents == 'jiexiangsix' ? (
                  <Jiexiangsix link={this.link.bind(this)} />
                ) : this.state.showComponents == 'Ceshi' ? (
                  <Ceshi link={this.link.bind(this)} />
                ) : this.state.showComponents == 'ProjectList' ? (
                  <ProjectList link={this.link.bind(this)} />
                ) : (
                  ''
                )}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
    )
  }
}

export default Main
