// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './components/Home';
import GetAll from './components/GetTodo';
import Create from './components/Create';
import Updating from './components/Update';
import Delete from './components/Delete';
import Find from './components/Find';
import Login from './components/Login'
import './App.css'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Create' element={<Create></Create>}></Route>
        <Route path='/Update' element={<Updating></Updating>}></Route>
        <Route path='/Delete' element={<Delete></Delete>}></Route>
        <Route path='/Find' element={<Find></Find>}></Route>
        <Route path='/FindAll' element={<GetAll></GetAll>}></Route>
      </Routes>
    </>
  )
}

export default App
