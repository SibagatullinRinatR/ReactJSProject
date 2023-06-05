// import { useState } from "react";
import style from "./footer.module.css";
function Range(props){
  // const [time, setTime] = useState(30);
  
  // const [timeVision, setTimeVision] = useState();

  // setTimeVision=(setTime)=>{
  //   if(time<60){
  //     timeVision=time;
  //   } else if(time<3600){
  //       timeVision=time/60;
  //   } else timeVision=time/3600;
  //   return timeVision;
  // }

  // const timeVizion = (e) =>{
  //   if(e.target.value<60){
  //     setTime(e.target.value +" СЕК")
  //   } else if(e.target.value<3600){
  //     setTime(Math.floor(e.target.value/60) + " МИН")
  //   } else if(e.target.value===3600){
  //     setTime("1 ЧАС")
  //   } else if(e.target.value===7200){
  //     setTime("2 ЧАСА")
  //   }else setTime("1 ЧАС " + Math.floor((e.target.value/60)-60) + " МИН")

  //}

    return(
        <div className={style.range}>
          <p>{props.time}</p>
          <input 
          type="range" 
          min={30}
          max={7200}
          step={30} 
          onInput={(e) => props.setTime(e.target.value)}/>
          <div className={style.interval}>
            <div><h4>30 СЕК</h4></div>
            <div><h4>2 ЧАСА</h4></div>
          </div>
          
        </div>
    );
}

export default Range;