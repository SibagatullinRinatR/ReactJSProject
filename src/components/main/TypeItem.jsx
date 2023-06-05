import ImageCastom from "../Image"
import style from "./main.module.css"


function Type(props){
    return(
            <div className={style.main__item}>
                <button style={{border: 'none', background: 'inherit'}} 
                onClick={() => {
                  props.setVideoId(props.videoId);
                  props.setImageName(props.image);
                }}>
                <ImageCastom name={props.image}/>
                </button>
                

                <p className={style.photo_title}>{props.title}</p>
            </div>
        );
    }
    export default Type;