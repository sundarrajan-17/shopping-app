import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Homepage from './Homepage/Homepage';
import Cart from './Cart/Cart';

function App() {

  const [total,setTotal]=useState(0)
  const [cartitems,setcartitems]=useState([])
  
  const AddtoCart=(item)=>{
    const productexist=cartitems.find((value) => value.id===item.id)
    if(productexist){
      setcartitems(cartitems.map((value) => 
      value.id===item.id 
        ? {...productexist,quantity:productexist.quantity+1} 
        : value
        )
      )
      console.log(productexist)
    }else{
      setcartitems([...cartitems,{...item,quantity:1}])
    }
    setTotal(total + item.price)
    console.log(item)
    console.log(cartitems)
  }

  const removefromcart=(item) => {
    const productexist=cartitems.find((value) => value.id===item.id)
    if(productexist.quantity===1){
      setcartitems(cartitems.filter((value) => value.id !== item.id))
    }else{
      setcartitems(cartitems.map((value) => value.id===item.id ? {...productexist,quantity:productexist.quantity-1}:value))
    }
    setTotal(total-item.price)
  }
  
  return (
    <div className="App">
      <Router> 
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage AddtoCart={AddtoCart}/>}/>
          <Route path='cart' element={<Cart Cartitems={cartitems} total={total} AddtoCart={AddtoCart} removefromcart={removefromcart}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
