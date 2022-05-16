import React from 'react'
import Card from './Card/Card'
import people1 from '../../assets/people1.png'
import people2 from '../../assets/people2.png'
import people3 from '../../assets/people3.png'
import quotation from '../../assets/quotation-mark.png'
const Testimonial = () => {
  return (
    <section className="flex flex-col mt-24 pb-16">
      <div className="flex flex-row justify-between px-12 text-left pb-16">
        <div>
          <h4 className="text-2xl">Testimonial</h4>
          <p className="text-3xl">What Our Patients Says</p>
        </div>
        <img className="w-32 h-26" src={quotation} />
      </div>
      <div className="mx-auto">
        <div className="grid grid-row-1 md:grid-row-1 lg:grid-cols-3 gap-4">
          <Card img={people1}></Card>
          <Card img={people2}></Card>
          <Card img={people3}></Card>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
