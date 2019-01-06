import React, { Component } from 'react';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: 'red',
    'font-weight': 'bold',
     };
     const styleshit = {
      fontSize: '24px',
      color: 'rgb(82, 121, 240)blue'
     }
    return (
      <div className="backgroundedit">
      <form class="formcss2">
               <br/>
               <div class="row">
                   <div class="col-md-1"></div>
                    <div class="col-md-3">Họ và tên: </div> <input type="text" style={{"width":"470px"}} />

               </div> <br/>

               <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">MSSV:</div> <input type="text" style={{"width":"470px"}} />

                </div> <br/>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Ngày Sinh:</div>  <input type="date" style={{"width":"470px"}} />
               </div> <br/>

               <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Khoa: </div>  <input type="text" />
                    <div class="col-md-1"></div>

                    <div class="col-md-2">Khóa: </div><select>
                        <option >Item 1</option>
                        <option >Item 2</option>
                        <option >Item 3</option>
                        <option >Item 4</option>
                    </select>

                </div> <br/>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Lớp Sinh Hoạt: </div>  <input type="text" style={{"width":"470px"}} />
                </div>

                <div class="row">
                    <div class="col-md-8"></div>
                    <button class="btn btn-link"> <i class='fas fa-plus' style={styleshit}></i> Thêm bằng file excel</button>
                    </div>

                <div class="row">
                    <div class="col-md-4"></div>
                    <button class="btn btn-info">Thêm</button>
                    <div class="col-md-2"></div>
                    <button class="btn btn-danger">Hủy</button>
                </div>
                <br/>



           </form>
      </div>
        );
  }
}

export default ThongTinCaNhan;
