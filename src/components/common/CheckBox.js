import React, { Component } from 'react';
import {Input} from'antd'
class CheckBox extends Component {
    render() {
        return (
            <div>
                <Input type="checkbox" style={{height:15,width:15}}></Input>
            </div>
        );
    }
}

export default CheckBox;