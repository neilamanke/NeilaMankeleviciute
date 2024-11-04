import { useState } from "react";
import "./App.css";
import { HomePage } from "../pages/Homepage";
import {Navigation} from "../pages/Navigation"
import { Feedback } from "../pages/Feedback";
import { Login } from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <Navigation/>
    <Routes>
    <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<HomePage />} />
        <Route pathe="/login" element={<Login/>}>
        <Route path="/feedback" element={<Feedback />} />
        </Route>

    </Routes>
    
    </>
  );
}

export default App;
