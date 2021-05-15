import "./Step3.scss";
const Step3 = (props) => {
    const { form } = props;
    const {step,setStep}=props;
    const {secret}=props;
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
                 <div className="flexset">
                   <div className="flexstart">Bid details</div>
                   
                 </div>

                 
                 <br></br>
                 
                 <div className="flexset1">
                   <div className="flexstart">
                   <div className="fontset1">+91-{form.phonenumber}</div>
                     <div className="fontset1">{form.username}</div>
                     <div className="fontset1">{form.remarks}</div>
                   </div>
                    <div className="flexend1">
                    <div >&#8377;{form.rate}</div>
                    <div className="colorsets">{form.negotiable?("negotiable"):("fixed rate")}</div>
                    </div>
                 </div>   
                 <hr className="blockpart-line"></hr>
                 <div>
                   <p>We have send an OTP to your Mobile number,please enter it below to submit your bid<b>{form.phonenumber}</b><button className="buttons2" onClick={(e)=>{setStep(step-1)}}>edit&nbsp;<i class="fas fa-pencil-alt"></i></button></p>
                 
                 </div>
                     <button className="buttons"  onClick={() => setStep(step + 1)}>Verify Via OTP</button>
            
                 </div>
                
          </div>
       
         
         
      
      
 
        

    )
  }
  
  export default Step3;