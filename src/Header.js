import ThemeSwitcher from "./ThemeSwitcher"
// import  './Header.module.css';
import logo from './logo.svg';

function Header() {
    return (
 <div className="header">
            <div className="header-logo">
                <a href="/">
                    <img src={logo} loading="lazy" alt=""/>
                </a>
                <h1 className="header-title">Pokedex</h1>
            </div>
            <ThemeSwitcher />
        </div>
    );
  }

  export default Header;