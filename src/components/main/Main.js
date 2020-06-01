import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import SocialServices from "../SocialServices/SocialServices";
import Invivation from "../invitation/Invivation.js";
import SchoolCompany from "../schoolcompany/SchoolCompany";
import Subject from "../subject/Subject";
import Patent from "../patent/Patent";
import Paper from "../paper/Paper";
import TextBook from "../textbook/TextBook";
import Incentive from "../incentive/Incentive";
import Keti from "../login/Keti";
import Zhuanli from "../login/Zhuanli";
import Lunwen from "../login/lunwen";
import Jiangli from "../login/Jiangli";
import Zhuzuo from "../login/Zhuzuo";
import Xiaoqi from "../login/xiaoqi";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ["社会服务", "校企合作", "科研成果统计"],
      menuName: "社会服务",
      childrenName: "社会服务立表项,承诺书",
      showComponents: "SocialServices",
    };
  }
  link(e) {
    this.setState({
      showComponents: e,
    });
  }
  handleClick = (text) => {
    if (
      text == "社会服务立项表,承诺书" ||
      text == "邀请函,协议书或上级文件" ||
      text == "结项登记表" ||
      text == "佐证材料"
    ) {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[0],
      });
    } else if (text == "校企合作案例" || text == "优秀案例上传和下载") {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[1],
      });
    } else if (
      text == "课题登记" ||
      text == "论文登记" ||
      text == "专利登记" ||
      text == "著作/教材登记" ||
      text == "奖励登记"
    ) {
      this.setState({
        childrenName: text,
        menuName: this.state.menuList[2],
      });
    }
    if (text == "社会服务立项表,承诺书") {
      this.setState({
        showComponents: "SocialServices",
      });
    } else if (text == "邀请函,协议书或上级文件") {
      this.setState({
        showComponents: "invitation",
      });
    } else if (text == "校企合作案例") {
      this.setState({
        showComponents: "SchoolCompany",
      });
    } else if (text == "课题登记") {
      this.setState({
        showComponents: "Subject",
      });
    } else if (text == "专利登记") {
      this.setState({
        showComponents: "Patent",
      });
    } else if (text == "论文登记") {
      this.setState({
        showComponents: "Paper",
      });
    } else if (text == "著作/教材登记") {
      this.setState({
        showComponents: "TextBook",
      });
    } else if (text == "奖励登记") {
      this.setState({
        showComponents: "Incentive",
      });
    }
  };
  handleBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Layout>
          <Header
            className="header"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1 style={{ color: "white" }}>建材学院服务系统</h1>
            <a onClick={this.handleBack} href="#" style={{ fontSize: 16 }}>
              退出登录
            </a>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff", height: "90vh" }}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
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
                    className="socialServices"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".socialServices").innerText
                      );
                    }}
                    key="1"
                  >
                    社会服务立项表,承诺书
                  </Menu.Item>
                  <Menu.Item
                    className="invitation"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".invitation").innerText
                      );
                    }}
                    key="2"
                  >
                    邀请函,协议书或上级文件
                  </Menu.Item>
                  <Menu.Item
                    className="settlementRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".settlementRegistration")
                          .innerText
                      );
                    }}
                    key="3"
                  >
                    结项登记表
                  </Menu.Item>
                  <Menu.Item
                    className="evidenceMaterial"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".evidenceMaterial").innerText
                      );
                    }}
                    key="4"
                  >
                    佐证材料
                  </Menu.Item>
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
                        document.querySelector(".school").innerText
                      );
                    }}
                    key="5"
                  >
                    校企合作案例
                  </Menu.Item>
                  <Menu.Item
                    className="goodCase"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".goodCase").innerText
                      );
                    }}
                    key="6"
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
                        document.querySelector(".subjectRegistration").innerText
                      );
                    }}
                    key="9"
                  >
                    课题登记
                  </Menu.Item>

                  <Menu.Item
                    className="patentRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".patentRegistration").innerText
                      );
                    }}
                    key="10"
                  >
                    专利登记
                  </Menu.Item>
                  <Menu.Item
                    className="paperRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".paperRegistration").innerText
                      );
                    }}
                    key="11"
                  >
                    论文登记
                  </Menu.Item>
                  <Menu.Item
                    className="textbookRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".textbookRegistration")
                          .innerText
                      );
                    }}
                    key="12"
                  >
                    著作/教材登记
                  </Menu.Item>
                  <Menu.Item
                    className="incentiveRegistration"
                    onClick={() => {
                      this.handleClick(
                        document.querySelector(".incentiveRegistration")
                          .innerText
                      );
                    }}
                    key="13"
                  >
                    奖励登记
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>工作台</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.menuName}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.childrenName}</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.state.showComponents == "SocialServices" ? (
                  <SocialServices />
                ) : this.state.showComponents == "invitation" ? (
                  <Invivation />
                ) : this.state.showComponents == "SchoolCompany" ? (
                  <SchoolCompany link={this.link.bind(this)} />
                ) : this.state.showComponents == "Subject" ? (
                  <Subject link={this.link.bind(this)} />
                ) : this.state.showComponents == "Patent" ? (
                  <Patent link={this.link.bind(this)} />
                ) : this.state.showComponents == "TextBook" ? (
                  <TextBook link={this.link.bind(this)} />
                ) : this.state.showComponents == "Paper" ? (
                  <Paper link={this.link.bind(this)} />
                ) : this.state.showComponents == "Incentive" ? (
                  <Incentive link={this.link.bind(this)} />
                ) : this.state.showComponents == "keti" ? (
                  <Keti link={this.link.bind(this)} />
                ) : this.state.showComponents == "zhuanli" ? (
                  <Zhuanli link={this.link.bind(this)} />
                ) : this.state.showComponents == "lunwem" ? (
                  <Lunwen link={this.link.bind(this)} />
                ) : this.state.showComponents == "jiangli" ? (
                  <Jiangli link={this.link.bind(this)} />
                ) : this.state.showComponents == "zhuzuo" ? (
                  <Zhuzuo link={this.link.bind(this)} />
                ) : this.state.showComponents == "xiaoqi" ? (
                  <Xiaoqi link={this.link.bind(this)} />
                ) : (
                  ""
                )}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}

export default Main;
