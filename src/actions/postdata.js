import axios from 'axios';

const dataAPI = "http://localhost:3000/DangKy";
const dataAPI1 = "http://localhost:3000/DeThi";


export const postHocPhanDaChon = (dangky) => dispatch => {
 axios.post(dataAPI,{dangky})
 .catch(err => {
   console.log(err);
   throw new Error('Không thể post dữ liệu');
 })
}

export const postCauHoi = (cauhoi) => dispatch => {
  axios.post(dataAPI1,{cauhoi})
  .catch(err => {
    console.log(err);
    throw new Error('Không thể post dữ liệu');
  })
}
