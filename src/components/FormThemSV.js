import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormThemSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                maSV: '',
                hoTen: '',
                soDT: '',
                email: ''
            },
            errors: {
                maSV: '',
                hoTen: '',
                soDT: '',
                email: ''
            }
        };
    }

    onChange = (e) => {
        //Lấy dữ liệu của ng dùng khi có thay đổi bởi onchange, bước sau đưa lên store và truền props chọ component nhận hiển thị UI
        // Đưa dữ liệu người dùng lấy được lên store = mapDispatchToProps
;        let target = e.target;
        let {name, value, type, pattern} = target;
        let errorMessage = '';
        // KIểm tra rỗng
        if(value.trim()===''){
            errorMessage = name + 'Không được bỏ trống !'
        }
        // Kiểm tra email
        if(type==="email"){
            const regex = new RegExp(pattern);
            if(!regex.test(value)){
                errorMessage = name + 'KHông đúng định dạng !'
            }
        }
        if(name==="soDT"){
            const regex = new RegExp(pattern);
            if(!regex.test(value)){
                errorMessage = name + 'KHông đúng định dạng !'
            }
        }
        let values = {...this.state.values,[name]: value}; // Update gia tri cho value
        let errors = {...this.state.errors,[name]: errorMessage}; // Update loi cho erros

        this.setState({
            ...this.state,
            values: values,
            errors: errors
        },() =>{
            this.renderBtnSm();
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

    renderBtnSm = () => {
        let valid = true;
        for(let key in this.state.errors){
            if(this.state.errors[key] !== '' || this.state.values[key] === ''){
                valid = false;
            }
        }
        this.setState({
            ...this.state,
            valid: valid
        })
        // if(valid){
        //     return <button type="submit" className="btn btn-success">Thêm Sinh Viên</button>
        // }
        // return <button type="submit" className="btn btn-success" disabled>Thêm Sinh Viên</button>
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
                                        value={this.state.values.maSV}
                                        onChange={this.onChange}>
                                    </input>
                                    <p class="text-danger">
                                        {this.state.errors.maSV}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>HỌ TÊN</span>
                                    <input 
                                        className="form-control" 
                                        name="hoTen"
                                        value={this.state.values.hoTen}
                                        onChange={this.onChange}>
                                    </input>
                                    <p class="text-danger">
                                        {this.state.errors.hoTen}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>EMAIL</span>
                                    <input 
                                        type="email"
                                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                                        className="form-control" 
                                        name="email"
                                        value={this.state.values.email}
                                        onChange={this.onChange}>
                                    </input>
                                    <p class="text-danger">
                                        {this.state.errors.email}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>SỐ ĐT</span>
                                    <input 
                                        type="number"
                                        pattern='^(0|[1-9][0-9]*)$'
                                        className="form-control" 
                                        name="soDT"
                                        value={this.state.values.soDT}
                                        onChange={this.onChange}>
                                    </input>
                                    <p class="text-danger">
                                        {this.state.errors.soDT}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {this.state.valid ? <button className="btn btn-success" type="submit">Thêm Sinh Viên</button>
                                    : <button className="btn btn-success" disabled type="submit">Thêm Sinh Viên</button>}
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
