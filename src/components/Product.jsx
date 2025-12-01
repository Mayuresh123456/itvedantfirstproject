// import { useEffect, useState } from 'react';
// import './Navbar.css'
// import axios from 'axios';


// const Product = () =>{

//     const [dynamicData , setDynamicData] = useState([]);
//     const productApi = async() =>
// {
//     const responsenew = await axios.get("https://dummyjson.com/products");
//     setDynamicData(responsenew.data.products);

//     // document.getElementsByClassName('id').innerText = responsenew.data.products[0].id;
//     console.log(responsenew.data.products[0].id);
    
    
// };

// useEffect(() =>{
//     productApi();
// },[]);
// useEffect(() =>{
//     console.log(dynamicData);
// },[dynamicData]);



//     return(
//         <>
//         {dynamicData.map((product)=> {
//                 return (
//                     <div id={product.id}>
//                         <label id={product.title}></label>
//                         <hr/>
//                         <label id={product.brand}></label><br/>
//                         <label id={product.price}></label><br/>
//                         <img src={dynamicData.thumbnail} alt="/"/>
//             </div>
//                 )
//             })}      
//       </>
//     );
// }
// export default Product;


//         // <div className="hi">
//         //         <label className="id"></label>
//         //         <hr/>
//         //         <label className="category"></label><br/>
//         //         <label className="price"></label><br/>
//         //         <img src={dynamicData.thumbnail} alt="/"/>
//         //     </div>

import { useEffect, useState } from 'react';
import './Navbar.css'

import { useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () =>{

    const [products, setProducts ]= useState([]);

    const [searchParam, setSearchParam] = useSearchParams();
    const searchText = searchParam.get("q") || "";

    useEffect(()=>{
        const fetchData = async() =>{
            let url = "";
            if(!searchText){  //when empty 
                url = "https://dummyjson.com/products"
            }
            else{
                url = `https://dummyjson.com/products/search?q=${searchText}`
            }


            const res = await axios.get(url);
            setProducts(res.data.products)
        }

        fetchData();
        
    }, [searchText])

    const handleSearch = (e) =>{
        const value = e.target.value;
        setSearchParam(value ? {q:value} : {});
    }




    return(
        <>
        <input type='text' value={searchText} onChange={handleSearch}  placeholder='search by product name'/>
            {products.map((product)=> {
                return (
                    <div key={product.id} style={{ display: "flex" }} id={product.id}><br/>
                        <h4>{product.title}</h4>
                        <img src={product.thumbnail} alt="" />
                        <h2>{product.brand}</h2>
                        <h5>{product.price}</h5>
                        <Link to={`/viewproduct/${product.id}`}>< button type='button'>View</button></Link>

                    </div>
                )
            })}
        </>
    );
}
export default Product;