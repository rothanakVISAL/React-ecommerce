import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from './Home';
import Product from './Product';
import Login from "./Login";
import About_us from "./AboutUs";
import Register from "./Register";
import Product_detail from "../datail_Page/product_detail";
import Cart from "../add_to_cart/Cart";
import Cartcheckout from "../add_to_cart/Cartcheckout";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function MyPage (){
  return (
    <div>
       <Router>
         <Navbar />
         <Switch>
           <Route path="/" component={Home} exact></Route>
           <Route path="/product" component={Product} exact></Route>
           <Route path="/aboutus" component={About_us}></Route>
           <Route path="/login" component={Login}></Route>
           <Route path="/register" component={Register}></Route>
           <Route path="/prd_detail" component={Product_detail}></Route>
           <Route path="/cart" component={Cart}></Route>
           <Route path="/cartcheckout" component={Cartcheckout}></Route>
         </Switch>
       </Router>
       <Footer/>
    </div>
  );
};

export default MyPage;