import { useState } from 'react'
type MainData={
    id:number;
    expenses:string;
    amount:number;
    category:string;
}
type InputProps={
    addAllexpenses:(data:MainData)=>void
}

const Input=({addAllexpenses}:InputProps)=>{

    const [data,setData]=useState({
        id:0,
        expenses:"",
        amount:0,
        category:"",
    })
    type ChangetypeValue = HTMLFormElement | HTMLInputElement | HTMLSelectElement

    function handleChange(e: React.ChangeEvent<ChangetypeValue>){
        const {name, value}=e.target 
        setData({...data,id:Math.random(),[name]:value})
    }
   
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        // console.log("handlesubmit")
        addAllexpenses(data);
    }
    return(
        <>
        <input type = 'text' value={data.expenses}  onChange={handleChange}placeholder="expenses Name" name ="expenses" />
        <input  type= "number" value={data.amount} onChange={handleChange} placeholder="amount" name="amount" />
        <select name="category" value={data.category}  onChange={handleChange}>
           {/* <option  id="1" disabled>Select the Category</option> */}
            <option value="electricbills">electric bills</option>
            <option value="water bills">water bills</option>
            <option value="rent">rent</option>
            <option value="insurance">insurance</option>
            <option value="other">other</option>

        </select>
        <input  type="submit" onClick={handleSubmit} value="submit"/>
        </>
    )
}
export default Input;