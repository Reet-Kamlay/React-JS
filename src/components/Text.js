import React,{useState} from 'react'

export default function Text(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text)
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted To Uppercase!","success")
    }
    const handleLoClick = ()=>{ 
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{ 
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!", "success");
  }
    const handleOnchange=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
  }

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
  }
    const[text,setText]=useState("Enter text here");
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"value={text} onChange={handleOnchange} style={{color:props.mode==='dark'?'white':'#042743',backgroundColor:props.mode==='dark'?'grey':'white'}}id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary"onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>It can be read in {0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
    </div>
    </>
  )
}
