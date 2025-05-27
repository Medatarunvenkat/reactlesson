import React, { useState,createContext } from "react";
import Register from "./Register";
import Login from "./Login";
export const UserContext=createContext();
function App21(){
    const [user,setUser]=useState([]);
    const [loggedInUser, setLoggedInUser]=useState(null);
    return(
        <UserContext.Provider value={{user,setUser,loggedInUser,setLoggedInUser}}>
        <div>
            <h1>App21</h1>
            {loggedInUser ? (
          <h2>Welcome {loggedInUser.name}!</h2>):(
          <>
            <Register />
            <hr />
            <Login />
          </>
        )}
      </div>
      </UserContext.Provider>
    );
}
export default App21;