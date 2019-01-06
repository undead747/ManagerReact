import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import Popupcomponent from './ThemCauHoi';
import ReactDOM from 'react-dom';
import {postCauHoi} from '../../actions/postdata';
import {fetchDeThiDatas} from '../../actions/fetchdata';
import {connect} from "react-redux";

class ThongTinCaNhan extends Component {
  constructor(props){
    super(props);
    this.state = {
      multiple: false
    }
  }
  componentDidMount(){
    this.props.fetchDeThiDatas();
  }
 setmultiple = (object) => {
   let count = 0;
    object.map(p =>{
      if(p.selectedOption > 0) count = count + 1;
    }
    )
  if( count > 1) return(
     object.map(p =>
      <div style={{fontSize: '18px'}}>
         <div className="radio">
          <label>
          {
            (p.selectedOption > 0 ) ? (
            <input type="checkbox" value="option1" checked={true} />
          ) : (
            <input type="checkbox" value="option1" checked={false} />
          )
        }
            {p.dapan}
           <span className="spaceding">
             {p.selectedOption}%
            </span>
          </label>
        </div>
     </div>
    )
  )
  else return(
    object.map(p =>
     <div style={{fontSize: '18px'}}>
        <div className="radio">
         <label>
         {
           (p.selectedOption > 0 ) ? (
           <input type="radio" value="option1" checked={true} />
         ) : (
           <input type="radio" value="option1" checked={false} />
         )
       }
           {p.dapan}
          <span className="spaceding">
            {p.selectedOption}%
           </span>
         </label>
       </div>
    </div>
   )
  )
  }

  setdefault = () => {
    this.state.multiple({multiple: false})
  }

  componentWillReceiveProps(nextProps) {
    const {data: nextdata} = nextProps;

    if(nextdata !== this.props.data){
      this.props.fetchDeThiDatas();
    }
  }
  render() {
const {data} = this.props;
    return (
      <div className="backgroundedit">
      <Popupcomponent
      ref={instance => { this.Popupcomponent = instance; }}
      addCauHoi = {this.props.postCauHoi}
      />

  <h2 style={{textAlign: 'center', marginTop: '10px'}}>Chương trình dịch</h2> <br />
 <div class="row">
     <div class="col-md-3"></div>
     <button class="btn btn-danger" onClick={() => { this.Popupcomponent.openModal(); }}>Thêm câu hỏi</button>
 </div>
 {
   data.map(p =>
     p.cauhoi.map(t =>
 <form  class="formcss" >
     <div class="row">
         <h4 class="col-md-9">{t.cauhoi}</h4>
         <p style={{color: 'red', fontSize: '20px'}}>{t.level}</p> &nbsp; &nbsp;
         <i className="fas fa-pen" style={{fontSize: '24px', color: 'rgb(26, 236, 26)'}} /> &nbsp; &nbsp;
         <i className="fas fa-chair" style={{fontSize: '24px', color: 'red'}} />
     </div>
     {this.setmultiple(t.dapan)}

 </form>

))}
 </div>
        );
  }
}
const mapStateToProps = state => ({
  data: state.datas_test.items
})
export default connect(mapStateToProps,{postCauHoi,fetchDeThiDatas}) (ThongTinCaNhan);
