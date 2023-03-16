import { Route, Routes } from 'react-router'
import {AboutUs, Account, Home, LogIn, Navbar, Shop, ShopCart, SignUp, Terms, VedioDetails} from "./Utilies/utilies"
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shopcart' element={<ShopCart/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/VedioDetails/:id' element={<VedioDetails/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
