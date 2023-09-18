import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {                                      //to convert into uppercase with the help of javascript function
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleLoClick = () => {                                       //to convert into lowercase with the help of javascript function
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

  }

  const handleClearClick = () => {                                  //to convert into lowercase with the help of javascript function
    let newText = ' ';
    setText(newText);
    props.showAlert("Textarea is cleared","success");

  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleReverse = (event) => {
    let strArr = text.split("");                               /* Convert string to array*/
    strArr = strArr.reverse();                                 /* Reverse array*/
    let newText = strArr.join("");                               /* Convert array to string*/
    setText(newText);
    props.showAlert("Reversed the text ","success");

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();                                             // Use lowercase 'select' instead of 'Select'
    document.execCommand("copy");                              // Use document.execCommand("copy") to copy the selected text to the clipboard
    props.showAlert("Copied to clipboard","success");

  };

  const handleOnChange = (event) => {                                  // to change the value of text when someone wants to write
    setText(event.target.value);
  }
  const [text, setText] = useState(" ");                           //react hooks


  return (
    <div className={`h-[90vh] mt-[-40px] ${props.mode === 'cyan' ? 'text-black' : 'text-white'}`}  >
      <div >
        <div className=' '>
          <h1 className="text-2xl font-bold ml-96 mt-16 mb-9 font-sans"> {props.heading}</h1>

        </div>
        <div className="mb-3">
          <textarea className="form-control resize rounded-md w-[50%] m-auto shadow-2xl" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-300 ml-96 my-2 " onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-300 ml-2  my-2 " onClick={handleLoClick}> Convert to Lowercase</button>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-300 ml-2  my-2 " onClick={handleClearClick}> Clear text</button>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-300 ml-2  my-2 " onClick={speak}> Speak</button>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-300 ml-2  my-2 " onClick={handleReverse}> Reverse</button>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-300 ml-2  my-2 " onClick={handleCopy}> Copy Text </button>


      </div>
      <div className="container" >
        <h1 className="text-2xl font-bold ml-[365px] my-4  font-sans"> Your text summary</h1>
        <p className=" ml-[365px] ">{text.split(/\s+/ ).filter((element)=>{ return element.length!==0}).length} words and {text.length} character</p>
        <p className=" ml-[365px] "> {0.008 * text.split(" ").length} Minutes to read</p>
        <h2 className="text-xl font-bold ml-[365px] my-4  font-sans">Preview</h2>
        <p className=" ml-[365px] "> {text.length > 0 ? text : "Enter something in the textbox to preview it here"} </p>
      </div>
    </div>
  )
}
