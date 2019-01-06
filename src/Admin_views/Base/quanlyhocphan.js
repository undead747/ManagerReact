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
    return (
      <div className="backgroundedit">
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
                     <div class="col-md-3">Tên học phần: </div> <input type="text" style={{"width":"470px"}} />
                </div> <br/>


                 <div class="row">
                     <div class="col-md-1"></div>
                     <div class="col-md-3">Mã học phần:</div>  <input type="text"  style={{"width":"470px"}} />
                </div> <br/>

                <div class="row">
                     <div class="col-md-1"></div>
                     <div class="col-md-3">Số tín chỉ: </div>  <select>
                         <option >1</option>
                         <option >Item 2</option>
                         <option >Item 3</option>
                         <option >Item 4</option>
                     </select>
                     <div class="col-md-1"></div>

                     <div class="col-md-2">Loại học phần: </div><select>
                         <option >Tiên quyết</option>
                         <option >Item 2</option>
                         <option >Item 3</option>
                         <option >Item 4</option>
                     </select>
                 </div> <br/>



                 <div class="row">
                     <div class="col-md-8"></div>
                     <button className="btn btn-link"> <i className="fas fa-plus" style={{fontSize: '24px', color: 'rgb(82, 121, 240)blue'}} /> Thêm câu hỏi</button>
                 </div>

                 <div class="row">
                     <div class="col-md-4"></div>
                     <button class="btn btn-info" onClick={this.alert}>Thêm</button>
                     <div class="col-md-2"></div>
                     <button class="btn btn-danger" onClick={this.closeModal}>Hủy</button>
                 </div>
                 <br/>



            </form>
      </Popup>
   <div class="table-responsive table-condensed">
              <br/>
              <h1 style={{"font-weight":"bold"}}>Danh sách Học Phần </h1>
              <br/>

            <div class="search-container">
            <button class="btn btn-success" onClick={this.openModal}>+ Thêm mới</button>
            <div className="spaceding1">
            <nav class="navbar navbar-light justify-content-between">
                <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            </div>
            </div>
               <table class="table table-bordered table-hover">
                   <thead>
                       <tr>
                           <th>STT</th>
                           <th>Tên Học Phần</th>
                           <th>Mã Học Phần</th>
                           <th>Số tín chỉ</th>
                           <th>Loại Học Phần</th>
                           <th>Số lớp đang mở</th>
                           <th>   </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>1</td>
                           <td>Chương trình dịch</td>
                           <td>000001</td>
                           <td>2</td>
                           <td>Tùy chọn</td>
                           <td>2</td>
                           <td>
                             <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                             <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Chương trình dịch</td>
                           <td>000001</td>
                           <td>2</td>
                           <td>Tùy chọn</td>
                           <td>2</td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Chương trình dịch</td>
                           <td>000001</td>
                           <td>2</td>
                           <td>Tùy chọn</td>
                           <td>2</td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Chương trình dịch</td>
                           <td>000001</td>
                           <td>2</td>
                           <td>Tùy chọn</td>
                           <td>2</td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Chương trình dịch</td>
                           <td>000001</td>
                           <td>2</td>
                           <td>Tùy chọn</td>
                           <td>2</td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>Chương trình dịch</td>
                           <td>000001</td>
                           <td>2</td>
                           <td>Tùy chọn</td>
                           <td>2</td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>
                       </tr>
                   </tbody>
               </table>
          </div>
      </div>
        );
  }
}

export default ThongTinCaNhan;
