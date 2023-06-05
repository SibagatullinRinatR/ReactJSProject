import React, { useState } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";

function InputItem(props) {
  const [isActiv, setIsActiv] = useState(true);
  // const [value, setValue] = useState("");
  const handleClick = (event) => {
    setIsActiv(!isActiv);
  };

  const labelClasses = classNames("labelInput", { press: !isActiv });

  return (
    <div className="input-btn">
      <Transition in={isActiv} timeout={500}>
        {(state) => (
          <div className={labelClasses} onClick={handleClick}>
            <label>{props.name}</label>
          </div>
        )}
      </Transition>
    

      <input
        className="formInfo"
        type="text"
        autoComplete="off"
        // onfocus="this.setAttribute('type', 'password');" type="text"
        {...props}
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
      />
     </div>
  );
}
export default InputItem;
