import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: 'blue',
    'font-weight': 'bold',
     };
    return (
      <div className="backgroundedit">
            <br/>
            <div class="container">
              <div class="ta  ble-responsive table-condensed">
              <div><h2 style= {divStyle}>Lịch thi: </h2></div>
                 <table class="table table-bordered table-hover">
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
                         <tr>
                             <td>1</td>
                             <td>000001</td>
                             <td>Chương trình dịch</td>
                             <td>20/Dec/2018; 7h00</td>
                             <td>
                             <Link to="/SinhVien/ChuanBiThi">
                             Thi ngay
                             </Link>
                             </td>
                         </tr>
                         <tr>
                             <td>1</td>
                             <td>000001</td>
                             <td>Chương trình dịch</td>
                             <td>20/Dec/2018; 7h00</td>
                             <td>
                             <Link to="/SinhVien/ChuanBiThi">
                             Thi ngay
                             </Link>
                             </td>
                         </tr>
                         <tr>
                             <td>1</td>
                             <td>000001</td>
                             <td>Chương trình dịch</td>
                             <td>20/Dec/2018; 7h00</td>
                             <td>
                             <Link to="/SinhVien/ChuanBiThi">
                             Thi ngay
                             </Link>
                             </td>
                         </tr>
                         <tr>
                             <td>1</td>
                             <td>000001</td>
                             <td>Chương trình dịch</td>
                             <td>20/Dec/2018; 7h00</td>
                             <td>
                             <Link to="/SinhVien/ChuanBiThi">
                             Thi ngay
                             </Link>
                             </td>
                         </tr>
                         <tr>
                             <td>1</td>
                             <td>000001</td>
                             <td>Chương trình dịch</td>
                             <td>20/Dec/2018; 7h00</td>
                             <td>
                             <Link to="/SinhVien/ChuanBiThi">
                             Thi ngay
                             </Link>
                             </td>
                         </tr>
                         <tr>
                             <td>1</td>
                             <td>000001</td>
                             <td>Chương trình dịch</td>
                             <td>20/Dec/2018; 7h00</td>
                             <td>
                             <Link to="/SinhVien/ChuanBiThi">
                             Thi ngay
                             </Link>
                             </td>
                         </tr>
                     </tbody>
                 </table>
            </div>
          </div>
      </div>
        );
  }
}

export default ThongTinCaNhan;
