import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: '#666666',
     };
     const divStyle1 = {
     color: 'red',
      };
    return (
      <div className="backgroundedit">
        <br/>
        <table>
            <thead>
            <h4 style={divStyle}>Đề thi</h4>
                <div align="center">
                    <h2 style={divStyle1}>CHƯƠNG TRÌNH DỊCH</h2>
                    <h6>Mã học phần: <strong>00001</strong></h6>
                    <h10>Thời gian: 90 phút</h10>
                    <br/>
                    <br/>
                    <Link to="/SinhVien/thi">
                    <h2><button class="btn btn-success">Bắt đầu làm bài</button></h2>
                    </Link>
                </div>
            </thead>
        </table>

      </div>
        );
  }
}

export default ThongTinCaNhan;
