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
                    <div class="col-md-3">Tên chuyên ngành: </div> <input type="text" style={{"width":"470px"}} />
               </div> <br/>

               <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Khoa: </div>  <input type="text" style={{"width":"470px"}} />
                </div> <br/>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">Ngày thành lập:</div>  <input type="text" style={{"width":"470px"}} />
               </div> <br/>







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
