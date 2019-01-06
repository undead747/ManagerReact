import React, { Component } from 'react';
import Selectbox from './Selectbox';
const options = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' }
];

class box extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cautraloi:
          {
          dapan: "",
          selectedOption:0
         }
      }
  }

  handleChange = (selectedOption1) => {
    this.setState(prevState => ({
    cautraloi: {
        ...prevState.cautraloi,
        selectedOption: selectedOption1
    }
   }))
   }
   handleChangdapan = (event) => {
     let cautraloi = Object.assign({}, this.state.cautraloi);    //creating copy of object
     cautraloi.dapan = event.target.value;                        //updating value
     this.setState({cautraloi});
    }
    loadDuLieu = () => {
      this.props.addingdapan(this.state.cautraloi);
    }
  render() {
  let cautraloi = Object.assign({}, this.state.cautraloi);

    return (
      <div className="flexcontainer">
              <Selectbox options={options}  handleChange = {this.handleChange}/>
               &nbsp; &nbsp;
              <div> <input value={cautraloi.dapan} onChange={this.handleChangdapan} type="text" placeholder="Thêm nội dung ..." style={{width: '500px'}} /><br /></div> &nbsp;
              <div class="input-group-text">
              <input onClick={this.loadDuLieu} type="checkbox" aria-label="Checkbox for following text input"></input>
              </div>
              </div>
    );
  }
}


export default box;
