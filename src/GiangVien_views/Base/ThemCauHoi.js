import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Selectlabel from './selectlabel';
import Selectbox from './Selectbox';

const options = [
  { value: "khó", label: 'khó' },
  { value: "vừa", label: 'vừa' },
  { value: "dễ", label: 'dễ' }
];

class ThongTinCaNhan extends Component {
constructor(props) {
    super(props);
    this.state = {
      cauhoi: "",
      arr: [],
      arrdapan:[],
      open: false,
      level: "khó",
    }
}
handleChange = (selectedOption1) => {
    this.setState({level: selectedOption1})
   }

addingdapan = (object) => {
  let arrdapan1 = this.state.arrdapan;
  arrdapan1.push(object);
  this.setState({arrdapan: arrdapan1});
}
openModal = () => {
   this.setState({open: true})
 }
 closeModal = () => {
   this.setState({ open: false})
 }
delete1 = (object) => {
  let ar = this.state.arr;
  let ar1 = ar.filter(function(value, index, arr){
    return value != object;
});
  this.setState({arr: ar1})
}
countLoop = () => {
  let ar = this.state.arr;
  if(ar.length < 5){
  ar.push(
    <Selectlabel addingdapan = {this.addingdapan}/>
  );
}
  this.setState({arr: ar});
}
loadDuLieu = () => {
  let cauhoi = this.state.cauhoi;
  let dapan = this.state.arrdapan;
  let level = this.state.level;

  let allquestion = [
    {
      cauhoi,
      dapan,
      level
    }
  ];
  this.props.addCauHoi(allquestion);
  alert("câu hỏi đã đươc thêm vào !");

}

question = (event) => {
  this.setState({cauhoi: event.target.value})
}
  render() {
    const arr = this.state.arr;
    const { selectedOption } = this.state;
    return (
      <Popup
        className="box-popup3"
         open={this.state.open}
         closeOnDocumentClick
         onClose={this.closeModal}
      >
      <div className="backgroundedit">
       <form class="formcss2">
           <br/>
           <div class="row">
               <div class="col-md-1"></div>
                 <div>Nội dung: <textarea type="text" value={this.state.cauhoi} style={{width: '500px', height: '100px'}} onChange={this.question}></textarea></div>
           </div> <br/>
            <br/>
              <Selectlabel addingdapan = {this.addingdapan}/>
              <Selectlabel addingdapan = {this.addingdapan}/>
            {
              arr.map(p =>
                <div className="margin-texbox flexcontainer">
                {p}
                <i className="fa fa-close" style={{fontSize: '24px'}} onClick={() => this.delete1(p)}/>
                </div>
              )
            }
            <div class="row">
                <div class="col-md-2"></div>
                <button className="btn btn-link" onClick={this.countLoop}> <i className="fas fa-plus" style={{fontSize: '24px', color: 'rgb(82, 121, 240)blue'}} /> Thêm câu hỏi</button>
            </div>

            <div class="row">
                <div class="col-md-1"></div>
                    <div>Mức độ: &nbsp; &nbsp;
                            <Selectbox options={options}  handleChange = {this.handleChange}/>
                    </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-md-4"></div>
                <button class="btn btn-info" onClick={this.loadDuLieu}>Save</button>
                <div class="col-md-2"></div>
                <button class="btn btn-danger" onClick={this.closeModal}>Cancle</button>
            </div>
            <br/>

       </form>
          </div>
        </Popup>
        );
  }
  }

export default  ThongTinCaNhan;
