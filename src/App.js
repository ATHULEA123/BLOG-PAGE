import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Main from "./components/Dashboard/Main";
import Homepage from "./Homepage";





function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/Dashboard" element ={ <Main/>} />
      <Route path="/" element ={<Homepage/>} />
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
