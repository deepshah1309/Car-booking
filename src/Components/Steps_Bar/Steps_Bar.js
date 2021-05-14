import './Steps_Bar.scss';
const StepsBar=({message,track})=>{
        return (
            <div className="steps-bar">
                <div className="step-track">{message}({track}/4 step)</div>
            </div>
        )
}
export default StepsBar;