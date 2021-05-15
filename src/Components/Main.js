import React,{useState} from "react";
import Header from './Header/Header';
import StepsBar from './Steps_Bar/Steps_Bar';
// import Screen from './Screen/Screen';
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import MultiStepForm from '../Components/MultiStepForm';
const Main = () => {
  
 const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    sourcelocation: "",
    destination: "",
    cartype: "",
    travellers:"",
    rate:"",
    negotiable:false,
    phonenumber:"",
    username:"",
    remarks:""
  });
  const secret=1234;

    return (
        <div className="main-part">
            <Header />
            {step===0 && <StepsBar message="Place your Bid" track={step+1}/>}
            {step===1 && <StepsBar message="Place your Bid" track={step+1}/>}
            {step===2 && <StepsBar message="Verify OTP" track={step+1}/>}
    
  
        <MultiStepForm step={step}>
        <Step1 form={form} step={step} setForm={setForm} setStep={setStep}></Step1>
        <Step2 form={form} step={step} setForm={setForm} setStep={setStep}></Step2>
        <Step3 form={form} step={step} setForm={setForm} setStep={setStep} secret={secret}></Step3>
      </MultiStepForm>
      
        </div>
    )
}
export default Main;