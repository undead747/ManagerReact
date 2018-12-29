import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    return (
      <div className="backgroundedit">

              <div class="card-body">
                      <center class="m-t-30"> <img src="nam.jpg" class="img-circle" width="150" />
                          <h3 class="card-title m-t-10">Phạm Võ Hoài Nam</h3>
                          <h4 class="card-subtitle">MSSV: 102150286</h4>

                      </center>
                  </div>






              <div class="row">
                  <div class="col-md-2"></div>






              <div class="col-md-8">
                      <form action="http://tinhocthoidai.vn/css-dinh-nghia-san-trong-bootstrap-3.html">
                          <div class="row">
                               <label class="col-md-2">Lớp:</label>
                               <input type="text" placeholder="15TCLC2" class="form-control form-control-line;    col-md-3">
                              </input>
                               <div class="col-md-1"></div>

                               <label class="col-md-2">Giới tính: </label>
                               <select class="form-control form-control-line; col-md-3">
                                  <option>Nam</option>
                                  <option>Nữ</option>
                              </select>

                          </div>

                          <br/>

                          <div class="row">
                              <label class="col-md-2">Ngày sinh: </label>
                              <input type="date" placeholder="26/12/1997" class="form-control form-control-line; col-md-3" name="example-email" id="example-email">
                              </input>
                              <div class="col-md-1"></div>

                              <label class="col-md-2">Nơi sinh: </label>
                              <input type="text" placeholder="Da Nang" class="form-control form-control-line; col-md-3">
                              </input>
                           </div>

                           <br/>

                           <div class="row">
                                  <label class="col-md-2">Dân tộc: </label>
                                  <input type="text" placeholder="Kinh" class="form-control form-control-line; col-md-3">
                                  </input>
                                  <div class="col-md-1"></div>

                                  <label class="col-md-2">Tôn giáo: </label>
                                  <input type="text" placeholder="Không" class="form-control form-control-line; col-md-3">
                                  </input>
                          </div>

                          <br/>

                           <div class="row">
                                  <label class="col-md-2">CMND: </label>
                                  <input type="text" placeholder="123456789" class="form-control form-control-line; col-md-3">
                                  </input>
                                  <div class="col-md-1"></div>

                                  <label class="col-md-2">Ngày cấp: </label>
                                  <input type="date" placeholder="1/1/2015" class="form-control form-control-line; col-md-3">
                                  </input>
                          </div>


                          <br/>

                           <div class="row">
                                  <label class="col-md-2">Loại đào tạo: </label>
                                  <select class="form-control form-control-line; col-md-3">
                                      <option>Chính quy</option>
                                      <option></option>
                                  </select>

                                  <div class="col-md-1"></div>

                                  <label class="col-md-2">Bậc đào tạo: </label>
                                  <select class="form-control form-control-line; col-md-3">
                                          <option>Đại học</option>
                                          <option>Cao đẳng</option>
                                      </select>

                          </div>


                          <br/>

                          <div class="row">
                                 <label class="col-md-2">Ngành : </label>
                                 <select class="form-control form-control-line; col-md-3">
                                     <option>CNTT</option>
                                     <option>DTVT</option>
                                  </select>

                         </div>




                         <br/>



                          <div class="row">
                                  <div class="col-md-5"></div>
                                  <div >
                                      <Link to ="/SinhVien/ThongTinCaNhan">
                                      <button class="btn btn-success">Update Profile</button>
                                      </Link>
                                  </div>
                          </div>
                      </form>

       </div>
       </div>

      </div>
        );
  }
}

export default ThongTinCaNhan;
