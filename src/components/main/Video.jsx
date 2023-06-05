import "react-modal-video/scss/modal-video.scss";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import video__logo from '../../images/polygon.svg';
import ImageCastom from "../Image.jsx";
import style from "./main.module.css";
import Search from "./Search.jsx";

function Video({ videoId, imageName }) {
  const [isOpen, setOpen] = useState(false);

  if (imageName === "") {
    return <div></div>;
  }

  return (
    <div className="main-content">
      <Search />
      <hr/>
      <div className={style.main__third_block}>
      
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
      </React.Fragment>

      <div className={style.main__video_item}>
        <button style={{border: 'none', background: 'inherit'}}  onClick={() => setOpen(true)}>
        <img className={style.video__logo} alt='logo' src={video__logo}/>
          <ImageCastom name={imageName}/>
        </button>
      </div>
    </div>
    <hr/>
    </div>
    
  );
}
export default Video;
