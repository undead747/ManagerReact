import React, { Component } from 'react';

class ThongTinCaNhan extends Component {
  render() {
    return (
      <div className="backgroundedit">
       <form class="formcss2">
           <br/>
           <div class="row">
               <div class="col-md-1"></div>
                 <div>Nội dung: <input type="text" style={{width: '500px', height: '100px'}} /></div>
           </div> <br/>

            <div class="row">
                <div class="col-md-1"></div>
                 <div>
                     <select>
                         <option>0%</option>
                         <option>25%</option>
                         <option>50%</option>
                         <option>75%</option>
                         <option>100%</option>
                     </select>
                 </div>
                 &nbsp; &nbsp;
                  <div> <input type="text" placeholder="Thêm nội dung ..." style={{width: '500px'}} /><br /></div> &nbsp;
                  <i className="fa fa-close" style={{fontSize: '24px'}} />
            </div>

            <br/>

            <div class="row">
                    <div class="col-md-1"></div>
                     <div>
                         <select>
                             <option>0%</option>
                             <option>25%</option>
                             <option>50%</option>
                             <option>75%</option>
                             <option>100%</option>
                         </select>
                     </div>
                     &nbsp; &nbsp;
                      <div> <input type="text" placeholder="Thêm nội dung ..." style={{width: '500px'}} /><br /></div> &nbsp;
                      <i className="fa fa-close" style={{fontSize: '24px'}} />
                </div>

            <br/>
           <div class="row">
                <div class="col-md-1"></div>
                 <div>
                     <select>
                         <option>0%</option>
                         <option>25%</option>
                         <option>50%</option>
                         <option>75%</option>
                         <option>100%</option>
                     </select>
                 </div>
                 &nbsp; &nbsp;
                  <div> <input type="text" placeholder="Thêm nội dung ..." style={{width: '500px'}} /><br /></div> &nbsp;
                  <i className="fa fa-close" style={{fontSize: '24px'}} />
            </div>

            <div class="row">
                <div class="col-md-2"></div>
                <button className="btn btn-link"> <i className="fas fa-plus" style={{fontSize: '24px', color: 'rgb(82, 121, 240)blue'}} /> Thêm câu hỏi</button>
            </div>

            <div class="row">
                <div class="col-md-1"></div>
                    <div>Mức độ: &nbsp; &nbsp;
                            <select>
                                <option>Khó</option>
                                <option>Vừa</option>
                                <option>Dễ</option>
                            </select>
                    </div>
            </div>
            <br/>

            <div class="row">
                <div class="col-md-4"></div>
                <button class="btn btn-info">Save</button>
                <div class="col-md-2"></div>
                <button class="btn btn-danger">Cancle</button>
            </div>
            <br/>

       </form>

          </div>
        );
  }
}

export default ThongTinCaNhan;
