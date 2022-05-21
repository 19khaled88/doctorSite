import React, { useEffect, useState } from 'react'
import Banner from '../Home/Banner/Banner'
import AvailableAppointment from './AvailableAppointment/AvailableAppointment'
import AvailableSlot from './AvailableSlot/AvailableSlot'
import BookingModal from './BookingModal/BookingModal'
const services = {
  1: 'Teeth Orthodontrics',
  2: 'Cosmetic Dentistry',
  3: 'Teeth Cleaning',
  4: 'Cavity Protection',
  5: 'Pediatric Dental',
  6: 'Oral Surgery',
}

const Appointment = () => {
  const [selected, setSelected] = useState(new Date())
  const [booking, setBooking] = useState([])
  const [service, setService] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])
  return (
    <>
      <Banner setSelected={setSelected} selected={selected}></Banner>
      <AvailableAppointment
        services={services}
        service={service}
        date={selected}
      ></AvailableAppointment>
      <AvailableSlot setBooking={setBooking} service={service}></AvailableSlot>
      {booking && (
        <BookingModal date={selected} booking={booking}></BookingModal>
      )}
      {/* <BookingModal booking={booking}></BookingModal> */}
    </>
  )
}

export default Appointment
