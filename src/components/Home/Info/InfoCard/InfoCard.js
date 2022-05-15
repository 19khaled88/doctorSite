import React from 'react'

const InfoCard = ({ img, title, bgClass }) => {
  return (
    <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
