type MainData={
    id:number;
    expenses:string;
    amount:number;
    category:string;
  }
type MainDataAll={
    allData:MainData[];
    setAllData:(data:MainDataAll['allData'])=>void;
}


export default function AllTranstion({allData, setAllData}:MainDataAll){
    function handleDelete(id:number){
        const filterDelete=allData.filter(item=> item.id!==id)
        setAllData(filterDelete)
    }
    return (
        <>
            <div>
           
                {allData.map((data,index)=>{
                    return(
                
                    <tr key ={index}>
                        <td>{data.id}</td>
                        <td>{data.expenses}</td>
                        <td>{data.amount}</td>
                        <td>{data.category}</td>
                        <td><button onClick={(e)=>handleDelete(data.id)}>Delete</button></td>
                        <td><button>Edit</button></td>
                    </tr>
                    )
                    
                })}
            </div>
           
        </>
    )
}