import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/chair.png';
const Banner = ({text,date}) => {
  const [selected, setSelected] = useState(new Date())
  console.log(selected)
  let footer = <p>Please pick a day</p>
  if(selected){
    footer = <p>You have picked {format(selected, 'PP')} </p>
  }
  return (
    <div class="hero min-h-screen px-12">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        {text ? text : <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer}/>}
      </div>
    </div>
  )
}

export default Banner
