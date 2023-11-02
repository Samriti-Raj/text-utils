import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoclick=()=>{
        console.log("lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearclick=()=>{
        console.log("lowercase was clicked" + text);
        let newText=('');
        setText(newText);
        props.showAlert("Cleared text","success");
    }


    const handleonChange=(event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value)
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove the extraspace","success");
    }

   
    const [text, setText] = useState(' ');
    //setText("New text");
    return (
    <><div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColor : props.mode==='dark'?'#252B48':'white',color : props.mode==='dark'?'white':'black'}} value={text} onChange={handleonChange} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{backgroundColor : props.mode==='dark'?'#252B48':'white'}}>
        <h1 style={{color : props.mode==='dark'?'white':'black'}}>Text Summary</h1>
        <p style={{color : props.mode==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} charcters</p>
        <p style={{color : props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").length}Minutes read</p>
        <h2 style={{color : props.mode==='dark'?'white':'black'}}>Preview</h2>
        <p style={{color : props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>
    </>
  );
}
