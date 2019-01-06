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
    <form >

                    <h1>Danh sách Sinh Viên</h1>
                  <div class="row">
                              <div class="col-md-2 user_giangvien_margin"><button class="btn btn-success" onClick={this.openModal}>+Thêm mới</button></div>
                              <div className="user_giangvien_margin">
                              <div class="input-group mb-3">
                                <select class="custom-select" id="inputGroupSelect02">
                                  <option selected>Khoa...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <select class="custom-select" id="inputGroupSelect01">
                                  <option selected>khóa...</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <div class="input-group-append">
                                  <label class="input-group-text" for="inputGroupSelect02">Options</label>
                                </div>
                              </div>
                              </div>
                              <nav class="navbar navbar-light justify-content-between">
                                  <form class="form-inline">
                                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                  </form>
                              </nav>
                          </div>

                   <br/>




                 <table class="table table-bordered">
                    <thead >
                        <tr class="background-color">
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Khóa</th>
                            <th>Lớp Sinh Hoạt</th>
                            <th>Khoa</th>
                            <th> </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>

                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                       <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>102150200</td>
                            <td>Nguyễn Văn A</td>
                            <td>01/01/1997</td>
                            <td>K15</td>
                            <td>15NH15</td>
                            <td>CNTT</td>
                            <td>
                            <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
                            <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
                            </td>

                        </tr>
                    </tbody>
                </table>
                </form>
      </div>
        );
  }
}

export default ThongTinCaNhan;
