import style from "./footer.module.css";
import footer__logo from '../../images/vi.svg';

const Overlay = (props) =>{
    return(
        <div className={props.active ? `${style.footer__overlay_active}` : `${style.footer__overlay}`}>
            
            <img className={style.footer__logo} alt='logo' src={footer__logo}/>
            <div className="message">{props.message ? <p>{props.message}</p> : null}
            <p>Your ticket has been sended. Waiting answer from your email.</p>
            <br/>
            <br/>
            </div>
            <button className={style.send_button} onClick={()=> props.setActive(false)}>BACK TO LIST</button>
            
        
        </div>
    )
}
export default Overlay;