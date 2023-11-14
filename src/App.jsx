import React, { useState } from 'react';
import { Routes, Route, Navigate,Link } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home" 
import Login from "./Components/auth/AuthForm" 
import Register from "./Components/auth/RegForm" 
import Dashboard from "./Components/Dashboard/Main" 
import Category from "./Components/Dashboard/Category" 
import Assignments from "./Components/Dashboard/Assignment" 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Category' element={<Category/>}/>
      <Route path='/Assignments' element={<Assignments/>}/>
    </Routes>
      
    </>
  )
}

export default App
