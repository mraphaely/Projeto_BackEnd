import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

   const [email, setEmail] =  React.useState('');
   const [password, setPassword] =  React.useState('');
   const [message, setMessage] =  React.useState('');
   const navigate = useNavigate();

   const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/login", {
            email, 
            password
        })
        localStorage.setItem("token", response.data.token);
        setMessage("Logado com sucesso!");
        navigate("/");
    } catch {
        setMessage("Não foi possível fazer login!")
    }
   }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type="email" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)} />
                
                <label>Password:</label>
                <input type="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} />
                
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </>
    )
}

export default Login;