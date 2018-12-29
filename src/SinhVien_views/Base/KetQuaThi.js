import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: 'red',
     };
    return (
      <div className="backgroundedit">
            <br/>
            <br/>
            <table>
                <thead>
                    <div align="center">
                        <h2 style={divStyle}>KẾT QUẢ THI </h2>
                        <img src="./iconn.png" />
                        <h5>Số câu đúng: 40/50</h5>
                        <h5>Điểm thi:<strong> 8.0</strong> </h5>

                        <h2>
                        <Link to="/SinhVien/LichThi">
                        <button class="btn btn-success">Quay lại</button>
                        </Link>
                        </h2>

                    </div>
                </thead>
            </table>

      </div>
        );
  }
}

export default ThongTinCaNhan;
