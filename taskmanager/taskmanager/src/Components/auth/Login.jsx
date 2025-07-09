import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext"
import API from "../../api/auth"
function Login() {
    const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
   const handleLogin =async (e) =>{
   e.preventDefault();
   try {
       console.log("Sending request...");

       const res = await API.post("/auth/login", { email, password });
           console.log("Sending request...",res.data);

    const token = res.data.token;
    console.log(token)
    login({email},token)
    navigate("/"); 
   } catch (error) {
    console.log("login failed")
   }

   }

  return (
    <div>
         <form onSubmit={handleLogin}>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login button </button>
    </form>
    </div>
  )
}

export default Login