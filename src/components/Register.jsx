import React, { useContext, useState } from "react";
import { UserContext } from "./App21";
function Register(){
    const { user, setUser } = useContext(UserContext);
    const[name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")
    const handleRegister=()=>{
        const newUser={ name,email,pswd };
        setUser([...user,newUser]);
        alert("User registered successfully");
        setName("");
        setEmail("");
        setPswd("");
    }
    return(
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Enter name" value={name} onChange={e=>setName(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/><br></br>
            <input type="password" placeholder="Enter password" value={pswd} onChange={e=>setPswd(e.target.value)}/><br></br>
            <button onClick={handleRegister}>Submit</button>
        </div>
    );
}
export default Register;