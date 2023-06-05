import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Submain from "./components/submain/Submain";
import Footer from "./components/footer/Footer";
//import data from './data/data.json'
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const[data, setData] = useState(null);
  
  useEffect(() =>{
    fetch("/api")
    .then(response => response.json())
    .then((data)=>{
      setData(data.message);
    }, 
    (error) => {

    })
  })

  useEffect(() =>{
    
  })

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main/>
      </div>
      <div className="container">
        <div>
        <p>{!data ? "Loading..." : data}</p>
        </div>
        <Submain/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
