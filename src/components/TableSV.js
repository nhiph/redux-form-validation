import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rootReducer } from '../reducer/rootReducer';
import { QuanLySinhVienReducer } from '../reducer/QuanLySinhVienReducer';

class TableSV extends Component {

    showInfoSV = () => {
        let {mangSinhVien} = this.props;
        return mangSinhVien.map((sinhVien, index) => {
            return(
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.soDT}</td>
                    <td>{sinhVien.email}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>MÃ SV</th>
                            <th>HỌ TÊN</th>
                            <th>SỐ ĐT</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showInfoSV()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps, null)(TableSV);