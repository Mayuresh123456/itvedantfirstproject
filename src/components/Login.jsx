import { useState,useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { useContext } from "react";

// import userApi from "./Import";



const Login = () =>
{

  const Navigate = useNavigate();
  const {userInfoDetails} = useContext(UserInfoContext);

  const [msg , SetMsg] = useState();
  const useremaill = useRef(null);
  const [userData, setUserData] = useState([]);
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  const userPassword = useRef(null);
  const handleSubmit = () =>{
    console.log(useremaill.current.value , userPassword.current.value);

    const newemail = useremaill.current.value;
    const newpassword = userPassword.current.value;
    
    const find = userData.find((u) =>{
      return u.email == newemail && u.password == newpassword

    });
    if (find){
      const result = userData.find((user) => user.email === useremaill.current.value); //WHAT WILL BE STORED IN RESULT
      userInfoDetails(result);
      SetMsg("user is validated");
      Navigate('/mainpage');

      
    }
    else{
      SetMsg("invalid username or password");
    }
  }
  const userApi = async() =>
{
    const response = await axios.get("https://dummyjson.com/users");

    // const userdata = response.data.users;
    // console.log(response.data.users);

    setUserData(response.data.users);

    // if(useremaill.value == userData.data.email ){

    //   console.log("user is validated")

    // } validation
     
    // const userData = JSON.stringify(response.data);
    // const userData = responses.users;
    // console.log(userData);

};
useEffect(() => {
    useremaill.current.focus();
     userApi();
},[]);

useEffect(() =>{
  console.log(userData);
},[userData]);

    return (
        <>
             <form align="center" method="post">
        <h2>Registration Form</h2>

        <label>Email :</label>
        <input type="email" ref={useremaill} id="mail"  required/><br/>
        {/* <input type="email" ref={useremaill} id="mail"  onChange={(e) =>setUserEmail(e.target.value) } required/><br/> */}
        

        <label>Password :</label>
        <input type="password" ref={userPassword} id="pass"  required/><br/>
         {/* <input type="password" id="pass"  onChange={(e) =>setUserPassword(e.target.value)} required/><br/> */}

        <input type="button" id="lol" value="submit" onClick={handleSubmit}/>

        <h1>{msg}</h1>
        </form>
        </>
    );
}
export default Login;