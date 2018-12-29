import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: 'red',
    'margin-left': '350px',
     };
    return (
      <div className="backgroundedit">
       	<div>
         <br/>

         <h3 style={divStyle}><strong> ĐỀ THI CUỐI KỲ MÔN CHƯƠNG TRÌNH DỊCH</strong></h3>
         <div class="container mt-3">
       		<div class="alert alert-info">

               <h5>Câu 1: Chương trình dịch không có khả năng nào trong các khả năng sau?</h5>
               <ul>
               <label>
                <input type="radio" value="option1" checked={false} />
                Phát hiện được lỗi ngữ nghĩa
               </label>
               <br/>
               <label>
                <input type="radio" value="option1" checked={false} />
                Phát hiện được lỗi cú pháp
               </label>
               <br/>
               <label>
                <input type="radio" value="option1" checked={true} />
                Thông báo lỗi cú pháp
               </label>
               <br/>
               <label>
                <input type="radio" value="option1" checked={false} />
                Tạo được chương trình dịch
               </label>
               </ul>
            </div>
            <div class="alert alert-info">

                 <h5>Câu 1: Chương trình dịch không có khả năng nào trong các khả năng sau?</h5>
                 <ul>
                 <label>
                  <input type="radio" value="option1" checked={true} />
                  Phát hiện được lỗi ngữ nghĩa
                 </label>
                 <br/>
                 <label>
                  <input type="radio" value="option1" checked={false} />
                  Phát hiện được lỗi cú pháp
                 </label>
                 <br/>
                 <label>
                  <input type="radio" value="option1" checked={false} />
                  Thông báo lỗi cú pháp
                 </label>
                 <br/>
                 <label>
                  <input type="radio" value="option1" checked={false} />
                  Tạo được chương trình dịch
                 </label>
                 </ul>
              </div>
              <div class="alert alert-info">

                   <h5>Câu 1: Chương trình dịch không có khả năng nào trong các khả năng sau?</h5>
                   <ul>
                   <label>
                    <input type="radio" value="option1" checked={false} />
                    Phát hiện được lỗi ngữ nghĩa
                   </label>
                   <br/>
                   <label>
                    <input type="radio" value="option1" checked={false} />
                    Phát hiện được lỗi cú pháp
                   </label>
                   <br/>
                   <label>
                    <input type="radio" value="option1" checked={true} />
                    Thông báo lỗi cú pháp
                   </label>
                   <br/>
                   <label>
                    <input type="radio" value="option1" checked={false} />
                    Tạo được chương trình dịch
                   </label>
                   </ul>
                </div>
                <div class="alert alert-info">

                     <h5>Câu 1: Chương trình dịch không có khả năng nào trong các khả năng sau?</h5>
                     <ul>
                     <label>
                      <input type="radio" value="option1" checked={false} />
                      Phát hiện được lỗi ngữ nghĩa
                     </label>
                     <br/>
                     <label>
                      <input type="radio" value="option1" checked={false} />
                      Phát hiện được lỗi cú pháp
                     </label>
                     <br/>
                     <label>
                      <input type="radio" value="option1" checked={true} />
                      Thông báo lỗi cú pháp
                     </label>
                     <br/>
                     <label>
                      <input type="radio" value="option1" checked={false} />
                      Tạo được chương trình dịch
                     </label>
                     </ul>
                  </div>
            <div align="center">
               <div>
               <Link to="/SinhVien/KetQuaThi">
               <button class="btn btn-danger">Nộp bài</button>
               </Link>
               </div>
            </div>
            <br/>
            </div>


         </div>
         <div>

         </div>
         </div>

        );
  }
}

export default ThongTinCaNhan;
