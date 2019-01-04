import axios from 'axios';

const dataAPI = "http://localhost:3000/DangKy/";


export const deleteHocPhanDaChon = (id) => dispatch => {
 axios.delete(dataAPI+id)
 .catch(err => {
   console.log(err);
   throw new Error('Không thể xóa dữ liệu');
 })
}
