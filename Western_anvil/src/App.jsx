import { useState , useContext} from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={}/>
        <Route path='/shopcart' element={}/>
        <Route path='/account' element={}/>
        <Route path='/shop' element={}/>
        <Route path='/login' element={}/>
        <Route path='/signup' element={}/>
        <Route path='/element/:id' element={}/>
        <Route path='/terms' element={}/>
        <Route path='/aboutus' element={}/>
      </Routes>
    </div>
  )
}

export default App
