import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Appointment from './components/Appointment/Appointment'
import Home from './components/Home/Home'
import Navbar from './components/Shared/Navbar'
import Contact from './components/Contact-us/Contact'
import Reviews from './components/Reviews//Reviews'
import Register from './components/Auth/Register/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/appointment" element={<Appointment></Appointment>} />
          <Route path="/contact-us" element={<Contact></Contact>} />
          <Route path="/reviews" element={<Reviews></Reviews>} />
          <Route path="/register" element={<Register></Register>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
