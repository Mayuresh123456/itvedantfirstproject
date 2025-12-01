const ListDemo = () =>{

    const Cities = ["mumbai","pune","Delhi"];

    return(
        <>
        <ul>
            {
                Cities.map((c)=>
                    (
                        <li>{c}</li>
                ))
                
            }
        </ul>
        </>

    );    
};
export default ListDemo;