import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Google from './Google'
import Signup from './Signup'
import Login from './Login'
const Register = () => {
  const [state, setState] = useState('')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)
  const loginPageRedirect = (login) => {
    setState(login)
  }
  const signupPageRedirect = (signup) => {
    setState(signup)
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-[-50]">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body flex flex-col justify-center items-center">
            {state === 'login' ? (
              <Login signupPageRedirect={signupPageRedirect}></Login>
            ) : (
              <Signup loginPageRedirect={loginPageRedirect}></Signup>
            )}

            <Google></Google>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
