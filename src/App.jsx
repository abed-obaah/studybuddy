import React, { useState } from 'react';
import { Routes, Route, Navigate,Link } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home" 
import Login from "./Components/auth/AuthForm" 
import Register from "./Components/auth/RegForm" 
import Dashboard from "./Components/Dashboard/Main" 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
      
    </>
  )
}

export default App
