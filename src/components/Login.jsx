import React, { useContext, useState } from "react";
import { UserContext } from "./App21";
function Login(){
    const {user,setLoggedInUser } = useContext(UserContext);
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")
    const handleLogin=()=>{
        const matchuser=user.find(u=>u.email===email && u.pswd===pswd);
        if (matchuser) {
            setLoggedInUser(matchuser)
        }
        else {
            alert("Invalid email or password");
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder="Enter password" value={pswd} onChange={e=>setPswd(e.target.value)}/><br></br>
            <button onClick={handleLogin}>Submit</button>
        </div>
    );
}
export default Login;