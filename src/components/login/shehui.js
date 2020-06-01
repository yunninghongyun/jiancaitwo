import React, { Component } from 'react';
import './login.css'
import Img from '../image/images/word1.png'
import Img1 from '../image/images/school.jpg'
import { Input, Button, message, Alert } from 'antd'
import Dycrypto from '../DyCrypto'
import { log } from 'util';
import CheckBox from '../common/CheckBox';
class Shehui extends Component {
    constructor() {
        super()
        this.state = {
            name:"",
            zone:"",
            code:"",
            sum:"",
            yearsum:"",
            size:"",
            sizeflag:true,
            limit:true,
            peoplesum:"",
            year:"",
            money:""
        }
    }
    handleClick = () => {
        this.props.history.push('/main')
    }
    submit=()=>{
        // if(this.state.name==""||this.state.zone==""||this.state.code==""||this.state.sum==""
        //     ||this.state.yearsum==""||this.state.size==""||this.state.peoplesum==""||
        //     this.state.year==""||this.state.money==""){
        //         alert("必填项不能为空！")
        //     }else{ 
                alert("提交成功！")
                this.props.history.push('/')
            // }       
    }
    cancel=()=>{
        this.props.history.push('/')
    }
    render() {

        return (
            <div>
                <header className="header">
                    <h2>河北省建材职业教育集团管理与服务系统</h2>
                    {/* <img src={Img} alt="" /> */}
                    <Button onClick={this.cancel.bind(this)}>返回首页</Button>
                </header>
                <div className="register_container">
                    <div className='zhuceform'>
                        <div className="form_title">社会服务申请表</div>
                        <div className="form_content">
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>企业名称</span>:
                                <input type="text" name='name' onChange={(value)=>this.setState({name:value})} />
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>服务类别</span>:
                                <select className='xiaoqi_select'>
                                    <option>技术服务</option>
                                    <option>培训</option>
                                    <option>技能鉴定</option>
                                    <option>其他</option>
                                </select>
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>服务项目</span>:
                                <input type="text" onChange={(value)=>this.setState({code:value})} />
                                
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>联系人</span>:
                                <input type="text" onChange={(value)=>this.setState({sum:value})} />
                            
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>联系电话</span>:
                                <input type="text" onChange={(value)=>this.setState({yearsum:value})} />
                             
                            </div>
                            
                            <div className="form_item" style={{width:"100%",height:"250px",justifyContent:"flex-start",flexDirection:"column",alignItems:"flex-start"}}>
                                <span style={{width:"130px"}}>服务内容简介:</span>
                                <textarea style={{width:"100%",height:"100%"}}></textarea>
                            </div>

   
                    <div className="btn_box">
                    <div className="btn_container">
                        <Button style={{'width':'60px','height':'30px','backgroundColor':'rgb(228, 111, 3)','fontWeight':600}} onClick={this.submit.bind(this)}>提交</Button>
                        <Button style={{'width':'60px','height':'30px','backgroundColor':'rgb(20, 187, 100)','fontWeight':600}} onClick={this.cancel.bind(this)}>取消</Button>
                      </div>
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
        );
    }
}

export default Shehui;