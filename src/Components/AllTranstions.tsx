type MainData={
    expenses:string;
    amount:number;
    category:string;
  }

export default function AllTranstion(allData:MainData[]){
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