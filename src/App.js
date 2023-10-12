import  {  useState,useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shorts from './components/Shorts';
import Home from './components/Home';
import Hooks from './components/Hooks';
import Conexpo from './components/Conexpo';
import { createContext,setData } from 'react';
import axios from 'axios';
import Products from './components/Products';
import  { Users }  from './components/Users';
import { Add } from './components/Add';
export const store=createContext();


// hi this is venu
function App() {
let students=[
  {
  name:"venu",
  age:20
},
{
  name:"gopal",
  age:24
}
]
// const [data,setData]=useState(students)
  return (
    <>
    <BrowserRouter>
    {/* <store.Provider value={[data,setData]}> */}
    <div className='row'>
    <Header/>
   
    {/* <Products/> */}
    {/* <Conexpo/> */}
    {/* <Hooks/> */}
    
    <Users/>
   <Add/>
    
   <Routes>
    <Route path="/*" element={<Home/>}/>
    <Route path="/Shorts" element={<Shorts/>}>
    
    </Route>
    </Routes>   
   </div>
   {/* </store.Provider> */}
   </BrowserRouter>
  </>
  );
}
//hiii
//i am venugopal from cst
export default App;
