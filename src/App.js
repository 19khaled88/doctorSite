import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import About from './components/About/About'
import Appointment from './components/Appointment/Appointment'
import Register from './components/Auth/Register/Register'
import RequiredAuth from './components/Auth/RequiredAuth/RequiredAuth'
import BookingSlot from './components/BookingSlot/BookingSlot'
import Contact from './components/Contact-us/Contact'
import Home from './components/Home/Home'
import Reviews from './components/Reviews//Reviews'
import CreateServices from './components/Services/MakeServices/CreateServices'
import Navbar from './components/Shared/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route
            path="/appointment"
            element={
              <RequiredAuth>
                <Appointment></Appointment>
              </RequiredAuth>
            }
          />
          <Route path="/contact-us" element={<Contact></Contact>} />
          <Route path="/reviews" element={<Reviews></Reviews>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/services" element={<CreateServices></CreateServices>} />
          <Route
            path="/slot"
            element={
              <RequiredAuth>
                <BookingSlot></BookingSlot>
              </RequiredAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
