import { use, useRef, useState } from "react";

const Demo2 = () =>{

    const [count1 , SetCount1] = useState(0);   //usestate is not an array
    const count2 = useRef(0); //to access the value use .current

    const handleStateClick = () =>{
        SetCount1(count1 + 1);

    };
    const handleRefClick = () => {
        count2.current = count2.current + 1;
        console.log(count2.current);
    };


    return(

        
        <>
        <button type="button" onClick={handleStateClick}>useState Increment</button>
        <span>{count1}</span>
        <button type="button" onClick={handleRefClick}>useRef Increment</button>
        <span>{count2.current}</span>
        
        
        
        </>




    );
}
export default Demo2;