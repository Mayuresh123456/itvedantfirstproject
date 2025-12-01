import React from "react";

const Demo5 = () => {


    const items = null;

    return(
        <>
            {
                items.map((x) =>(
                    <p>{x}</p>

                )
                )
            };    
        </>
    );
}
export default Demo5;