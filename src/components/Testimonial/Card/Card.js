import React from 'react'

const Card = ({ img }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut non
          nemo beatae voluptates omnis, quis vitae nesciunt earum facilis quod,
          quidem ipsum laboriosam itaque?
        </p>
      </div>
      <figure className="pb-4">
        <img className="w-16 h-16" src={img} alt="Shoes" />
        <div>
          <p className="text-2xl text-left">Wilson Herry</p>
          <p className="text-left">California</p>
        </div>
      </figure>
    </div>
  )
}

export default Card
