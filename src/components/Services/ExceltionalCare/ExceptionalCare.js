import React from 'react'

const ExceptionalCare = ({ img }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl container mb-56">
      <figure>
        <img className="w-80" src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-left">
          Exceptional Dental Care, On Your Terms
        </h2>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus molestiae rem eaque magni repellendus accusamus quasi
          harum! Dolores error alias deleniti, porro, reprehenderit recusandae
          corrupti earum saepe aut praesentium iure corporis minus odio sequi
          quam, ducimus possimus hic commodi natus tenetur culpa maxime enim
          impedit molestiae. Quos magnam modi beatae id nesciunt. Ex iure
          recusandae animi unde. Dignissimos aliquam totam iste, repudiandae
          officiis sed fuga ducimus magni eligendi veniam perferendis impedit
          mollitia laborum architecto nam in explicabo sint ipsam molestias!.
        </p>
        <div class="card-actions justify-start">
          <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExceptionalCare
