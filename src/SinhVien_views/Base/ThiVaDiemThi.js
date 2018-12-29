import React, { Component } from 'react';

class ThongTinCaNhan extends Component {
  render() {
    const divStyle = {
    color: 'red',
    'font-weight': 'bold',
     };
    return (
      <div className="backgroundedit">
          <br/>
          <div class="container">
            <div class="table-responsive table-condensed">
            <div><h2 style= {divStyle}>Lịch học: </h2></div>
               <table class="table table-bordered ">
                   <thead>
                       <tr>
                           <th>Tiết</th>
                           <th>Thứ 2</th>
                           <th>Thứ 3</th>
                           <th>Thứ 4</th>
                           <th>Thứ 5</th>
                           <th>Thứ 6</th>
                           <th>Thứ 7</th>
                           <th style={{'font-size': '14 px'}} >Chủ Nhật</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                          <td style={{'background-color': '#CCFFFF' }}>1</td>
                          <td rowspan="4" style={{"background-color":"#FF9933"}}><br/><br/>Đại số <br/>tuyến tính<br/>(F404)</td>
                          <td rowspan="2" style={{"background-color":"#FF9933"}}><br/>Hóa đại cương<br/>(F303)</td>
                          <td></td>
                          <td></td>
                          <td rowspan="2" style={{"background-color":"#FF9933"}}><br/>Vật lý 2<br/>(F201) ></td>
                          <td></td>
                          <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>2</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>3</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>4</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>5</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>
                           <td style={{"background-color":"#CCFFFF"}}></td>

                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>6</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>7</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td rowspan="2" style={{"background-color":"#CCFFFF"}}><br/>Anh Văn 1<br/>(C205)</td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>8</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>9</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                       <tr>
                           <td style={{"background-color":"#CCFFFF"}}>10</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>
                   </tbody>
               </table>
          </div>
        </div>

      </div>
        );
  }
}

export default ThongTinCaNhan;
