import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./Router/Home";
import About from "./Router/About";
import Career from "./Router/Career";
import Teams from "./Router/Teams";
import Contact from "./Router/Contact";
import Nav_bar from './Components/Nav_bar'
import Search_items from './Components/Search_items'
function App() {
  return (
    <>
    <Router>
      <Nav_bar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/career' element={<Career/>}></Route>
        <Route path='/teams' element={<Teams/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path={"/products/search/:term"} element={<Search_items/>}></Route>
      </Routes>
    </Router>
    </>  
  )
}

export default App
