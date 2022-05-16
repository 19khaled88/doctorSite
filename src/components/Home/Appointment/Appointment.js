import React from 'react'
import doctor from '../../../assets/doctor.png'
import appointment from '../../../assets/appointment.png'
const Appointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 invisible  lg:visible ">
        <img className="mt-[-200px]" src={doctor} alt="" />
      </div>
      <div className="lg:flex-1 flex-auto text-left ">
        <h3 style={{ color: '#19D3AE' }} className="text-2xl">
          Appointment
        </h3>
        <h2 className="text-3xl text-white">Make and appointment Today</h2>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          repellendus accusamus aliquid possimus quis cupiditate architecto ipsa
          facilis velit et alias, ab ut voluptas doloribus optio odio voluptatem
          autem laudantium. Voluptatem delectus magni ut necessitatibus aut,
          ipsam perspiciatis repudiandae totam!
        </p>
        <div class="card-actions justify-start">
          <button className="btn bg-gradient-to-r from-blue-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Appointment
