import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormThemSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maSV: '',
            hoTen: '',
            soDT: '',
            email: ''
        };
    }

    onChange = (e) => {
        //Lấy dữ liệu của ng dùng khi có thay đổi bởi onchange, bước sau đưa lên store và truền props chọ component nhận hiển thị UI
        // Đưa dữ liệu người dùng lấy được lên store = mapDispatchToProps
;        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    
    onSubmit = (e) => {
        //DO type cua button la submit, khi click tu dong load trag, ngan chan bang cach
        // SU khac nhau giuwa button co type : submit vaf type: button
        // type: submit, khi enter form submit se goi ham nay de xu ly
        //type : btn, khi enter form k hieu submit, can click button form moi submit 
        // => Uu tien dung type: submit
        e.preventDefault(); // ngan can su kien submit, load trang
        this.props.themSinhVien(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="card text-left">
                    <div className="card-header bg-dark text-white"><h5>THÔNG TIN SINH VIÊN</h5></div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>MÃ SV</span>
                                    <input 
                                        className="form-control" 
                                        name="maSV"
                                        value={this.state.maSV}
                                        onChange={this.onChange}>
                                    </input>
                                </div>
                                <div className="form-group col-6">
                                    <span>HỌ TÊN</span>
                                    <input 
                                        className="form-control" 
                                        name="hoTen"
                                        value={this.state.hoTen}
                                        onChange={this.onChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>EMAIL</span>
                                    <input 
                                        className="form-control" 
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}>
                                    </input>
                                </div>
                                <div className="form-group col-6">
                                    <span>SỐ ĐT</span>
                                    <input 
                                        className="form-control" 
                                        name="soDT"
                                        value={this.state.soDT}
                                        onChange={this.onChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(FormThemSV);
