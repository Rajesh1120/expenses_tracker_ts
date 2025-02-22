type MainData={
    expenses:string;
    amount:number;
    category:string;
  }
type MainDataAll={
    allData:MainData[];
}

export default function AllTranstion({allData}:MainDataAll){
    return (
        <>
            <div>
                {allData.map((data,index)=>{
                    return(
                    <tr key ={index}>
                        <td>{data.expenses}</td>
                        <td>{data.amount}</td>
                        <td>{data.category}</td>

                    </tr>
                    )
                    
                })}
                
            </div>
        </>
    )
}