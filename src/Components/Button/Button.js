import './Button.scss';
const Buttons=({text,onClick})=>{
    return (
        <div className="button-part">
            <button className="buttons" onClick={onClick}>{text}</button>
        </div>
    )
}
export default Buttons;