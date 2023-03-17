import { useContext, useState } from "react";
import ThemeContext from "../../Context/ThemeContext";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {BsFillMoonStarsFill,BsSunFill} from"react-icons/bs"
import"./ThemeToggler.css"
function ThemeToggler() {
  const { toggleTheme, seletedTheme } = useContext(ThemeContext);
  const [ele, setEle] =useState(seletedTheme=="dark"? seletedTheme=="dark":false)
  console.log(ele);
  const handleChange = (e) => {
    setEle(e.target.checked)
      toggleTheme(e)
  };
  return (
    <section className="ThemeToggler">
      <label style={{fontSize:"1.5rem"}}>
      {ele? `🌜`:`🌞`}
      </label>
      <FormGroup >  
        <FormControlLabel
          control={
            <Switch
              defaultChecked={seletedTheme === "dark"}
              onChange={handleChange}
              name={ele?"DarkMode":"LightMode"}
              color="secondary"
            />
          }
        />
      </FormGroup>
    </section>
  );
}

export default ThemeToggler;
