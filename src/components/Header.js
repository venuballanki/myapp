import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';
import React from 'react'

function Header() {
  return (
    <>   
     <div className='col-md-3 menu '>
    <div className='logodiv' style={{display: 'flex' }}>
          <i className="fa-solid fa-bars" style={{color:'white'}}></i>
           <img src={logo} alt="no" id="logo"/> 
           </div>
        <div className='sidebar'>
        <ul>
                    <Link className='Listmenu' to="/"><li ><i class="fa-solid fa-home"></i>Home</li></Link>
                    <Link className='Listmenu' to="/Shorts" ><li ><i class="fa-solid fa-bolt" ></i>Short</li></Link>
                    <li ><i class="fa-solid fa-money-bill-wheat" ></i>Subscription</li>
                    <br/>
                    <hr/>
                </ul>
                <ul>
                    <li ><i class="fa-solid fa-list-alt"></i>Library</li>
                    <li ><i class="fa-solid fa-history" ></i>History</li>
                    <li ><i class="fa-solid fa-circle-play" ></i>Your Videos</li>
                    <li ><i class="fa-solid fa-clock" ></i>Watch Later</li>
                    <li ><i class="fa-solid fa-thumbs-up" ></i>Liked Videos</li>
                
                
                </ul>
        </div>
     </div>
     </>
                                           
  )
}
export default Header;