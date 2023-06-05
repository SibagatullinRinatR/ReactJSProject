import { useState } from "react";
import Form from "./Form.jsx";
import Type from "./Type.jsx";
import Video from "./Video.jsx";
// import ImageCastom from "../Image"
import dataFirst from "../../data/DataFirst.json";
import style from "./main.module.css";

function Main(props) {
  console.log(dataFirst);
  const [numb, setNumb] = useState(0);
  const [videoId, setVideoId] = useState(0);
  const [imageName, setImageName] = useState("");
  // const dataArr = dataFirst.types.map((item)=>(item.imageName))
  // console.log(imageName);

  return (
    <main>
      <div className={style.main__about}>
        <h2>РАСЧЕТ СТОИМОСТИ РАЗРАБОТКИ ВИДЕО-РОЛИКА</h2>
        <p>
          Estimate the cost of animation projects for different mediums, styles,
          quality and duration using our interactive instant animation price
          calculator. Use this price guide to calculate a ballpark figure for
          your next animation project.
        </p>
      </div>
      <div className="main-content">
        <Form setNumb={(value) => setNumb(value)} />
        <Type
          numb={numb}
          setVideoId={(value) => setVideoId(value)}
          setImageName={(value) => setImageName(value)}
        />
        
        <Video videoId={videoId} imageName={imageName} />
        
        <div className={style.main__pages}>
          {/* <h3>LOAD MORE VIDEOS</h3> */}
        </div>
      </div>
    </main>
  );
}
export default Main;
