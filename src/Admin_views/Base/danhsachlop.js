import React, { Component } from 'react';
import Popup from "reactjs-popup";

class ThongTinCaNhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      store: [],
      open: false,
     }
  }
  openModal = () => {
    this.setState({open: true})
  }
  closeModal = () => {
    this.setState({ open: false})
  }
  alert = () => {
    this.setState({ open: false});
    alert("đã thêm lớp mới !")
  }
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
      <br/>
      <Popup
        className="box-popup-themlop"
         open={this.state.open}
         closeOnDocumentClick
         onClose={this.closeModal}
      >
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
                    <button class="btn btn-info" onClick={this.openModal}>Thêm</button>
                    <div class="col-md-2"></div>
                    <button class="btn btn-danger" onClick={this.closeModal}>Hủy</button>
                </div>
                <br/>



           </form>
      </Popup>
            <h1 style={{"font-weight":"bold"}}>Danh sách Lớp </h1>
            <br />

            <div class="search-container">
            <h2>
            <button class="btn btn-success" onClick={this.openModal}>+ Thêm mới</button>
              <form style={{"text-align": "right"}}>
                <input type="text" name="search" placeholder="Search.." />
              </form>
            </h2>
            </div>
            <div class="table-responsive">
               <table class="table table-bordered">
                   <thead>
                       <tr style={{"background-color": "#00FFFF"}}>
                           <th>STT</th>
                           <th>Họ và tên</th>
                           <th>Ngày sinh</th>
                           <th>Giới tính</th>
                           <th>Ghi chú</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>1</td>
                           <td>Nguyễn Văn A</td>
                           <td>01/01/1997</td>
                           <td>Nam</td>
                           <td></td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Nguyễn Văn A</td>
                           <td>01/01/1997</td>
                           <td>Nam</td>
                           <td></td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Nguyễn Văn A</td>
                           <td>01/01/1997</td>
                           <td>Nam</td>
                           <td></td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Nguyễn Văn A</td>
                           <td>01/01/1997</td>
                           <td>Nam</td>
                           <td></td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Nguyễn Văn A</td>
                           <td>01/01/1997</td>
                           <td>Nam</td>
                           <td></td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Nguyễn Văn A</td>
                           <td>01/01/1997</td>
                           <td>Nam</td>
                           <td></td>
                       </tr>
                   </tbody>
               </table>
               </div>
               </div>
        );
  }
}

export default ThongTinCaNhan;
