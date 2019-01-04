import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchTinhTrangHocPhanDatas} from '../../actions/fetchdata';


class ThongTinCaNhan extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      store: []
    }
  }
  componentDidMount(){
    const {DangKyHocPhandata} = this.props;

    this.props.fetchTinhTrangHocPhanDatas();
};
  render() {
  const {DangKyHocPhandata} = this.props;
    return (
 <div className="backgroundedit">
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
                 <th>...</th>
             </tr>
         </thead>
         <tbody>
         {
          DangKyHocPhandata.map(user =>
             <tr>
                 <td>{user.id}</td>
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
 )}
         </tbody>
     </table>
 </div>
        );
  }
}
const mapStateToProps = state => ({
  DangKyHocPhandata: state.datas.items,
})

export default connect(mapStateToProps,{fetchTinhTrangHocPhanDatas}) (ThongTinCaNhan);
