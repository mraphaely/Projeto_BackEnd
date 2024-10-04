import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './components/Register.jsx';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to = "/register">Register </Link>
        <Link to = "/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

 export default App;