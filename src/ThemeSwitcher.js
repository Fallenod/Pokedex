

function ThemeSwitcher() {
    let lightMark = true
    function changeTheme(e) {
        if(lightMark) {
            document.documentElement.style.setProperty('--primary',"#313131");
            document.documentElement.style.setProperty('--secondary',"#424242");
            document.documentElement.style.setProperty('--info-color',"#eceff1");
            document.documentElement.style.setProperty('--invert',"invert(1)");
        }
        else {
            document.documentElement.style.setProperty('--primary',"#eeeeee");
            document.documentElement.style.setProperty('--secondary',"#dadada");
            document.documentElement.style.setProperty('--info-color',"#4d4d4d");
            document.documentElement.style.setProperty('--invert',"invert(0)");
        }
        lightMark = !lightMark
    }
  
    return (
            <div className="theme-switch-wrapper">
                <label onChange={changeTheme} className="theme-switch" for="checkbox">
                    <input  className="switch-input" type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
            </div>
    );
  }

  export default ThemeSwitcher