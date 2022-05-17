import React from 'react';
import Banner from '../Home/Banner/Banner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
const services = {
 1: 'Teeth Orthodontrics',
 2: 'Cosmetic Dentistry',
 3: 'Teeth Cleaning',
 4: 'Cavity Protection',
 5: 'Pediatric Dental',
 6: 'Oral Surgery'}


const Appointment = () => {
 
  return(<>
          <Banner></Banner> 
          <AvailableAppointment services={services}></AvailableAppointment>
        </>
    )
}

export default Appointment
