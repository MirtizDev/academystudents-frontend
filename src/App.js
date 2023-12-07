import About from "./components/About";
import AllCourses from "./components/AllCourses";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import {Routes,Route} from 'react-router-dom'
import "./style/css/style.css"
import Home from "./components/Home";
import { useEffect } from "react";
import CourseDetail from "./components/CourseDetail";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/courses"  element={<AllCourses/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/courses/:courseId" element={<CourseDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
