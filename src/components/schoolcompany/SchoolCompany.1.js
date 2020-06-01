import React, { Component } from 'react';
import { Divider, Table } from 'antd';
export class SchoolCompany extends Component {
    constructor() {
        super();
        this.state = {
            data: ""
        };
    }
    componentDidMount() {
        this.setState({
            data: [
                {
                    textAlign: "center",
                    dataIndex: 1,
                    no: 1,
                    name: "123",
                    department: "123",
                    person: "123",
                    participate: "123",
                    work: "123",
                    services: "123",
                    train: "123",
                    projectNo: "123",
                    effect: "123",
                    name9: "123",
                    key: "no"
                }
            ]
        });
    }
    render() {
        const columns = [{
            title: "编号",
            dataIndex: "no",
            key: '1'
        },
        {
            title: "基本信息",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "合作名称",
            dataIndex: "department",
            key: "department"
        },
        {
            title: "单位",
            dataIndex: "person",
            key: "person"
        },
        {
            title: "日期",
            dataIndex: "participate",
            key: "participate"
        },
        {
            title: "系部",
            dataIndex: "work",
            key: "work"
        },
        {
            title: "类别",
            dataIndex: "services",
            key: "services"
        },
        {
            title: "合作协议上传",
            dataIndex: "train",
            key: "train"
        }, {
            className: 'action',
            align: 'center',
            title: '操作',
            key: 'action',
            render: (text, record) => (<span>
                <a>申报</a>
                <Divider type="vertical" />
                <a>修改</a>
                <Divider type="vertical" />
                <a>删除</a>
            </span>),
        }
        ];
        return (<div>
            <Table style={{ marginTop: 30, border: 0 }} columns={columns} dataSource={this.state.data} />
        </div>);
    }
}
