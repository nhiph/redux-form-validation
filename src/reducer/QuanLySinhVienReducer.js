const stateDefault = {
    mangSinhVien: [{ maSV: 1, hoTen: 'Nguyen Van A', soDT: '0356643120', email: 'abc@gmail.com'}] 
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            const mangSVUpdate= [...state.mangSinhVien.action.sinhVien];
            console.log(mangSVUpdate);
            state.mangSinhVien = mangSVUpdate;
            return {...state};
        };
        default:
            return {...state};
    }
}