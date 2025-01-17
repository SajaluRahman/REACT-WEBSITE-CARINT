import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Router>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App