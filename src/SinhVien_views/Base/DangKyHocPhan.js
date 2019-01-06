import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import axios from "axios";
import {connect} from 'react-redux';
import {fetchTinhTrangHocPhanDatas,fetchHocPhanDangKyDatas} from '../../actions/fetchdata';
import {postHocPhanDaChon} from '../../actions/postdata';
import {deleteHocPhanDaChon} from '../../actions/deletedata';
class ThongTinCaNhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      open: false,
      rerender: false
    }
}
  componentDidMount(){
    const {DangKyHocPhandata} = this.props;

    this.props.fetchTinhTrangHocPhanDatas();
    this.props.fetchHocPhanDangKyDatas();

};
 componentWillReceiveProps(nextProps) {
   const {HocphanDaChon: nextHocPhanDaChon} = nextProps;

   if(nextHocPhanDaChon !== this.props.HocphanDaChon) {
     this.props.fetchHocPhanDangKyDatas();
   }
 }
 openModal = () => {
    this.setState({open: true})
  }
  closeModal = () => {
    this.setState({ open: false})
  }
  DangKy = dangky => {
    const{HocphanDaChon} = this.props;
    if( HocphanDaChon.find(user => user.dangky.id == dangky.id) == null){
    this.props.postHocPhanDaChon(dangky);
  }
  }
  deleteDangKy = id => {
      this.props.deleteHocPhanDaChon(id);
  }
  sum = (list) => {
   let sum = 0;
    list.map(p =>
      sum = sum + parseInt(p.dangky.HocPhi.replace(".", ""))
    )
    return sum
  }
  render() {
  const {DangKyHocPhandata} = this.props;
  const{HocphanDaChon} = this.props;
  const users1 = this.state.users1;
    return (
      <div className="backgroundedit">

                      <table class="table table-bordered" >
                              <thead class="setfont">
                                  <tr>
                                      <th>STT</th>
                                      <th>Mã lớp học phần</th>
                                      <th>Tên học phần</th>
                                      <th>Số tín chỉ</th>
                                      <th>Giảng viên</th>
                                      <th>Thời khóa biểu</th>
                                      <th>Tuần học</th>
                                      <th>Loại học phần</th>
                                      <th>Học phí</th>
                                      <th>Tình trạng</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                                HocphanDaChon.map(user =>
                                  <tr>
                                  <td>{HocphanDaChon.indexOf(user) + 1}</td>
                                  <td>{user.dangky.MaLHP}</td>
                                  <td>{user.dangky.name}</td>
                                  <td>{user.dangky.GiangVien}</td>
                                  <td>{user.dangky.ThoiKhoaBieu}</td>
                                  <td>{user.dangky.TuanHoc}</td>
                                  <td>{user.dangky.TuanHoc}</td>
                                  <td>{user.dangky.Loai}</td>
                                  <td>{user.dangky.HocPhi}</td>
                                  <td>{user.dangky.TinhTrang}</td>
                                  <td><a onClick={(e) => this.deleteDangKy(user.id)}>Xoá</a></td>
                                  </tr>
                                )}
                              </tbody>
                          </table>
                          <div class="row">

                              <div class="col-md-6"><h4 class="setcolor">Tổng số tín chỉ: {HocphanDaChon.length}/10  Học phí: {this.sum(HocphanDaChon)} VND</h4></div>
                              <div class="col-md-4"></div>
                          </div>
                          <div className="dangky-button-padding">
                           <button className="btn btn-primary" onClick={this.openModal}>Đăng Ký</button>
                          <Popup
                            className="box-popup"
                             open={this.state.open}
                             closeOnDocumentClick
                             onClose={this.closeModal}
                          >
                          <div className="alert-box"><h2> Bạn có chắc muốn thực hiện điều này ?</h2></div>
                          <div className="flexcontainer bottom-box">
                          <Link to = "/SinhVien/HocPhanDangHoc">
                          <button class="button-size padding-left btn btn-primary">OK</button>
                          </Link>
                          <button className="button-size btn btn-danger" onClick={this.closeModal}>close</button>
                          </div>
                          </Popup>
                          </div>
                          <br/>
                          <br/>
                          <br/>

                          <table class="table table-bordered">
                                  <thead class="setfont">
                                      <tr>
                                          <th>STT</th>
                                          <th>Mã lớp học phần</th>
                                          <th>Tên học phần</th>
                                          <th>Số tín chỉ</th>
                                          <th>Giảng viên</th>
                                          <th>Thời khóa biểu</th>
                                          <th>Tuần học</th>
                                          <th>Loại học phần</th>
                                          <th>Học phí</th>
                                          <th>Tình trạng</th>
                                          <th></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  {
                                    DangKyHocPhandata.map(user =>{
                                    while(DangKyHocPhandata.indexOf(user) <= 4){
                                    return (
                                      <tr>
                                      <td>{DangKyHocPhandata.indexOf(user) + 1  }</td>
                                      <td>{user.MaLHP}</td>
                                      <td>{user.name}</td>
                                      <td>{user.GiangVien}</td>
                                      <td>{user.ThoiKhoaBieu}</td>
                                      <td>{user.TuanHoc}</td>
                                      <td>{user.TuanHoc}</td>
                                      <td>{user.Loai}</td>
                                      <td>{user.HocPhi}</td>
                                      <td>{user.TinhTrang}</td>
                                       {
                                         (user.TinhTrang == '60/60') ? (
                                           <td><a href="#" class="disabled">Đăng kí</a></td>
                                         ) : (
                                            <td><a onClick={(e) => this.DangKy(user)}>Đăng kí</a></td>
                                         )
                                       }
                                      </tr>
                                    )
                                    }})}
                                  </tbody>
                              </table>
          </div>
        );
  }
}
const mapStateToProps = state => ({
  DangKyHocPhandata: state.datas.items,
  HocphanDaChon: state.datas_chose.items,
})

export default connect(mapStateToProps,{fetchTinhTrangHocPhanDatas,fetchHocPhanDangKyDatas,postHocPhanDaChon,deleteHocPhanDaChon}) (ThongTinCaNhan);
