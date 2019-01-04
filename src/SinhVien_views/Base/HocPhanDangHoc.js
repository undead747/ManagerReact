import React, { Component } from 'react';
import {fetchHocPhanDangHocDatas} from '../../actions/fetchdata';
import {connect} from 'react-redux';
class ThongTinCaNhan extends Component {
  componentDidMount(){
    this.props.fetchHocPhanDangHocDatas();
  }
  render() {
    const {data} = this.props;
    return (
      <div  className="backgroundedit">

   <div class="card-body">
       <center >
               <select >
                   <option value="">Học kì 1 năm học 2017-2018</option>
                   <option value="">Học kì 2 năm học 2017-2018</option>
               </select>
       </center>
   </div>
<div class="container">

  <div class="table-responsive">
      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>STT</th>
                  <th>Mã lớp học phần</th>
                  <th>Tên học phần</th>
                  <th>Lớp học phần</th>
                  <th>Số tín chỉ</th>
                  <th>Giảng viên</th>
                  <th>Thời khóa biểu</th>
                  <th>Tuần học</th>
                  <th>Loại học phần</th>
              </tr>
          </thead>
          <tbody>
          {
            data.map(data =>
              <tr>
                  <td>{data.id}</td>
                  <td>{data.MaLHP}</td>
                  <td>{data.name}</td>
                  <td>{data.LopHocPhan}</td>
                  <td>{data.SoTinChi}</td>
                  <td>{data.GiangVien}</td>
                  <td>{data.ThoiKhoaBieu}</td>
                  <td>{data.TuanHoc}</td>
                  <td>{data.Loai}</td>
              </tr>
            )
            }
          </tbody>
      </table>
  </div>

  <div class="row">

          <div class="col-md-6"><h3 class="setcolor">Tổng số tín chỉ: {data.length}/10 </h3></div>
          <div class="col-md-4"></div>

  </div>

      <br/>
  <div><h2 >Lịch thi: </h2></div>


      <table class="table table-bordered">
          <thead>
              <tr>
                  <th>STT</th>
                  <th>Mã lớp học phần</th>
                  <th>Tên học phần</th>
                  <th>Lịch thi</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
          {
            data.map(data =>
              <tr>
                  <td>{data.id}</td>
                  <td>{data.MaLHP}</td>
                  <td>{data.name}</td>

                  <td>{data.LichThi}</td>
                  <td><a href="/#/SinhVien/LichThi" >Thi ngay</a></td>
              </tr>
            )}
          </tbody>
      </table>
</div>

        </div>
        );
  }
}
const mapStateToProps = state => ({
  data: state.datas_study.items,
})

export default connect (mapStateToProps,{fetchHocPhanDangHocDatas}) (ThongTinCaNhan);
