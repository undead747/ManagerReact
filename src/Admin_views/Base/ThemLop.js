import React, { Component } from 'react';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: 'red',
    'font-weight': 'bold',
     };
    return (
      <div className="backgroundedit">
    <form class="formcss2">
               <br/>
               <div class="row">
                   <div class="col-md-1"></div>
                   <div class="col-md-3">Tên lớp: </div> <input type="text" style={{width:'470px'}} />

               </div> <br/>


               <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Khoa: </div>  <select>
                        <option >CNTT</option>
                        <option >Item 2</option>
                        <option >Item 3</option>
                        <option >Item 4</option>
                    </select>
                    <div class="col-md-1"></div>

                    <div class="col-md-2">Khóa: </div><select>
                        <option >15</option>
                        <option >Item 2</option>
                        <option >Item 3</option>
                        <option >Item 4</option>
                    </select>

                </div> <br/>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Danh sách lớp: </div> <input type="text" style={{width:'395px'}} /><button>Browser</button>
                </div> <br/>

                <div class="row">
                    <div class="col-md-8"></div>
                    <button className="btn btn-link"> <i className="fas fa-plus" style={{fontSize: '24px', color: 'rgb(82, 121, 240)blue'}} /> Thêm câu hỏi</button>
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
