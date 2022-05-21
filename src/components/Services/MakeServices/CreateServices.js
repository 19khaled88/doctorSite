import React, { useRef } from 'react'
import { toast } from 'react-toastify'

const CreateServices = () => {
  const serviceName = useRef(null)
  const shortDesc = useRef(null)

  const formHandler = (e) => {
    e.preventDefault()
    const name = serviceName.current.value
    const description = shortDesc.current.value
    const value = {
      name: name,
      desc: description,
    }
    if (name !== '' && description !== '') {
      fetch('http://localhost:5000/createService', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(value),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          toast('Service added successfully')
          e.target.reset()
        })
        .catch((error) => console.log(error))
    } else {
      toast('Any field must not be empty')
    }
  }
  return (
    <div className="mt-24">
      <p className="text-2xl pb-6">Create Service</p>
      <form
        onSubmit={formHandler}
        className=" grid grid-cols-1 gap-3 justify-items-center"
      >
        <input
          ref={serviceName}
          type="text"
          placeholder="Service name"
          class="input input-bordered w-full max-w-xs"
        />

        <textarea
          type="text"
          ref={shortDesc}
          placeholder="short description"
          class="input input-bordered w-full max-w-xs"
        />

        <button class="btn btn-success w-full max-w-xs">Submit</button>
      </form>
    </div>
  )
}

export default CreateServices
