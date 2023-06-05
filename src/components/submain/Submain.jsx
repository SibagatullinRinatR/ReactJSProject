import image13 from "../../images/photo/image13.jpg";
import style from "./submain.module.css";

function Submain() {
  return (
    <>
      <h2>YOUR CHOICE</h2>
      <div className={style.video_info}>
        <div className={style.video_info__image}>
          <img className="image" src={image13} alt="14" />
        </div>
        <div className={style.video_info__range}>
          <p>RUSSIA, ALEXEY ADAMLYUK</p>
          <h2>RANGE</h2>
          <div className={style.video_info__range__details}>
            <div className="details-name">RETUCH</div>
            <div className="details-time">00:05:89</div>
            <div className="details-cost">$3300</div>
            <div className="details-name">CLEANUP</div>
            <div className="details-time">00:05:89</div>
            <div className="details-cost">$3300</div>
          </div>
          <div className={style.video_info__range__text}>
            <p>Client: Renault</p>
            <p>Director: Stewart Handier</p>
            <p>DP: Mihail Khasaya</p>
            <p>Production: Mikhail Boganov</p>
          </div>
        </div>
        <div className={style.video_info__comment}>
          <h4>COMMENT</h4>
          <div className={style.video_info__comment__text}>
            <p>
              Text sdpfjsdf ‘dfooas dfasdf’o asdfas\dfasd fasd\f
              asdf\a\sadfasdfas dfsad\fasduf8ahdfoai sudf[as d
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Submain;
