import React from 'react'
import clock from '../../../assets//clock.svg'
import InfoCard from './InfoCard/InfoCard'
const Info = () => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 gap-5">
      <InfoCard clock={clock}></InfoCard>
      <InfoCard clock={clock}></InfoCard>
      <InfoCard clock={clock}></InfoCard>
    </div>
  )
}

export default Info
