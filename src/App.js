import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#252B48';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light mode';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
