import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Route, Redirect } from 'react-router'

class ThongTinCaNhan extends Component {

  render() {
    return (
      <div className="backgroundedit">
         <div class="card-body">
                 <center>
                     <h2 >Lớp học phần 15NH15</h2>
                     <br/>
                     <h4 class="card-subtitle">Mã học phần: 00001</h4>
                     <br/>
                 </center>

         </div>

         <div class="row">
             <div class="col-md-10"></div>
                 <a href="#" class="btn btn-info btn-lg">
                     <span class="glyphicon glyphicon-print"></span> Print
                  </a>
             </div>
         <br/>

         <div class="container">
             <form >
              <table class="table table-bordered">
                 <thead >
                     <tr class="background-color">
                         <th>STT</th>
                         <th>MSSV</th>
                         <th>Họ và tên</th>
                         <th>Ngày sinh</th>
                         <th>Giới tính</th>
                         <th>Ghi chú</th>

                     </tr>
                 </thead>
                 <tbody>
                     <tr onClick={<Redirect to="/#/GiangVien/DanhSachLop"/>}>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                     <tr>
                         <td>1</td>
                         <td>102150200</td>
                         <td>Nguyễn Văn A</td>
                         <td>01/01/1997</td>
                         <td>Nam</td>
                         <td></td>

                     </tr>
                 </tbody>
             </table>
             </form>

         </div>
          </div>
        );
  }
}

export default ThongTinCaNhan;
