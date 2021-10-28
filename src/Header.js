import ThemeSwitcher from "./ThemeSwitcher"
// import  './Header.module.css';
import logo from './logo.svg';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                
                    <Link to="/Pokedex/">
                        <img src={logo} loading="lazy" alt=""/>
                    </Link>
                    <h1 className="header-title">Pokedex</h1>
                
            </div>
            <ThemeSwitcher />
        </div>
    );
  }

  export default Header;