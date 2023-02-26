import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Home from "./router/home/Home"
import Like from "./router/like/Like"
import Cart from "./router/cart/Cart"
import Login from "./router/login/Login"
import { Routes, Route } from "react-router-dom"
import SingleRoute from './router/single-route/SingleRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/savatcha' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<SingleRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
