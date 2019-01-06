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
     'font-size':'17px',
     color:'rgb(26, 236, 26)'
   };
     const styleshit1 = {
     'font-size':'24px',
     color:'rgb(26, 236, 26)'
     }
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
                   <button class="btn btn-info" onClick={this.alert}>Thêm</button>
                   <div class="col-md-2"></div>
                   <button class="btn btn-danger" onClick={this.closeModal}>Hủy</button>
               </div>
               <br/>

          </form>
      </Popup>
        <br />
            <h1 style={{"font-weight":"bold"}}>Danh sách Lớp </h1>
            <br />
            <button class="btn btn-success" onClick={this.openModal}>+ Thêm mới</button>
            <div className="spaceding1">
            <nav class="navbar navbar-light justify-content-between">
                <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            </div>
               <table class="table table-bordered table-hover">
                   <thead>
                       <tr>
                           <th>STT</th>
                           <th>Tên Lớp</th>
                           <th>Khoa</th>
                           <th>Khóa</th>
                           <th>Danh sách Lớp</th>
                           <th> </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>1</td>
                           <td>15Nh15</td>
                           <td>Công Nghệ Thông Tin</td>
                           <td>K15</td>
                           <td style={divStyle}><a href="/#/Admin/danhsachlop"><i>danhsáchlớp</i></a></td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />

                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>15Nh15</td>
                           <td>Công Nghệ Thông Tin</td>
                           <td>K15</td>
                           <td ><a href="danhsachlop.html"><i>danhsáchlớp</i></a></td>
                           <td>
                             <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                             <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />

                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>15Nh15</td>
                           <td>Công Nghệ Thông Tin</td>
                           <td>K15</td>
                           <td><a href="danhsachlop.html"><i>danhsáchlớp</i></a></td>
                           <td>
                             <i class='fas fa-pen' style={styleshit}></i> &nbsp; &nbsp;
                             <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                             <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />


                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>15Nh15</td>
                           <td>Công Nghệ Thông Tin</td>
                           <td>K15</td>
                           <td><a href="danhsachlop.html"><i>danhsáchlớp</i></a></td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />


                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>15Nh15</td>
                           <td>Công Nghệ Thông Tin</td>
                           <td>K15</td>
                           <td><a href="danhsachlop.html"><i>danhsáchlớp</i></a></td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />


                           </td>
                       </tr>
                       <tr>
                           <td>1</td>
                           <td>15Nh15</td>
                           <td>Công Nghệ Thông Tin</td>
                           <td>K15</td>
                           <td><a href="danhsachlop.html"><i>danhsáchlớp</i></a></td>
                           <td>
                           <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                           <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />

                           </td>
                       </tr>
                   </tbody>
               </table>
          </div>
        );
  }
}

export default ThongTinCaNhan;
