import React, { Component } from 'react';

class SubjectAdd extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{display:"flex"}}>
                                <Input type="checkbox"/>
                                <span> 角色</span>
                            </th>
                            <th>功能</th>
                            <th>填写内容</th>
                            <th>备注</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default SubjectAdd;