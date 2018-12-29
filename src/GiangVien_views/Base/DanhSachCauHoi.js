import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    return (
      <div className="backgroundedit">

  <h2 style={{textAlign: 'center', marginTop: '10px'}}>Chương trình dịch</h2> <br />
 <div class="row">
     <div class="col-md-3"></div>
     <button class="btn btn-danger">Thêm câu hỏi</button>
 </div>
 <form  class="formcss" >
    <div >
     <div class="row">
         <h4 class="col-md-9">Dữ liệu là gì?</h4>
         <p style={{color: 'red', fontSize: '20px'}}>Khó</p> &nbsp; &nbsp;
         <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
         <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
     </div>

    </div>

      <div style={{fontSize: '18px'}}>
         <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            Là các số dữ liệu hoặc là tài liệu cho trước chưa được xử lý.
          </label>
        </div>
        <div className="radio">
         <label>
           <input type="radio" value="option1" checked={false} />
           Là khái niệm có thể được phát sinh, lưu trữ, tìm kiếm, sao chép, biến đổi,...
         </label>
       </div>
       <div className="radio">
        <label>
          <input type="radio" value="option1" checked={false} />
          Là các thông tin được thể hiện dưới nhiều dạng khác nhau.
        </label>
      </div>
      <div className="radio">
       <label>
         <input type="radio" value="option1" checked={false} />
         tất cả đều đúng
       </label>
      </div>

    </div>

 </form>


 <form  class="formcss" >
    <div >
     <div class="row">
         <h4 class="col-md-9">Dữ liệu là gì?</h4>
         <p style={{color: 'red', fontSize: '20px'}}>Khó</p> &nbsp; &nbsp;
         <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
         <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
     </div>

    </div>

      <div style={{fontSize: '18px'}}>
         <div className="radio">
          <label>
            <input type="radio" value="option1" checked={false} />
            Là các số dữ liệu hoặc là tài liệu cho trước chưa được xử lý.
          </label>
        </div>
        <div className="radio">
         <label>
           <input type="radio" value="option1" checked={true} />
           Là khái niệm có thể được phát sinh, lưu trữ, tìm kiếm, sao chép, biến đổi,...
         </label>
       </div>
       <div className="radio">
        <label>
          <input type="radio" value="option1" checked={false} />
          Là các thông tin được thể hiện dưới nhiều dạng khác nhau.
        </label>
      </div>
      <div className="radio">
       <label>
         <input type="radio" value="option1" checked={false} />
         tất cả đều đúng
       </label>
      </div>

    </div>

 </form>
        </div>
        );
  }
}

export default ThongTinCaNhan;
