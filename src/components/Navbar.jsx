
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserInfoContext } from '../contexts/UserInfoContext';
import { LinksContext } from '../contexts/LinksContext';





const Navbar = ({optionClick}) =>{

    const {userInfo} = useContext(UserInfoContext);
    const {getLinkDetails} = useContext(LinksContext);

    let NavLinks = getLinkDetails(userInfo.userrole);

    return(
    <>
    <nav id="navbar">
      <div id="logotext">
        <img src="./src/assets/musiclogo.jpg" id="logo" alt="hiii"/>
        <span id="websitename">MUSICALMAYUR</span>
      </div>
      <ul id="content">
        {NavLinks.map((link , idx) =>{
          return(
            <li className="litag" key={idx}><Link to={link.linkurl} >{link.linkname}</Link></li>

          );
        })}
        <li className="litag"><Link to={NavLinks.linkurl} >{NavLinks.linkname}</Link></li>
        {/* <li className="litag"><Link to="about">About</Link></li>
        <li className="litag"><a href="reviews.html">Reviews</a></li>
        <li className="litag"><Link to="product">Product</Link></li> */}
        <li className="litag"><a href="feedback.html">{userInfo.userfname}</a></li>
        {/* <li className="litag"><Link to="login">Login</Link></li> */}
        {/* <li className="litag"><button type='button' onClick={()=> optionClick("Login")}>Login</button></li> */}
        <li className="litag"><span id="hi">Wishlist</span><img src="./src/assets/love.jpg" id="logo2" alt="hi"/></li>
      </ul>
    </nav>
        
</>
    );


}
export default Navbar;

// const Navbar = () => {
//   return (
//     <h1>Hello from Navbar!</h1>
//   );
// }

// export default Navbar;