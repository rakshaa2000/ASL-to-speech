import React, {useState} from "react"

const TranscribedText = (props) =>{
    //const [ content, setContent ] = useState("")
    return (
    <div className="TT">
        <div className="optxt">
            <h2>You are saying:</h2>
            {props.outText}
        </div>
          
        <button className="audioButton" onClick={() => alert("insert call to audio api")}>Audio playback</button>
      </div>
    );
  }
  
export default TranscribedText;