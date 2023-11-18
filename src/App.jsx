import React, { useState } from 'react';
import { Routes, Route, Navigate,Link } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home" 
import Login from "./Components/auth/AuthForm" 
import Register from "./Components/auth/RegForm" 
import Dashboard from "./Components/Dashboard/Main" 
import Category from "./Components/Dashboard/Category" 
import Assignments from "./Components/Dashboard/Assignment" 
import PlayLists from "./Components/Dashboard/PlayLists" 
import WatchVideo from "./Components/Dashboard/WatchVideo" 
import Courses from "./Components/Dashboard/Courses" 
import Profile from "./Components/Dashboard/Profile"
import TutorProfile from "./Components/Dashboard/TutorProfile"
import Messages from "./Components/Dashboard/Messages"


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
      <Route path='/PlayLists' element={<PlayLists/>}/>
      <Route path='/WatchVideo' element={<WatchVideo/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/TutorProfile' element={<TutorProfile/>}/>
      <Route path='/Messages' element={<Messages/>}/>
    </Routes>
      
    </>
  )
}

export default App
