import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to = "/register">Register |</Link>
        <Link to = "/login">| Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

 export default App;