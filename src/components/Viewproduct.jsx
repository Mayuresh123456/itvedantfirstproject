// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Viewproduct = () =>
{


    const {id} = useParams();
    const [viewproducts , setViewproducts] = useState([]);

    console.log(id);

    useEffect(() =>{

        const fetchData = async ()=>{
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setViewproducts(res.data);
        };
        fetchData();
    }, [id]);

    //https://dummy.json/products/${id}
    return(
        <>

            <div>
                <h1>{viewproducts.id}</h1>
                <h1>{viewproducts.price}</h1>
                <h1>{viewproducts.brand}</h1>
                <img src={viewproducts.thumbnail} alt="" />

            </div>
        </>
    )
}
export default Viewproduct;