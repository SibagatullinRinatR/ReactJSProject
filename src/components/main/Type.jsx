import dataFirst from "../../data/DataFirst.json";
import dataSecond from "../../data/DataSecond.json";
import dataThird from "../../data/DataThird.json";
import dataFourth from "../../data/DataFourth.json";
import style from "./main.module.css";

import TypeItem from "./TypeItem";

function Type({ numb, setVideoId, setImageName }) {
  let dataTypes;

  switch (numb) {
    case 1:
      dataTypes = dataFirst.types;
      break;
    case 2:
      dataTypes = dataSecond.types;
      break;
    case 3:
      dataTypes = dataThird.types;
      break;
    case 4:
      dataTypes = dataFourth.types;
      break;
    default:
      dataTypes = [];
  }
  if (numb === 0) {
    return <div></div>;
  }


  return (
    <>
      <h2>ВЫБЕРИТЕ ТИП</h2>
      <div className={style.main__second_block}>
        {dataTypes.map((item, index) => (
          <TypeItem
            setVideoId={setVideoId}
            setImageName={setImageName}
            key={index + item.imageName}
            image={item.imageName}
            title={item.name}
            videoId={item.videoId}
            
          />
        
        ))}
      </div>
    </>
  );
}
export default Type;
