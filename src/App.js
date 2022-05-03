import React from "react"
import "./App.css"
import {Routes, Route} from "react-router-dom"
import {Home} from "./Pages/HomePage/Home";
import {Login} from "./Pages/HomePage/Authentication/Login"
import { Signup } from "./Pages/HomePage/Authentication/Signup";
import {Notes} from "./Pages/HomePage/CreateNotes/Notes";

// import "/home/admin123/Desktop/note-app/src/Components/Navbar/Utilities/utilities.css"
// import { Navbar } from "./Components/Navbar/navbar";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/Notes" element={<Notes />} />
    </Routes>
      
    </div>
  );
}

export default App;
