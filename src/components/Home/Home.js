import React from 'react'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import Appointment from './Appointment/Appointment'
import Banner from './Banner/Banner'
import Info from './Info/Info'
const boxOffice=
   ( <div className="text-left">
    <h1 class="text-5xl font-bold">Box Office News!</h1>
    <p class="py-6">
      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
      excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
      a id nisi.
    </p>
    <button class="btn btn-primary">Get Started</button>
    </div>)


const Home = () => {
  return (
    <>
      <Banner text={boxOffice}></Banner>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
    </>
  )
}

export default Home
