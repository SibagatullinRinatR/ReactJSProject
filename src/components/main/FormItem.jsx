import ImageCastom from "../Image";
import style from "./main.module.css"

function FormItem(props){
        return(
                <div className={style.main__item}>
                <button style={{border: 'none', background: 'inherit'}} onClick={() => (props.setNumb(props.numb))}><ImageCastom name={props.image} /></button>
                <p className={style.photo_title}>{props.title}</p>
              </div>
        )

}

export default FormItem;