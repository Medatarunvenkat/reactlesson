import React, { useState } from "react";
import App20a from "./App20a";
import App20b from "./App20b";
import {useContext,createContext} from "react";
export const CountContext=createContext();
function App20(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <CountContext.Provider value={{count,setCount}}>
            <h1>App20</h1>
            <h2>useContext hook</h2>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <hr />
            <App20a />
            <hr />
            <App20b />
            </CountContext.Provider>
        </div>
    );
}
export default App20;