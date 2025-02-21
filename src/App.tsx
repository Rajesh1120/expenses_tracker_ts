import Form from "./Components/Form"
import {useState} from "react";
import './App.css';
import AllTranstion from "./Components/AllTranstions";

type MainData={
  expenses:string;
  amount:number;
  category:string;
}
function App() {
  const [allData, setAllData]=useState<MainData[]>([])
  function addAllexpenses(data:MainData){
    
    setAllData((prevdata)=>{
      return [...prevdata,data]
    })
  }
  console.log(allData);
  return (
    <div className="App">
      <Form addAllexpenses={addAllexpenses} />
      <AllTranstion allData={allData} />

    </div>
  );
}

export default App;
