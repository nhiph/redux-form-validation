import React, { Component } from 'react'
import FormThemSV from './FormThemSV'
import TableSV from './TableSV'

export default class BaiTapForm extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center text-info my-3">BÀI TẬP QUẢN LÝ SINH VIÊN FORM-VALIDATION</h3>
                <FormThemSV />
                <TableSV />
            </div>
        )
    }
}
