// import Buttons from "../Button/Button";
import "./Step1.scss";

const Step1 = (props) => {
    const { form, setForm } = props;
    const {step,setStep}=props;
    return (
      <div>
            <br></br>
            <br></br>
            <div className="form-parts">
                <form className="screen1-form">
                    <div className="form-justify">
                        <div className="form-group">

                            <input type="text" name="sourcelocation" className="form-control" value={form.sourcelocation} id="location" autoComplete="off" onChange={(e)=>{
                              setForm({...form,[e.target.name]:e.target.value})
                            }} required></input>
                            <label htmlFor="location">Source Location*</label>
                        </div>
                        <div className="form-group">

                            <input type="text" name="destination" className="form-control" value={form.destination} id="destination" autoComplete="off" onChange={(e)=>{
                              setForm({...form,[e.target.name]:e.target.value})
                            }} required></input>
                            <label htmlFor="destination">Destination*</label>

                        </div>



                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">

                        <select id="cars" className="form-control select" value={form.cartype} onChange={(e)=>{setForm({...form,[e.target.name]:e.target.value})}} name="cartype">
                            <option label="Sedan">Sedan</option>
                            <option label="HatchBack">HatchBack</option>
                            <option label="Coupe">coupe</option>
                            <option label="SUV/MUV">SUV/MUV</option>
                        </select>
                        <label htmlFor="cars">Enter CarType*</label>

                    </div>
                    <br></br>
                    <div className="form-group">

                        <input type="text" className="form-control travel" onChange={(e)=>{
                          setForm({...form,[e.target.name]:e.target.value})
                        }} value={form.travellers} id="travel" autoComplete="off" name="travellers" required></input>
                        <label htmlFor="travel">Number of Travellers*</label>

                    </div>
                    <br></br>
                    <div className="button-part">
                    <button className="buttons"  onClick={() => setStep(step + 1)}>Enter Bid Details</button>
                    </div>
                    
                </form>
            </div>
            {/* <button onClick={() => setStep(step - 1)}>Back</button> */}
           
           
      
        </div>
    );
  };
  
  export default Step1;