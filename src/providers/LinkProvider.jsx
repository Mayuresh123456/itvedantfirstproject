
import { LinksContext } from "../contexts/LinksContext";
import { CommonLink,GuestLink,LoggedLink,AdminLink } from "../RouteInfo";



const LinkProvider = ({children}) =>{

    const getLinkDetails = (role="guest")=>{
        switch (role) {
            case "guest":
                return GuestLink;
                
            case "admin":
                return AdminLink;

            default:
                return LoggedLink;
               
        }

    };

    return(
        <>
            <LinksContext.Provider value={{getLinkDetails}}>
            {children}
            </LinksContext.Provider>
        
        </>

    )

}
export default LinkProvider;