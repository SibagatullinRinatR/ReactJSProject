import React, { useState } from "react";
import style from "./footer.module.css";
import InputItem from "./InputItem";
import Overlay from "./Overlay";
import Range from "./Range";

function Footer(props) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [overlayActive, setOverlayActive] = useState(false);
  const [time, setTime] = useState(0);

  let amount = time*8.5;

  let handleSubmit = async (e) => {
    e.preventDefault();
   
      let res = await fetch("/users", {
        method: "POST",
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          phone: userPhone,
        }),
      });
      let resJson = await res.json();
      if(res.status === 200){
        setUserName("");
        setUserPhone("");
        setUserEmail("")
        setMessage("Your ticket has been sended. Waiting answer from your email.");
      } else {setMessage("Some error occured")};
    
  };

  return (
    <footer>
      <div style={{width: '100%', height: '135px'}}></div>
      <Range time={time} setTime={(value) => setTime(value)}/>
      <div className={style.footer__form}>
        <h4>RETUCH</h4>
        <h5>ESTIMATE COST</h5>
        <p className={style.footer__form_cost}>${amount}</p>
        <form onSubmit={handleSubmit}>
          <InputItem
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="NAME"
          />
          <hr />
          <InputItem
            name="PHONE"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
          <hr />
          <InputItem
            name="EMAIL"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <hr />
          
          <button className={style.send_button} type="submit" onMouseUp={() => setOverlayActive(true)}>
          
            SEND
          </button>
          
        </form>
      </div>

      <div className={style.footer__text}>
        <ul>
          <li>
            Estimate the cost of animation projects for different mediums,
            styles, quality and duration using our interactive instant animation
            price calculator.
          </li>
          <li>
            Use this price guide to calculate a ballpark figure for your next
            animation project.
          </li>
          <li>
            different mediums, styles, quality and duration using our
            interactive instant animation price calculator.
          </li>
        </ul>
      </div>
      <Overlay message={message} active={overlayActive} setActive={setOverlayActive}/>
    </footer>
  );
}
export default Footer;
