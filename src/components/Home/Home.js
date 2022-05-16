import React from 'react'
import { NormanServices } from '../Services/NormalService/NormanServices'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import Appointment from './Appointment/Appointment'
import Banner from './Banner/Banner'
import Info from './Info/Info'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
    </>
  )
}

export default Home
