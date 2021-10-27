import logo from './placeholder.svg'
import style from './Loader.module.css';

function Loader() {
    return ( <img className={style.loader} src={logo} alt="Loading.."/> );
}

export default Loader;