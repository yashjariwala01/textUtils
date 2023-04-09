 import React, { useState } from 'react'
 
 function TextForm(props){
    const [text, setText] = useState("")
    const [findWord, setFindWord] = useState("");
    const [replaceWord, setReplaceWord] = useState("");


    const eventListenerForUC =()=>{
        console.log("up clicked"+" " +text)
        let newTxt = text.toUpperCase()
        setText(newTxt);
        props.showAlert("Converted to Upper case!", "success")
    }

    const eventListenerForLC =()=>{
        console.log("lower clicked"+" " +text)
        let newTxt = text.toLowerCase()
        setText(newTxt) 
        props.showAlert("Converted to Lower case!", "success")
    }

    const changeEvent =(event)=>{
        // console.log("on Change is fired")
        let changingText =event.target.value
        setText(changingText);
        console.log(text)
        
    }

    function eventListenerForCT(){
        let text = document.getElementById("textUtil")
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to Clipboard", "success")
    }

    const handleFindChange=(event)=>{
        setFindWord(event.target.value);
    }

    const handleReplaceChange=(event)=>{
        setReplaceWord(event.target.value)
    }

    const handleReplaceClick=()=>{
        const replacedtext = text.replaceAll(findWord,replaceWord)
        setText(replacedtext);
    }
        
    return(
    <>
        <div className ="constainer" style={{color: props.mode==="dark"? 'white': 'black'}}>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
            <textarea className="form-control" onChange={changeEvent} value={text} id="textUtil" style={{backgroundColor: props.mode==="dark" ? 'grey': 'white', color: 
            props.mode==="dark"? 'white': 'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={eventListenerForUC}>To Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={eventListenerForLC}>To lower Case</button> 
        <button className="btn btn-primary mx-2" onClick={eventListenerForCT}>copy text</button><br/>
        <div className="mt-3 ">
            <label className='' htmlFor="find">Find</label>
            <input className="mx-2" value={findWord} onChange={handleFindChange} type="text" id='find'/>
            <label className="mx-3" htmlFor="replace">Replace</label>
            <input value={replaceWord} onChange={handleReplaceChange} type="text" id="replace" />
        </div>
       <div>

       <button onClick={handleReplaceClick} className="btn btn-primary my-3" >Find and Replace</button>
       </div>

        </div>  
        
        <div className="container my4" style={{color: props.mode==="dark"? 'white': 'black'}} >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{Math.floor(0.008 * text.split(" ").length)} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.slice(0,500)}...</p>
        </div>

    </>
    )
 }

 export default TextForm;


