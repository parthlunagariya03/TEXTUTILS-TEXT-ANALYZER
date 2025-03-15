import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextFrom(props) {
     
    const handleUpCase = ()=>{
        // console.log("UpperCase was click");//its not mendetory(just check, is run perfectly!)
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLoCase = () =>{
        let newText = Text.toLowerCase();
        setText(newText);
    }
    

    const handleClearCase = () =>{
      let newText = "";
      setText(newText);
      setIsCopied(false);
  }

    const handleClipBoardCase = () => {
        navigator.clipboard.writeText(Text);
        setIsCopied(true);
        //console.log("Copied!!");
        //alert("Copied: " + Text);
        setTimeout(() => {
          setIsCopied(false);
      }, 3000);
      
    }

    const handleOnChange = (event) =>{
        // console.log("on change");//its not mendetory(just check, is run perfectly!)
        setText(event.target.value); 

    }

    const[Text,setText] = useState("");
    const[isCopied,setIsCopied] = useState(false);
  return (
    <>
 <div className='container'>
<h1>{props.heading}</h1>

   
<div className="mb-3" style={{ position: "relative", display: "inline-block", width: "100%" }}> 
  <textarea className="form-control" placeholder='Enter Your Text Here....' value={Text} onChange={handleOnChange} id="mybox" rows="8" style={{ width: "100%", paddingRight: "40px" }}></textarea>
  <div className='container my-3 mx-1'>
  <i
            onClick={handleClipBoardCase}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              background: "white",
              padding: "5px",
              borderRadius: "5px"
            }}
          >
                        {isCopied ? (
                            // Clipboard check icon after copying
                            <>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                            </svg> 
                            <span style={{ color: "dark"}}>  Copied!</span>
                            
                            </>
                           
                            
                        ) : (
                            // Default clipboard copy icon
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg>
                        )}
                    </i>
                </div>
</div>
<button className="btn btn-primary" onClick={handleUpCase}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoCase}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearCase}>Clear Text</button>
</div>
<div className='container my-3'>
    <h1>Your Text Summery</h1>
    <p>{Text.length>0 ? Text.split(" ").length : 0} words {Text.length} characters</p>
</div>
<div className='container'>
    <h2>Preview</h2>
    <p>{Text}</p>
</div>
    </>   
  )
}
