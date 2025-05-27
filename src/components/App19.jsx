import React, { useCallback, useState } from "react";   
function App19()
{
    const [run,setRun]=useState(1);
    const[wicket,setWicket]=useState(0);
    const [message,setMessage]=useState("");
    const runchase=()=>{
        if(wicket<11)
        {
            setRun(run+1);
            setMessage("Well done boy!..");
        }
    }
    const wickets=()=>{
        if(wicket<11)
        {
            const x=wicket+1;
            setWicket(x);
            if(x==11)
            {
                setMessage("Game over");
            }
            else
            {
                setMessage("Better luck next time");
            }
        }
    }
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