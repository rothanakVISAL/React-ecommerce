// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Cart from "./pages/Cart";
// import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyPage from './pages/MyPage';
// import Navbar from "./src/components/Navbar";

function App(){
  return(
    <div>
      {/* <Router>
        <Navbar />  
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router> */}
      <MyPage />
      {/* <Slider /> */}
      {/* <Categories /> */}
      {/* <Newsletter/> */}
      {/* <Footer/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      
    </div>

    
  );
}

export default App;