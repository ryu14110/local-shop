import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
// import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false) //false 로그인 안됨
  useEffect(()=>{
    // console.log("AAA",authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
      <footer className="footer">
        <div className = "copyright">
          <p>Copyright © 2023-2028 james. All rights reserved .</p>
        </div>
        <div className="address">
          <p>창원시 무궁화구 살구꽃로 12로 3번지</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
