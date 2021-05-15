import './Header.scss';
import Logo from '../../Assets/Vahak_Blue.png';
const Header=()=>{
    return (
            <div className="header">
              
                <img src={Logo} alt="logo" className="app-logo"></img>
                
            </div>
    )
}
export default Header;