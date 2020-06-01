import React, { Component } from 'react';
import './login.css'
import Img from '../image/images/word1.png'
import Img1 from '../image/images/school.jpg'
import { Input, Button, message, Alert } from 'antd'
import Dycrypto from '../DyCrypto'
import { log } from 'util';
import CheckBox from '../common/CheckBox';
class Zhaopin extends Component {
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
                        <div className="form_title">招聘信息填写</div>
                        <div className="form_content">
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>职位名称</span>:
                                <input type="text" name='name' onChange={(value)=>this.setState({name:value})} />
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>职位类别</span>:
                                <input type="text" onChange={(value)=>this.setState({zone:value})} />
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>招聘人数</span>:
                                <input type="text" onChange={(value)=>this.setState({code:value})} />
                                <span style={{width:"50px"}}>人</span>
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>期望月薪</span>:
                                <input type="text" onChange={(value)=>this.setState({sum:value})} />
                                <span style={{width:"50px"}}>元</span>
                            </div>
                            
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>学历要求</span>:
                                <input type="text" onChange={(value)=>this.setState({size:value})}  />
                            </div>
                            <div className="form_item">
                             {/* <div class="arrow_right">*</div> */}
                                <span>工作地址</span>:
                                <input type="text" onChange={(value)=>this.setState({size:value})}  />
                            </div>                            
                            <div className="form_item">
                                <span>联系方式</span>:
                                <input type="text" onChange={(value)=>this.setState({peoplesum:value})} />
                                {/* <span style={{width:"50px"}}>人</span> */}
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>联系电话</span>:
                                <input type="text" onChange={(value)=>this.setState({year:value})} />
                                {/* <span style={{width:"50px"}}></span> */}
                            </div>
                            <div className="form_item">
                                {/* <div class="arrow_right">*</div> */}
                                <span>邮箱地址</span>:
                                <input type="text" onChange={(value)=>this.setState({year:value})} />
                                {/* <span style={{width:"50px"}}></span> */}
                            </div>
                            <div className="form_item" >
                                {/* <div class="arrow_right">*</div> */}
                                <span>职位福利</span>:
                                {/* <Button >五险一金</Button><Button>包吃</Button>
                                <Button>包住</Button><Button>年底双薪</Button>
                                <Button>周末双休</Button><Button>交通补助</Button>
                                <Button>加班补助</Button><Button>饭补</Button>
                                <Button>话补</Button><Button>房补</Button> */}
                                <input type="text" onChange={(value)=>this.setState({yearsum:value})} />
                            </div>
                            <div className="form_item" style={{width:"100%",height:"150px",justifyContent:"flex-start",flexDirection:"column",alignItems:"flex-start"}}>
                                <span style={{width:"130px"}}>职位描述:</span>
                                <textarea style={{width:"100%",height:"100%"}}></textarea>
                            </div>

   
                    <div className="btn_box">
                    <div className="btn_container">
                        <Button style={{'width':'100px','height':'30px','border':'1px solid sliver','backgroundColor':'rgb(228, 111, 3)','fontWeight':600}} onClick={this.submit.bind(this)}>发布</Button>
                        <Button style={{'width':'100px','height':'30px','border':'1px solid sliver','backgroundColor':'rgb(20, 187, 100)','fontWeight':600}} onClick={this.cancel.bind(this)}>取消</Button>
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

export default Zhaopin;