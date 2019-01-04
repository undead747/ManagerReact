import axios from 'axios';

const dataAPI = "http://localhost:3000/DangKy";


export const postHocPhanDaChon = (dangky) => dispatch => {
 axios.post(dataAPI,{dangky})
 .catch(err => {
   console.log(err);
   throw new Error('Không thể post dữ liệu');
 })
}
