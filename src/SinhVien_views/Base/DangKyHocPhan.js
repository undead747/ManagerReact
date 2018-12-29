import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ThongTinCaNhan extends Component {
  render() {
    return (
      <div className="backgroundedit">
                      <table class="table table-bordered" >
                              <thead class="setfont">
                                  <tr>
                                      <th>STT</th>
                                      <th>Mã lớp học phần</th>
                                      <th>Tên học phần</th>
                                      <th>Số tín chỉ</th>
                                      <th>Giảng viên</th>
                                      <th>Thời khóa biểu</th>
                                      <th>Tuần học</th>
                                      <th>Loại học phần</th>
                                      <th>Học phí</th>
                                      <th>Tình trạng</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>000001</td>
                                      <td>Chương trình dịch</td>
                                      <td>2</td>
                                      <td>Nguyễn Văn A</td>
                                      <td>T5: 2-5</td>
                                      <td>3-10</td>
                                      <td>Tùy chọn</td>
                                      <td>500.000</td>
                                      <td>60/60</td>
                                      <td><a href="#">Xóa</a></td>
                                  </tr>
                                  <tr>
                                      <td>1</td>
                                      <td>000001</td>
                                      <td>Chương trình dịch</td>
                                      <td>2</td>
                                      <td>Nguyễn Văn A</td>
                                      <td>T5: 2-5</td>
                                      <td>3-10</td>
                                      <td>Tùy chọn</td>
                                      <td>500.000</td>
                                      <td>60/60</td>
                                      <td><a href="#">Xóa</a></td>
                                  </tr>
                                  <tr>
                                      <td>1</td>
                                      <td>000001</td>
                                      <td>Chương trình dịch</td>
                                      <td>2</td>
                                      <td>Nguyễn Văn A</td>
                                      <td>T5: 2-5</td>
                                      <td>3-10</td>
                                      <td>Tùy chọn</td>
                                      <td>500.000</td>
                                      <td>60/60</td>
                                      <td><a href="#">Xóa</a></td>
                                  </tr>
                                  <tr>
                                      <td>1</td>
                                      <td>000001</td>
                                      <td>Chương trình dịch</td>
                                      <td>2</td>
                                      <td>Nguyễn Văn A</td>
                                      <td>T5: 2-5</td>
                                      <td>3-10</td>
                                      <td>Tùy chọn</td>
                                      <td>500.000</td>
                                      <td>60/60</td>
                                      <td><a href="#">Xóa</a></td>
                                  </tr>
                                  <tr>
                                      <td>1</td>
                                      <td>000001</td>
                                      <td>Chương trình dịch</td>
                                      <td>2</td>
                                      <td>Nguyễn Văn A</td>
                                      <td>T5: 2-5</td>
                                      <td>3-10</td>
                                      <td>Tùy chọn</td>
                                      <td>500.000</td>
                                      <td>60/60</td>
                                      <td><a href="#">Xóa</a></td>
                                  </tr>
                                  <tr>
                                      <td>1</td>
                                      <td>000001</td>
                                      <td>Chương trình dịch</td>
                                      <td>2</td>
                                      <td>Nguyễn Văn A</td>
                                      <td>T5: 2-5</td>
                                      <td>3-10</td>
                                      <td>Tùy chọn</td>
                                      <td>500.000</td>
                                      <td>60/60</td>
                                      <td><a href="#">Xóa</a></td>
                                  </tr>
                              </tbody>
                          </table>
                          <div class="row">

                              <div class="col-md-6"><h4 class="setcolor">Tổng số tín chỉ: 6/10  Học phí: 3000.000 </h4></div>
                              <div class="col-md-4"></div>
                          </div>

                          <div class="modal">
                              <input id="modal" type="checkbox" name="modal" tab-index="1"></input>
                              <label for="modal" >Đăng kí</label>
                              <div class="modal__overlay">
                                  <div class="modal__box">
                                      <label for="modal">&#10006;</label>
                                      <h2>Are you sure ?</h2>
                                      <p>Bạn có muốn xác nhận đăng ký những học phần vừa chọn không ?</p>
                                      <div className = "flexcontainer" >
                                      <div className="editwidthbutton">
                                      <Link to = "/SinhVien/HocPhanDangHoc">
                                      <button class="btn btn-outline-dark btn-block">yes</button>
                                      </Link>
                                      </div>

                                      <div className="editwidthbutton">
                                      <Link to = "/SinhVien/DangKyHocPhan">
                                      <button class="btn btn-outline-dark btn-block">no</button>
                                      </Link>
                                      </div>

                                      </div>
                                  </div>
                              </div>
                          </div>

                          <br/>
                          <br/>
                          <br/>

                          <table class="table table-bordered">
                                  <thead class="setfont">
                                      <tr>
                                          <th>STT</th>
                                          <th>Mã lớp học phần</th>
                                          <th>Tên học phần</th>
                                          <th>Số tín chỉ</th>
                                          <th>Giảng viên</th>
                                          <th>Thời khóa biểu</th>
                                          <th>Tuần học</th>
                                          <th>Loại học phần</th>
                                          <th>Học phí</th>
                                          <th>Tình trạng</th>
                                          <th></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>000001</td>
                                          <td>Chương trình dịch</td>
                                          <td>2</td>
                                          <td>Nguyễn Văn A</td>
                                          <td>T5: 2-5</td>
                                          <td>3-10</td>
                                          <td>Tùy chọn</td>
                                          <td>500.000</td>
                                          <td>60/60</td>
                                          <td><a href="#" class="disabled">Đăng kí</a></td>
                                      </tr>
                                      <tr>
                                          <td>1</td>
                                          <td>000001</td>
                                          <td>Chương trình dịch</td>
                                          <td>2</td>
                                          <td>Nguyễn Văn A</td>
                                          <td>T5: 2-5</td>
                                          <td>3-10</td>
                                          <td>Tùy chọn</td>
                                          <td>500.000</td>
                                          <td>40/60</td>
                                          <td><a href="#">Đăng kí</a></td>
                                      </tr>
                                      <tr>
                                          <td>1</td>
                                          <td>000001</td>
                                          <td>Chương trình dịch</td>
                                          <td>2</td>
                                          <td>Nguyễn Văn A</td>
                                          <td>T5: 2-5</td>
                                          <td>3-10</td>
                                          <td>Tùy chọn</td>
                                          <td>500.000</td>
                                          <td>60/60</td>
                                          <td><a href="#" class="disabled">Đăng kí</a></td>
                                      </tr>
                                      <tr>
                                          <td>1</td>
                                          <td>000001</td>
                                          <td>Chương trình dịch</td>
                                          <td>2</td>
                                          <td>Nguyễn Văn A</td>
                                          <td>T5: 2-5</td>
                                          <td>3-10</td>
                                          <td>Tùy chọn</td>
                                          <td>500.000</td>
                                          <td>40/60</td>
                                          <td><a href="#">Đăng kí</a></td>
                                      </tr>
                                      <tr>
                                          <td>1</td>
                                          <td>000001</td>
                                          <td>Chương trình dịch</td>
                                          <td>2</td>
                                          <td>Nguyễn Văn A</td>
                                          <td>T5: 2-5</td>
                                          <td>3-10</td>
                                          <td>Tùy chọn</td>
                                          <td>500.000</td>
                                          <td>60/60</td>
                                          <td><a href="#" class="disabled">Đăng kí</a></td>
                                      </tr>
                                      <tr>
                                          <td>1</td>
                                          <td>000001</td>
                                          <td>Chương trình dịch</td>
                                          <td>2</td>
                                          <td>Nguyễn Văn A</td>
                                          <td>T5: 2-5</td>
                                          <td>3-10</td>
                                          <td>Tùy chọn</td>
                                          <td>500.000</td>
                                          <td>40/60</td>
                                          <td><a href="#">Đăng kí</a></td>
                                      </tr>
                                  </tbody>
                              </table>
          </div>
        );
  }
}

export default ThongTinCaNhan;
