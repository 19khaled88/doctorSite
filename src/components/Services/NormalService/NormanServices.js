import React from 'react'

export const NormanServices = ({ img, title }) => {
  return (
    <>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center mx-auto">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  )
}
