import React, { useCallback, useState,useEffect } from "react";   
function App19()
{
    const [run,setRun]=useState(1);
    const[wicket,setWicket]=useState(0);
    const [message,setMessage]=useState("");
    const runchase=()=>{
        if(wicket<10)
        {
            setRun(run+1);
            setMessage("Well done boy!..");
        }
    }
    const wickets=()=>{
        if(wicket<10)
        {
            setWicket(wicket+1);
        }
    }
    useEffect(()=>{
        if(wicket===10)
        {
            setMessage("Game over");
        }
        else if(wicket>0 && wicket<=10)
        {
            setMessage("Better luck next time");
        }
    },[wicket]);
    return(
        <div>
        <h1>Cricket Scoreboard</h1>
      <div >
        <button onClick={runchase}>Run</button>
        <button onClick={wickets}>Wicket</button>
      </div>
      <div>
        <p>Runs:{run}</p>
        <p>Wickets:{wicket}</p>
        <p>{message}</p>
      </div>
    </div>
    );
}
export default App19;