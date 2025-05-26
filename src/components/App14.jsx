import axios from "axios";
import React, { useEffect, useState } from "react";
function App14(){
    const [users,setUsers]=useState([])
    const [search,setSearch]=useState("")
    const fetchData=async()=>{
        const url="https://jsonplaceholder.typicode.com/users";
        const res=await axios.get(url);
        setUsers(res.data);
    }  

    useEffect(()=>{
       fetchData(); 
    },[])

    const names=users.filter((user)=>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return(
        <div>
            <h1>App14</h1>
            <h2>useEffect hook to fetch api</h2>
            <p>
                <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>

            </p>
            <ul>
                {names.map((user) => (
                    <li key={user.id}>
                        <strong>ID:</strong>{user.id} |<strong>Name:</strong>{user.name} |<strong>City:</strong>{user.address.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App14;