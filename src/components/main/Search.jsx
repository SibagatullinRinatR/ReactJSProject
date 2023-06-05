import { useState } from "react";
import {Transition} from 'react-transition-group';
import classNames from 'classnames';
import MySelect from './MySelect';
import style from "./main.module.css"

function Search(){
  const [isActiv, setIsActiv] = useState(true);
  // const [isFocus, setIsFocus] = useState (false);
  const handleClick =(event) =>{
    setIsActiv(!isActiv);
    // setIsFocus(() => true);
  }

  const labelClasses = classNames('labelSelect', {'press': !isActiv})


    return(
        <div className={style.main__search}>
              <div className={style.main__select}>
                
              <Transition 
                in={isActiv} 
                timeout={500}
                mountOnEnter
                unmountOnExit>
                {state => <div className={labelClasses} onClick={handleClick}><label>COUNTRY</label></div>}
                </Transition>
                
              <MySelect handleClick={handleClick}/>
                
                
              </div>
              
            </div>
    );
}
export default Search;