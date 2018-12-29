import React, { Component } from 'react';

class ThongTinCaNhan extends Component {
  render() {
    return (
      <div className="backgroundedit">

         <form class="formcss">
             <h4>Chương trình dịch - 00001</h4>
             <br/>
             <p>Lớp học phần: &nbsp; 15NH15</p>

             <div class="row">

                 <div class="col-md-4">Tổng số câu: &nbsp; &nbsp; Khó: <select>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="2">3</option>
                         <option value="2">4</option>
                          </select>
                 </div>
                 <div class="col-md-2"> Vừa: <select>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="2">3</option>
                         <option value="2">4</option>
                          </select>
                 </div>
                 <div class="col-md-2"> Dễ: <select>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="2">3</option>
                         <option value="2">4</option>
                          </select>
                 </div>
             </div>
             <br/>

             <div>Thời gian:&nbsp; <input type="datetime" placeholder="03/10/2014"></input> &nbsp; đến: &nbsp; <input type="datetime" placeholder="03/10/2014"></input> &nbsp;
                 &nbsp; <button class="btn btn-primary">Mở đề</button> &nbsp;
                 <button class="btn btn-primary">Kết thúc</button></div>
             <br/>

         </form>


             <form class="formcss">
                 <div class="row">
                     <h4 class="col-md-8">Chương trình dịch - 00001</h4>
                     <a href="#"><p class="formcss1">Đang diễn ra</p></a>
                 </div>

                 <br/>
                 <p>Lớp học phần: &nbsp; 15NH15</p>

                 <div class="row">

                     <div class="col-md-4">Tổng số câu: &nbsp; &nbsp; Khó: <select>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="2">3</option>
                             <option value="2">4</option>
                              </select>
                     </div>
                     <div class="col-md-2"> Vừa: <select>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="2">3</option>
                             <option value="2">4</option>
                              </select>
                     </div>
                     <div class="col-md-2"> Dễ: <select>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="2">3</option>
                             <option value="2">4</option>
                              </select>
                     </div>
                 </div>
                 <br/>

                 <div>Thời gian:&nbsp; <input type="datetime" placeholder="03/10/2014"></input> &nbsp; đến: &nbsp; <input type="datetime" placeholder="03/10/2014"></input> &nbsp;
                     &nbsp; <button class="btn btn-primary">Mở đề</button> &nbsp;
                     <button class="btn btn-primary">Kết thúc</button></div>
                 <br/>

             </form>


                 <form class="formcss" >

                     <h4>Chương trình dịch - 00001</h4>

                     <br/>
                     <p>Lớp học phần: &nbsp; 15NH15</p>

                     <div class="row">

                         <div class="col-md-4">Tổng số câu: &nbsp; &nbsp; Khó: <select>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="2">3</option>
                                 <option value="2">4</option>
                                  </select>
                         </div>
                         <div class="col-md-2"> Vừa: <select>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="2">3</option>
                                 <option value="2">4</option>
                                  </select>
                         </div>
                         <div class="col-md-2"> Dễ: <select>
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="2">3</option>
                                 <option value="2">4</option>
                                  </select>
                         </div>
                     </div>
                     <br/>

                     <div>Thời gian:&nbsp; <input type="datetime" placeholder="03/10/2014"></input> &nbsp; đến: &nbsp; <input type="datetime" placeholder="03/10/2014"></input> &nbsp;
                         &nbsp; <button class="btn btn-primary">Mở đề</button> &nbsp;
                         <button class="btn btn-primary">Kết thúc</button></div>
                     <br/>

                 </form>

          </div>
        );
  }
}

export default ThongTinCaNhan;
