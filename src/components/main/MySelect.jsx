import { useState } from "react";
import style from "./mySelect.module.css";


function MySelect(props){
        const countries = ['RUSSIA', 'USA', 'CANADA', 'FRANCE'];
	const [value, setValue] = useState('');
	
	const options = countries.map((name, index) => {
		return <option key={index} value={index}>{name}</option>;
	}); 

       

        return(
                <div className={style.select} value={value} onChange={event => setValue(event.target.value)}>
                <select>
                <option style={{display: "none"}} defaultValue={""}></option>       
                {options}
                </select>
        </div> 
               
  
        );
}
export default MySelect;