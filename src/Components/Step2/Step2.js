import "./Step2.scss";
import {useState} from "react";
import WhatsappIcon from "../../Assets/whatsapp.png";
const Step2 = (props) => {
    const { form, setForm } = props;
    const {step,setStep}=props;
    const [next,setNext]=useState(false);
    
    return (
      <div className="screentwo">
           
      <br></br>
      
          <div className="blockpart">
                 <div className="flexset">
                   <div className="flexstart">journey details</div>
                   <div className="flexend"><button className="flexend-button" onClick={(e)=>{setStep(step-1)}}>edit&nbsp;<i class="fas fa-pencil-alt"></i></button></div>
                 </div>

                 
                 <br></br>
                 <div>
                     <div className="fontset">{form.sourcelocation}/{form.destination}</div>
                     <div className="fontset">{form.travellers},{form.cartype}</div>
                 </div>
                 <br></br>
                 <br></br>
                 
                 <hr className="blockpart-line"></hr>
                 <div class="centerparent">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTaTkpSn4up0QNc5rYk92SUZ671P-Xl7mKejr5Vw0RbVGF80zmHYXPIv8OPzZ2mQFbXU&usqp=CAU" alt="rupeeimage" height="70" width="70"></img>
                 <input id="amount" name="rate" type="text" value={form.rate} placeholder="0" onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})}/>
                 </div>
                 <br></br>
                 <br></br>
                 <div className="centerpart1">
                  
                   
                   <input type="checkbox"  id="rate" name="negotiable" defaultChecked={form.negotiable} onChange={(e)=>{
                   setForm({...form,[e.target.name]:e.target.checked})
                 }}/>rate negotiable
                  
                  
                 
                 </div>
                  {!next?(<button className="buttons1" onClick={()=>{setNext(true)}}>Next</button>):("")}
                 {next?(
                   <div>
                   
                 <div className="form-group1">

                            <input type="text" name="phonenumber" className="form-control" value={form.phonenumber} id="location" autoComplete="off" onChange={(e)=>{
                              setForm({...form,[e.target.name]:e.target.value})
                            }} required></input>
                            <label htmlFor="phonenumber">Enter phonenumber*</label>
                            <div className="seth">
                            <input type="checkbox"  id="whatsapp" />get updates on <img src={WhatsappIcon} alt="whatsapp" height="20" width="20"></img><b>whatsapp</b>
                            </div>
                        </div>
                        <div className="form-group2">
                          <input type="text" name="username" className="form-control" value={form.username} placeholder="Enter Name" onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}></input>
                          <label>Enter your name*</label>
                        </div>
                    <div className="form-group3">
                      <input type="text" className="form-control" name="remarks" value={form.remarks} placeholder="remarks(optional)" onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}}></input>
                      <label>Enter Remarks(optional)*</label>
                    </div>
                 {/* <Buttons text="next" track={1} onClick={onButtonClick}/> */}
                 <button className="buttons"  onClick={() => setStep(step + 1)}>Verify Via OTP</button>
                 </div>
                 ):("")}
          </div>
          <br></br>
         
         
      
      
  </div>
    );
  };
  
  export default Step2;