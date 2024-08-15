
import React,{useState} from 'react'




 export default function Textform(props) {
  
    const handleUpClick = () =>{
    //  console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppecase","success");

    }
    const handlelowClick = () =>{
      //  console.log("Uppercase was clicked"+text);
          let newText=text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase","success");
      }
      const clearText = () =>{
        //  console.log("Uppercase was clicked"+text);
            let newText="";
            setText(newText);
            props.showAlert("Text cleared","success");
    
        }

        const handleCapitalize = () => {
          let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
          setText(newText);
          props.showAlert("Converted to Sentence case","success");
                }
          
          const reversed = () => {
            let splitWord = text.split("");

            let reverseWord = splitWord.reverse("");
            let joinedWords = reverseWord.join("");
            let newText = joinedWords

    setText(newText);
    props.showAlert("Converted to reversed string","success");
  }
     
        const speak = () => {
          let msg = new SpeechSynthesisUtterance();
          msg.text = text;
          window.speechSynthesis.speak(msg);
        }
        const extractNumbers = () => {
          const numbers = text.match(/\d+/g);
          if (numbers) {
            const extractedNumbers = numbers.join(', ');
            setText(extractedNumbers);
          } else {
            setText('No numbers found in the text');
          }
          props.showAlert("Extracted numbers","success");
        };
        const handleExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Extra spaces removed!", "success");
      }

        const extractSpecialChars = () => {
          const specialChars = text.match(/[^a-zA-Z0-9\s]/g);
          if (specialChars) {
            const extractedSpecialChars = specialChars.join(', ');
            setText(extractedSpecialChars);
          } else {
            setText('No special characters found in the text');
          }
          props.showAlert("Extracted special characters","success");
        };
        
        const handleCopy = () => {
          var text = document.getElementById("mybox");
          text.select();
          navigator.clipboard.writeText(text.value);
          document.getSelection().removeAllRanges();
          props.showAlert("Copied to Clipboard!", "success");
      }
      
    
          

        
  
    const handleonChange =(event) =>{
       // console.log("on change");
        setText(event.target.value);
    }

    const [text,setText]=useState('Enter text here');
// text=("new text");   //wrong way
// setText=("new text");  //correct way
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>
            {props.heading} 
        </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>

      </div>
      <button disabled={text.length===0}className='btn btn-primary mx-3 my-1' onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handlelowClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleCapitalize}>Sentence case</button>
      <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={reversed}>Reverse Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={extractNumbers}>Extract Numbers</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" style={{ marginTop: '10px' }} onClick={extractSpecialChars}>Extract Special Characters</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" style={{ marginTop: '10px' }} onClick={handleCopy}>Copy to Clipboard</button>
      <button disabled={text.length===0}  type="submit" onClick={speak} className="btn btn-primary mx-1 margin-top-2px"  style={{ marginTop: '10px' }} >Speak</button>
    
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
