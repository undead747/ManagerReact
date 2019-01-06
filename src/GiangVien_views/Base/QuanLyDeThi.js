import React, { Component } from 'react';
import { Link,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchDeThiDatas} from '../../actions/fetchdata';

class ThongTinCaNhan extends Component {
  constructor(props){
    super(props);
  }
  redirect = () => {
  this.props.history.push('/GiangVien/DanhSachCauHoi' )
  }
  componentDidMount(){
    this.props.fetchDeThiDatas();
  }
  countlevel = (data) => {
    let kho = 0;
    let vua = 0;
    let de = 0;
    data.map(p =>
      p.cauhoi.map(j =>{
         if(j.level == "khó") kho = kho + 1;
        if(j.level == "vừa") vua = vua + 1;
        if(j.level == "dễ") de = de + 1;
      }
      )
    )
    return (
      <div>
      <h2>Khó: {kho} &nbsp;&nbsp; Vừa: {vua} &nbsp; &nbsp; Dễ: {de}</h2>
      </div>
    )
  }
  render() {
    const {data} = this.props;
    return (
      <div className="backgroundedit">
        <form class="formqldt" onClick={this.redirect}>
            <div class="row">
                <div class="col-md-5">
                    <h1 >Chương trình dịch</h1>
                </div>
                &nbsp; &nbsp; &nbsp;
                <div class="col-md-6">
                  {this.countlevel(data)}
                </div>
            </div>

        </form>

        <form class="formqldt">
                <div class="row">
                    <div class="col-md-5">
                        <h1 >Chương trình dịch</h1>
                    </div>
                    &nbsp; &nbsp; &nbsp;
                    <div class="col-md-6">
                        <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                    </div>
                </div>

            </form>

            <form class="formqldt">
                    <div class="row">
                        <div class="col-md-5">
                            <h1 >Chương trình dịch</h1>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <div class="col-md-6">
                            <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                        </div>
                    </div>

            </form>
            <form class="formqldt">
                    <div class="row">
                        <div class="col-md-5">
                            <h1 >Chương trình dịch</h1>
                        </div>
                        &nbsp; &nbsp; &nbsp;
                        <div class="col-md-6">
                            <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                        </div>
                    </div>

                </form>
                <form class="formqldt">
                        <div class="row">
                            <div class="col-md-5">
                                <h1 >Chương trình dịch</h1>
                            </div>
                            &nbsp; &nbsp; &nbsp;
                            <div class="col-md-6">
                                <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                            </div>
                        </div>

                </form>
                <form class="formqldt">
                         <div class="row">
                            <div class="col-md-5">
                                 <h1 >Chương trình dịch</h1>
                            </div>
                            &nbsp; &nbsp; &nbsp;
                            <div class="col-md-6">
                                <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                            </div>
                        </div>

                </form>
                <form class="formqldt">
                        <div class="row">
                            <div class="col-md-5">
                                <h1 >Chương trình dịch</h1>
                            </div>
                            &nbsp; &nbsp; &nbsp;
                            <div class="col-md-6">
                                <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                            </div>
                        </div>

                 </form>

                 <form class="formqldt">
                        <div class="row">
                            <div class="col-md-5">
                                <h1 >Chương trình dịch</h1>
                            </div>
                            &nbsp; &nbsp; &nbsp;
                            <div class="col-md-6">
                                <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                            </div>
                        </div>

                    </form>
                    <form class="formqldt">
                            <div class="row">
                                <div class="col-md-5">
                                    <h1 >Chương trình dịch</h1>
                                </div>
                                &nbsp; &nbsp; &nbsp;
                                <div class="col-md-6">
                                    <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                                </div>
                            </div>

                        </form>
                    <form class="formqldt">
                            <div class="row">
                                <div class="col-md-5">
                                    <h1 >Chương trình dịch</h1>
                                </div>
                                &nbsp; &nbsp; &nbsp;
                                <div class="col-md-6">
                                    <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                                </div>
                            </div>

                    </form>

                    <form class="formqldt">
                            <div class="row">
                                <div class="col-md-5">
                                    <h1 >Chương trình dịch</h1>
                                </div>
                                &nbsp; &nbsp; &nbsp;
                                <div class="col-md-6">
                                    <h2>Khó: 20 &nbsp;&nbsp; Vừa: 30 &nbsp; &nbsp; Dễ: 50</h2>
                                </div>
                            </div>

                    </form>

          </div>
        );
  }
}
const mapStateToProps = state => ({
  data: state.datas_test.items
})

export default connect(mapStateToProps,{fetchDeThiDatas}) (ThongTinCaNhan);
