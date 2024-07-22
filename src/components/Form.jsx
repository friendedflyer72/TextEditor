import React, { useState } from 'react';
import Container from "./Container";

export default function Form(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
//handle upper case
  const handleUppercase = () => {
    if (text.length === 0) {
      return props.showAlert("Enter some text to perform your task", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Your text converted to Uppercase", "success");
    }
  };
//handle lower case
  const handleLowercase = () => {
    if (text.length === 0) {
      return props.showAlert("Enter some text to perform your task", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Your text converted to Lowercase", "success");
    }
  };


  let wordCount = text.split(" ").filter((element) => { return element.length !== 0 }).length;

  return (
    <div>
      <Container>
        <div className="mb-3">
          <label className="mb-3" htmlFor="text">
            <h1 className='text-3xl font-bold mb-2'>{props.heading}</h1>
          </label>
          <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={text} onChange={handleOnChange} id="text" style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#2c2556" }} rows="20"></textarea>
          
          <div className='my-5 border rounded px-5 pb-2 pt-2.5'>
            <h2 className='text-xl mb-3'>Text Edit Tools:</h2>
            <button disabled={text.length === 0} className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 ml-5" onClick={handleLowercase}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 ml-5" onClick={handleUppercase}>Convert to Uppercase</button>
            {/* <button disabled={text.length === 0} className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 ml-5" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button> */}
            {/* <button disabled={text.length === 0} className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 ml-5" onClick={handleCapitalize}>Capitalize Per Word</button> */}
            {/* <button disabled={text.length === 0} className="inline-block rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 ml-5" onClick={handleCopy}>Copy Text</button> */}
          </div>
        </div>
      
      <div className="border px-5 pb-2 pt-2.5 my-3" style={{ color: props.mode === "dark" ? "white" : "#2c2556" }}>
        <h1 className='text-xl mb-3'>Your Text Summary</h1>
        <p>Number of characters: {text.length} <br />
          Number of words: {wordCount} <br />
          Time to speak text: {Math.floor(0.008 * wordCount * 100) / 100} min <br />
          Time to read text: {Math.floor(0.005 * wordCount * 100) / 100} min
        </p>
        <h1 className='text-xl mt-3'>Preview</h1>
        <p><i>{text.length > 0 ? text : "Enter some text in the textBox above to preview it"}</i></p>
      </div>
      </Container>
    </div>
  );
}
