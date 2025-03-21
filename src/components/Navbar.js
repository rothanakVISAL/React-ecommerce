import React from "react";
import {Link} from 'react-router-dom';
import Logo from './comp_imgs/logo1.png';
import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai';
import {BiCategory} from 'react-icons/bi'; 
import {BsPeople, BsBagCheck} from 'react-icons/bs'; 


function Navbar(){

  return (
    <div className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'darkslategray'}}>
          <img src={Logo} className="rounded-circle mr-3" alt="#" title="StoreKH" />
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-4 p-2">
              <li className="nav-item active ">
                <Link to="/" className="nav-link text-white font-weight-bold"><strong><span><AiOutlineHome className="mr-2 fa-lg"/></span>HOME</strong></Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link text-white font-weight-bold"><strong><span><BsBagCheck className="mr-2 fa-lg"/></span>PRODUCT</strong></Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle text-white font-weight-bold" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong><span><BiCategory className="mr-2 fa-lg"/></span>CATEGORY</strong>
                </Link>
                <div className="dropdown-menu border-secondary rounded" aria-labelledby="navbarDropdown">
                  <Link><button type="button" className="dropdown-item text-info border-top"><strong>ASUS</strong></button></Link>
                  <Link><button type="button" className="dropdown-item text-info"><strong>MSI</strong></button></Link>
                  <Link><button type="button" className="dropdown-item text-info border-bottom"><strong>APPLE</strong></button></Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-white font-weight-bold"><strong><span><BsPeople className="mr-2 fa-lg"/></span>ABOUT US</strong></Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white font-weight-bold"><strong><span><AiOutlineShoppingCart className="mr-2 fa-lg"/></span>CART</strong></Link>
              </li>
            </ul>
          </div>
          <div>
            <form className="form-inline my-2 my-lg-0 mr-4">
              <input className="form-control my-1" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          <div>
              <Link to="/login"><button className="btn btn-info font-weight-bold"><i>Log in</i></button></Link>
              <span className='m-3 text-white'>|</span>
              <Link to="/register"><button className="btn btn-info font-weight-bold"><i>Register</i></button></Link>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
