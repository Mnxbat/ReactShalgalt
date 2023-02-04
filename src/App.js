import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mainpage from "./Container/Mainpage";
import Redtext from "./components/Texts/Redtext";
import Greentext from "./components/Texts/Greentext";
import Bluetext from "./components/Texts/Bluetext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/box/text1" element={<Redtext />} />
        <Route path="/box/text2" element={<Greentext />} />
        <Route path="/box/text3" element={<Bluetext/>} />
      </Routes>   
   </BrowserRouter>
  );
}

export default App;