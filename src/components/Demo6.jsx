import {useQuery} from '@tanstack/react-query';
// import axios from 'axios';

const Demo6 = () =>{

    const fetchUsers = async() =>{
        const response = await axios.get('https://dummyjson.com/products');

        return response.data;
    }

    const {data,error, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    

    if(error){
        return (
            <h1>CONGRATULATIONS U GOT AN ERROR = {error.message}</h1>
        )
    }

    if(isLoading){
        return(
            <h1>Data is loading...</h1>
        )
    }



    return(
        <>
        {

            data.products.map((u)=>(
                <div key={u.id}>
                    {u.title}
                </div>
             ) )
        }
        
        
        </>
    );
}
export default Demo6;