import { useReducer } from "react";



const initialData = {
    email: "",
    password:"",
    number:"",
    fullname:"",
};

const reducer = (state,action)=>{
    return {
        ...state,
        [action.field]: action.value,
    }

};


const Demopage = () =>{
    

    const [state, dispatch] = useReducer(reducer, initialData); //this will return state and dispatch

    const handleChange = (e) =>{
        dispatch(
            {
                field: e.target.name,
                value: e.target.value,
            }


        );

    };

    const handleClick = () =>{
        console.log(state);
    }

    


    return(
        <>
        <form align="center" method="post">
        <h2>Registration Form</h2>

        <label>Email :</label>
        <input type="email"  id="mail" name="email" onChange={handleChange}  required/><br/>
        {/* <input type="email" ref={useremaill} id="mail"  onChange={(e) =>setUserEmail(e.target.value) } required/><br/> */}
        

        <label>Password :</label>
        <input type="password"  id="pass" name="password" onChange={handleChange}  required/><br/>
         {/* <input type="password" id="pass"  onChange={(e) =>setUserPassword(e.target.value)} required/><br/> */}

         <label>Phone Number :</label>
        <input type="number"  id="phone" name="number" onChange={handleChange}  required/><br/>

        <label>Full Name</label>
        <input type="text"  id="fullname" name="fullname" onChange={handleChange}  required/><br/>

        <input type="button" id="lol" value="submit"  onClick={handleClick}/>

        
        </form>
              
        
        
        
        </>

    );

}
export default Demopage;