import axios from "axios";
import { useEffect } from "react";



const userApi = async() =>
{
    const hello = await axios.get("https://dummyjson.com/users");
    const responses = await hello.json();

    const userData = responses.users;

    console.log(userData);

};
useEffect(userApi());
export default userApi;