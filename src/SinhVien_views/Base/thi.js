import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import axios from 'axios';
import {fetchDeThiDatas} from '../../actions/fetchdata';
import {connect} from 'react-redux';

class ThongTinCaNhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      store: [],
      open: true,
      open1:false
     }
  }
  componentDidMount(){
    this.props.fetchDeThiDatas();
  }
  openModal = () => {
    this.setState({open: true})
  }
  openModal1 = () => {
    this.setState({open1: true})
  }
  closeModal = () => {
    this.setState({ open: false})
  }
  closeModal1 = () => {
    this.setState({ open1: false})
  }
  render() {
    const {data} = this.props;
    const divStyle = {
    color: '#666666',
     };
     const divStyle1 = {
     color: 'red',
      };
    return (
    <div className="backgroundedit">
      <div className="time">
      Thời gian thi : 10
      </div>
      <Popup
        className="box-popup1"
         open={this.state.open}
         closeOnDocumentClick
         onClose={this.closeModal}
      >
      <div className="box-margin">
      <table>
          <thead>
          <h4 style={divStyle}>Đề thi</h4>
                  <h2 style={divStyle1}>CHƯƠNG TRÌNH DỊCH</h2>
                  <h6>Mã học phần: <strong>00001</strong></h6>
                  <h1>Thời gian: 90 phút</h1>
                  <br/>
                  <br/>
                  <Link to="/SinhVien/thi">
                  <h2><button class="btn btn-success" onClick={this.closeModal}>Bắt đầu làm bài</button></h2>
                  </Link>
          </thead>
      </table>
      </div>
      </Popup>

       	<div>
         <br/>

         <h3 style={divStyle}><strong> ĐỀ THI CUỐI KỲ MÔN CHƯƠNG TRÌNH DỊCH</strong></h3>
         <div class="container mt-3">
         {
           data.map(user =>
       		<div class="alert alert-info">
               <h5>Câu {data.indexOf(user) + 1}: {user.question}</h5>
               <ul>
               <label>
                <input type="radio" value="option1" checked={false} />
                {user.A}
               </label>
               <br/>
               <label>
                <input type="radio" value="option1" checked={false} />
                {user.B}
               </label>
               <br/>
               <label>
                <input type="radio" value="option1" checked={true} />
                {user.C}
               </label>
               <br/>
               <label>
                <input type="radio" value="option1" checked={false} />
                {user.D}
               </label>
               </ul>
            </div>
       )}
            <div align="center">
               <div>
               <button class="btn btn-danger" onClick={this.openModal1}>Nộp bài</button>
               </div>
            </div>
            <Popup
              className="box-popup2"
               open={this.state.open1}
               closeOnDocumentClick
               onClose={this.closeModal1}
            >
            <div className="box-margin">
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
            </Popup>
            <br/>
            </div>


         </div>
         <div>

         </div>
         </div>

        );
  }
}
const mapStateToProps = (state) => ({
  data: state.datas_test.items
})
export default  connect(mapStateToProps,{fetchDeThiDatas}) (ThongTinCaNhan);
