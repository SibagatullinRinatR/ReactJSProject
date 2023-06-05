
import dataFirst from "../../data/DataFirst.json"
import dataSecond from "../../data/DataSecond.json"
import dataThird from "../../data/DataThird.json"
import dataFourth from "../../data/DataFourth.json"
import FormItem from "./FormItem";
import style from "./main.module.css"

function Form({setNumb}){
  
  
    return(
        <>
        <h2>ВЫБЕРИТЕ ВИД</h2>
            <div className={style.main__first_block}>
              <FormItem setNumb={setNumb} numb={1} image={dataFirst.imageName} title={dataFirst.name}/>
              <FormItem setNumb={setNumb} numb={2} image={dataSecond.imageName} title={dataSecond.name}/>
              <FormItem setNumb={setNumb} numb={3} image={dataThird.imageName} title={dataThird.name}/>
              <FormItem setNumb={setNumb} numb={4} image={dataFourth.imageName} title={dataFourth.name}/>
            </div>
        </>
        
    );
}
export default Form;