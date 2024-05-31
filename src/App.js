import { useState } from 'react';
import React from "react";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  const togglemode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled", "success");
      (document.title = "TextUtils - Dark mode");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
      (document.title = "TextUtils - Light mode");
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About US"/> */}
    {/* <Navbar />  */}
    <Router>
      
    <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Routes>
      <Route path="/about" element={<About mode={mode}/>} />
      <Route path="/" element={<TextForm heading="Try Textutils - Word counter, character counter, Remove Extra spaces" mode={mode} showAlert={showAlert}/>} />
    </Routes>
    {/* <TextForm heading="Enter the Text to analyze below" mode={mode} showAlert={showAlert}/> */}
    {/* <About/> */}
    </div>
    </Router>

    </>
  );
}

export default App;
