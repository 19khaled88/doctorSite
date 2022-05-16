import React from 'react'
import { NormanServices } from './NormalService/NormanServices'
import fluoride from '../../assets/fluoride.png'
import cavity from '../../assets/cavity.png'
import whitening from '../../assets/whitening.png'
import treatment from '../../assets/treatment.png'
import ExceptionalCare from './ExceltionalCare/ExceptionalCare'
const title = ['Fluoride Treatment', 'Cavity Filling', 'Teeth Whitening']
const Services = () => {
  return (
    <>
      <div className="pt-24 pb-16">
        <p style={{ color: '#19D3AE' }} className="uppercase">
          Our Services
        </p>
        <h5>Services We Provided</h5>
      </div>

      <div className="grid grid-row-1 md:grid-row-1  mx-auto  lg:grid-cols-3 gap-4 container px-12 justify-evenly pb-24">
        <NormanServices img={fluoride} title={title[0]}></NormanServices>
        <NormanServices img={cavity} title={title[1]}></NormanServices>
        <NormanServices img={whitening} title={title[2]}></NormanServices>
      </div>
      <div className="w-4/5 mx-auto">
        <ExceptionalCare img={treatment}></ExceptionalCare>
      </div>
    </>
  )
}

export default Services
