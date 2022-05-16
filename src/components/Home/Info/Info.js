import React from 'react'
import clock from '../../../assets/clock.svg'
import marker from '../../../assets/marker.svg'
import phone from '../../../assets/phone.svg'
import InfoCard from './InfoCard/InfoCard'
const Info = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        title={'openning hours'}
        bgClass={'bg-gradient-to-r from-secondary to-primary'}
        img={clock}
      ></InfoCard>
      <InfoCard
        title={'Your Location'}
        bgClass={'bg-accent'}
        img={marker}
      ></InfoCard>
      <InfoCard
        title={'Contact us'}
        bgClass={'bg-gradient-to-r from-primary to-secondary'}
        img={phone}
      ></InfoCard>
    </div>
  )
}

export default Info
