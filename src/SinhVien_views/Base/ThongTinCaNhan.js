import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    return (
      <div className="backgroundedit">

                <div class="card-body">
                        <center class="m-t-30"> <img src="./nam.jpg" class="img-circle" width="150" />
                            <h3 class="card-title m-t-10">Phạm Võ Hoài Nam</h3>
                            <h4 class="card-subtitle">MSSV: 102150286</h4>
                            <div className = "flexcontainer" >
                            <div class="icon-wrench icons font-2xl d-block mt-4"></div>

                            <div className="editwidthbutton">
                            <Link to = "/SinhVien/edit">
                            <button class="btn btn-outline-dark btn-block">edit info</button>
                            </Link>
                            </div>

                            </div>
                        </center>
                    </div>






                <div class="row">
                    <div class="col-md-2"></div>






                <div class="col-md-8">
                        <form >
                            <div class="row">
                                 <label class="col-md-2">Lớp:</label>
                                 <input type="text" value="15TCLC2" class="form-control form-control-line;    col-md-3" readonly >
                                  </input>
                                 <div class="col-md-1"></div>

                                 <label class="col-md-2">Giới tính: </label>
                                 <input type="text" value="Nam" class="form-control form-control-line;    col-md-3" readonly >
                                 </input>
                                 <div class="col-md-1"></div>



                                 </div>

                            <br/>

                            <div class="row">
                                <label class="col-md-2">Ngày sinh: </label>
                                <input type="text" value="26/12/1997" class="form-control form-control-line;    col-md-3" readonly>
                                </input>
                                <div class="col-md-1"></div>

                                <label class="col-md-2">Nơi sinh: </label>
                                <input type="text" value="Da Nang" class="form-control form-control-line; col-md-3" readonly>
                                </input>
                             </div>

                             <br/>

                             <div class="row">
                                    <label class="col-md-2">Dân tộc: </label>
                                    <input type="text" value="Kinh" class="form-control form-control-line; col-md-3" readonly>
                                    </input>
                                    <div class="col-md-1"></div>

                                    <label class="col-md-2">Tôn giáo: </label>
                                    <input type="text" value="Không" class="form-control form-control-line; col-md-3" readonly>
                                    </input>
                            </div>

                            <br/>

                             <div class="row">
                                    <label class="col-md-2">CMND: </label>
                                    <input type="text" value="123456789" class="form-control form-control-line; col-md-3" readonly>
                                    </input>
                                    <div class="col-md-1"></div>

                                    <label class="col-md-2">Ngày cấp: </label>
                                    <input type="text" value="01/01/2015" class="form-control form-control-line;    col-md-3" readonly>
                                    </input>
                            </div>


                            <br/>

                             <div class="row">
                                    <label class="col-md-2">Loại đào tạo: </label>
                                    <input type="text" value="Chính quy" class="form-control form-control-line;    col-md-3" readonly>
                                    </input>
                                    <div class="col-md-1"></div>

                                    <label class="col-md-2">Bậc đào tạo: </label>
                                    <input type="text" value="Đại học" class="form-control form-control-line;    col-md-3" readonly>
                                    </input>
                            </div>


                            <br/>

                            <div class="row">
                                   <label class="col-md-2">Ngành : </label>
                                   <input type="text" value="CNTT" class="form-control form-control-line;    col-md-3" readonly>
                                   </input>
                           </div>


                           <br/>

                           <div class="row">
                                <label class="col-md-2">Mật khẩu cũ: </label>
                                <input type="password" placeholder="******" class="form-control form-control-line;    col-md-2" >
                                </input>

                                <label class="col-md-2">Mật khẩu mới: </label>
                                <input type="password" placeholder="******" class="form-control form-control-line;    col-md-2">
                                </input>
                                <label class="col-md-2">Xác nhận: </label>
                                <input type="password" placeholder="******" class="form-control form-control-line;    col-md-2">
                                </input>
                        </div>

                        <br/>


                        <div class="row">
                                <div class="col-md-5"></div>
                                <div >
                                    <button class="btn btn-success">Đổi mật khẩu</button>
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
