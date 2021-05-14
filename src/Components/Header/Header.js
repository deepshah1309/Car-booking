import './Header.scss';
import Logo from '../../Assets/Vahak_Blue.png';
const Header=()=>{
    return (
            <div className="header">
                <div className="header-logo">
                <img src={Logo} alt="logo" className="app-logo"></img>
                </div>
            </div>
    )
}
export default Header;