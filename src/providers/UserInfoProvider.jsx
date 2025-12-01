import { UserInfoContext } from "../contexts/UserInfoContext";
import { useState,useEffect, useRef } from "react";

const UserInfoProvider = ({children}) => {

const [userInfo, setUserInfo] = useState({
    userid: 0 ,
    userfname : "Guest",
    userlname : "User",
    useremail : "guest@dummy.com",
    usercontact : "912843829",
    userrole : "guest"
});    

const userInfoDetails = (userObj) =>{
    setUserInfo(
        {
            userid: userObj.id,
            userfname: userObj.firstName,
            userlname: userObj.lastName,
            useremail: userObj.email,
            usercontact: userObj.phone,
            userrole: userObj.role,
        }

    )

};

    return(
        <>
        <UserInfoContext.Provider value={{userInfo, userInfoDetails}}>

        {children}

        </UserInfoContext.Provider>    
        </>
    );


}
export default UserInfoProvider; 