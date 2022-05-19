import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import auth from '../firebase.init';
const Signup = ({ loginPageRedirect }) => {
  const [signUpError, setSignUpError] = useState('')
  const [signUpLoading, setSignUpLoading] = useState('')
  const [signupName, setSignUpName] = useState('')
  const navigate = useNavigate()
  // const [signUpLoading, setSignUpLoading] = useState('')
  const [singUpUser ] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) =>{ 
    if(data.password === data.c_password){
      const email = data.email;
      const password = data.password;
      createUserWithEmailAndPassword(email, password)
    }else{
      setSignUpError('password not match')
    }
  }
  if (error) {
    setSignUpError(error.message)
    // return (
    //   <div>
    //     <p>Error: {error.message}</p>
    //   </div>
    // );
  }
  if (loading) {
    // setSignUpLoading('Please wait...')
    return <Loading />
    // return (<p>Loading...</p>)
  }
  if (user) {
    navigate('/')
    // return (
    //   <div>
    //     <p>Registered User:</p>
    //     <p>{singUpUser.email}</p>
    //   </div>
    // );
  }
  const forgetPasswordHandler=()=>{
   
  }
  return (
    <>
      <h4 className="cart-title">Sign Up page</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-sm w-full max-w-xs"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide valid email',
              },
            })}
          />
          <label className="label">
            {errors.email?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            className="input input-bordered input-sm w-full max-w-xs"
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: { value: 6, message: 'Minimun length is 6' },
            })}
          />
          <label className="label">
            {errors.password?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === 'minLength' && (
              <span className="label-text-alt text-red-400">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Confirm Password"
            className="input input-bordered input-sm w-full max-w-xs"
            {...register('c_password', {
              required: {
                value: true,
                message: 'Confirm Password is required',
              },
              minLength: { value: 6, message: 'Minimun length is 6' },
            })}
          />
          <label className="label">
            {errors.c_password?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.c_password.message}
              </span>
            )}
            {errors.c_password?.type === 'minLength' && (
              <span className="label-text-alt text-red-400">
                {errors.c_password.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex flex-col">
          <span className="text-red-400"> {signUpError ?'Error:'+ signUpError : ''}</span>
          <span className="text-red-400"> {signUpLoading ?'Loading:'+ signUpLoading : ''}</span>
          <button className="btn btn-wide btn-xs" value="login" type="submit">
            Sign Up
          </button>
        </div>
        
      </form>
      <div className="flex flex-row">
        <button className="text-sm" onClick={()=>forgetPasswordHandler()}>Forgot Password?</button>
        <button
          className="btn btn-link text-sm"
          onClick={() => loginPageRedirect('login')}
        >
          Have Account?
        </button>
      </div>
    </>
  )
}

export default Signup
