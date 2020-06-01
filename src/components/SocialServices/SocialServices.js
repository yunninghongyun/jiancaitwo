import React, { Component } from 'react';
import {Table,Divider,Button,Modal,Input} from'antd'
import './socialservices.css'
import { log } from 'util';
class SocialServices extends Component {
    constructor(){
        super()
        this.state={
            data:"",
            visible:false
        }
    }
    componentDidMount() {
        this.setState({
            data:[
                {
                 textAlign:"center",
                 dataIndex:1, 
                 no:1,
                 name:"123",
                 department:"123",
                 person:"123",
                 participate:"123",
                 work:"123",
                 services:"123",
                 train:"123",
                 projectNo:"123",
                 effect:"123",
                 name9:"123",
                 key:"no",
                 state: <a href="#">待申报</a>
                }
            ]
        })
    }
    handleClick=()=>{
        this.setState({
            visible:true
        })
    }
    handleCancle=()=>{
        this.setState({
            visible:false
        })
    }
    handleOk=()=>{
        this.setState({
            visible:false
        })
    }
    render() {
        const columns=[{
            title:"编号",
            dataIndex:"no",
            key:'1'
        },
        {
            title:"项目名称",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"部门",
            dataIndex:"department",
            key:"department"
        },
        {
            title:"负责人",
            dataIndex:"person",
            key:"person"
        },
        {
            title:"参与人",
            dataIndex:"participate",
            key:"participate"
        },
        {
            title:"工作比例",
            dataIndex:"work",
            key:"work"
        },
        {
            title:"服务学时",
            dataIndex:"services",
            key:"services"
        },
        {
            title:"培训人数",
            dataIndex:"train",
            key:"train"
        },
        {
            title:"项目编号",
            dataIndex:"projectNo",
            key:"projectNo"
        },
        {
            title:"服务效果",
            dataIndex:"effect",
            key:"effect"
        },{
            title:"状态",
            dataIndex:"state",
            key:"state"
        }, {
            className:'action',
            align:'center',
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a>申报</a>
                <Divider type="vertical" />
                <a>修改</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            ),
          }
    ]
        return (
            <div>
                
                <Button >查询</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={this.handleClick}>添加社会服务</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Table style={{marginTop:30,border:0}} columns={columns} dataSource={this.state.data} />
                <Modal
                    visible={this.state.visible}
                    title="添加社会服务"
                    onCancel={this.handleCancle}
                    footer={[ 
                    <Button onClick={this.handleCancle}>取消</Button>,
                    <Button onClick={this.handleOk}>确定</Button> 
                    ]}
                >
                   <div>项目名称:&nbsp;&nbsp;<Input className="socialName social"  type="text"></Input></div> 
                   <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部门:&nbsp;&nbsp;<Input  className="socialDepartment social" type="text"></Input></div> 
                   <div>&nbsp;&nbsp;&nbsp;&nbsp;负责人:&nbsp;&nbsp;<Input className="socialPerson social"  type="text"></Input></div> 
                   <div>&nbsp;&nbsp;&nbsp;&nbsp;参与人:&nbsp;&nbsp;<Input className="socialParticipate social"  type="text"></Input></div> 
                   <div>工作比例:&nbsp;&nbsp;<Input className="socialWork social"  type="text"></Input></div> 
                   <div>服务学时:&nbsp;&nbsp;<Input className="socialServices social"  type="text"></Input></div> 
                   <div>培训人数:&nbsp;&nbsp;<Input className="social social"  type="text"></Input></div> 
                   <div>项目编号:&nbsp;&nbsp;<Input className="socialNo social"  type="text"></Input></div> 
                   <div>服务效果:&nbsp;&nbsp;<Input className="socialEffect social"  type="text"></Input></div> 
                </Modal>
            </div>
        );
    }
}

export default SocialServices;