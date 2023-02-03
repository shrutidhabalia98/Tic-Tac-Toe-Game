import React from 'react';
import { db } from '../firebase';
import { useState } from 'react';
const tinyid = require('tiny-unique-id')


function Home() {

  const [input, setInput] =  useState('');
  const [url, setUrl] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let code = tinyid.unique();
    await db.collection("urls").add({
      url: url,
      code: code,
    });
    // alert("This is your URL - http://localhost:3001/l/" +code)
    setUrl(`${window.location.origin}/${code}`);

  };

  

  return (
    <div className='container' >
      <center>
      <h1 className="mt-4">URL Shortner</h1>
      <input type="text" disabled className='my-4 w-100' value={url} /><br/><br/>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='w-100' placeholder='Enter the URL here.....' /><br/><br/>
      <button className='btn btn-dark' onClick={handleFormSubmit} value=""> Shorten the Url </button>
      </center>
    </div>
  )
}

export default Home
