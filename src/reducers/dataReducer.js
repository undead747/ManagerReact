import {FETCH_DATA,FETCH_CHOSE_DATA,FETCH_HOCPHANDANGHOC_DATA,FETCH_DETHI_DATA} from '../actions/types';

const initialState = {
  items: [],
}

const initialState1 = {
  items: [],
}

export function fetchTinhTrangHocPhanDatas(state = initialState,action){
  switch (action.type) {
    case FETCH_DATA:
      return{
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
export function fetchHocPhanDangKyDatas(state = initialState1,action){
  switch (action.type) {
    case FETCH_CHOSE_DATA:
      return{
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
export function fetchHocPhanDangHocDatas(state = initialState1,action){
  switch (action.type) {
    case FETCH_HOCPHANDANGHOC_DATA:
      return{
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
export function fetchDeThiDatas(state = initialState,action){
  switch (action.type) {
    case FETCH_DETHI_DATA:
      return{
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
