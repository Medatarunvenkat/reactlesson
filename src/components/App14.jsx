import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
function App14(){
    const [users,setUsers]=useState([])
    const fetchData=async()=>{
        const url="https://jsonplaceholder.typicode.com/posts";
        const res=await axios.get(url);
        setUsers(res.data);
    }  

    useEffect(()=>{
       fetchData(); 
    },[])
    return(
        <div>
            <h1>App14</h1>
            <h2>useEffect hook to fetch api</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default App14;