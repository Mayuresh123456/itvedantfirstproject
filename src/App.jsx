import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import MainPage from './components/MainPage';
import Layout from './Layout';
import Login from './components/Login';
import Product from './components/Product';
import Viewproduct from './components/Viewproduct';
import Demo2 from './components/demo2';
import UserInfoProvider from './providers/UserInfoProvider';
import LinkProvider from './providers/LinkProvider';
import Demopage from './components/demopage';
import Demo5 from './components/Demo5';
import Demo6 from './components/Demo6';



const App = () => {

    return(
        <>
        <Demopage/>
       <LinkProvider>
        <UserInfoProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="mainpage" element={<MainPage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="product" element={<Product/>}/>
             
            
            <Route path="viewproduct/:id" element={<Viewproduct/>}/>

            <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="demo" element={<Demo2/>}> </Route>
            <Route path="demo5" element= {<Demo5/>}></Route>
            <Route path="demo6" element= {<Demo6/>}></Route>
        </Routes>
        </UserInfoProvider>
        </LinkProvider> 
        </>
        //these componenets will render to layout page

    );
}
export default App;