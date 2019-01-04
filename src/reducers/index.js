import {combineReducers} from 'redux';
import {fetchTinhTrangHocPhanDatas,fetchHocPhanDangKyDatas,fetchHocPhanDangHocDatas,fetchDeThiDatas} from './dataReducer';

export  default combineReducers({
datas: fetchTinhTrangHocPhanDatas,
datas_chose: fetchHocPhanDangKyDatas,
datas_study: fetchHocPhanDangHocDatas,
datas_test: fetchDeThiDatas
});
