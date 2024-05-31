import React,{useState} from "react";

// Declare a new state variable, which we'll call "count"
// const [count, setCount] = useState(0);



const TextForm = (props) => {

    const handleUpclick = () =>{
        // console.log("Upclick was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    
    const handleLowclick = () =>{
        // console.log("Upclick was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    
    const handleCapitalise = () => {
        const lowerCase = text.toLowerCase();
        const handle = lowerCase[0].toUpperCase() + lowerCase.slice(1);
        setText(handle);
        props.showAlert("Converted to Capitalise", "success");
    };
    
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("All clear", "success");
    };
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking", "success");
    }
    
    const handleCopy=()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to ClipBoard", "success");
    }
    
    const handleExtraspace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("OnChange");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    // text = "New Text" // wrong way to change the state
    // setText("New Text") // Right way to change the state

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8">
            </textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalise}>Capitalise</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove Extra Space</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        </div>

        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
  );
};

export default TextForm;
