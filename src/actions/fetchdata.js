import {FETCH_DATA, POST_DATA,FETCH_CHOSE_DATA,FETCH_HOCPHANDANGHOC_DATA,FETCH_DETHI_DATA} from './types';
import axios from 'axios';

const dataAPI = "http://localhost:3000/db";


export const fetchTinhTrangHocPhanDatas = () => dispatch => {
 axios.get(dataAPI)
 .then(res =>{
  let {TinhTrangHocPhan} = res.data;
     return dispatch({
       type: FETCH_DATA,
       payload: TinhTrangHocPhan
     });
 })
 .catch(err => {
   console.log(err);
   throw new Error('Không thể load dữ liệu');
 })
}
export const fetchHocPhanDangKyDatas = () => dispatch => {
 axios.get(dataAPI)
 .then(res =>{
  let {DangKy} = res.data;
     return dispatch({
       type: FETCH_CHOSE_DATA,
       payload: DangKy
     });
 })
 .catch(err => {
   console.log(err);
   throw new Error('Không thể load dữ liệu');
 })
}
export const fetchHocPhanDangHocDatas = () => dispatch => {
 axios.get(dataAPI)
 .then(res =>{
  let {HocPhanDangHoc} = res.data;
     return dispatch({
       type: FETCH_HOCPHANDANGHOC_DATA,
       payload: HocPhanDangHoc
     });
 })
 .catch(err => {
   console.log(err);
   throw new Error('Không thể load dữ liệu');
 })
}
export const fetchDeThiDatas = () => dispatch => {
 axios.get(dataAPI)
 .then(res =>{
  let {DeThi} = res.data;
     return dispatch({
       type: FETCH_DETHI_DATA,
       payload: DeThi
     });
 })
 .catch(err => {
   console.log(err);
   throw new Error('Không thể load dữ liệu');
 })
}
