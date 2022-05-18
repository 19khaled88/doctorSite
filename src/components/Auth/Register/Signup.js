import React from 'react'
import { useForm } from 'react-hook-form'
const Signup = ({ loginPageRedirect }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <h4 class="cart-title">Sign Up page</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered input-sm w-full max-w-xs"
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
          <label class="label">
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

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: { value: 6, message: 'Minimun length is 6' },
            })}
          />
          <label class="label">
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

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Confirm Password"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register('c_password', {
              required: {
                value: true,
                message: 'Confirm Password is required',
              },
              minLength: { value: 6, message: 'Minimun length is 6' },
            })}
          />
          <label class="label">
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

        <button class="btn btn-wide btn-xs" value="login" type="submit">
          Sign Up
        </button>
      </form>
      <div className="flex flex-row">
        <button className="text-sm">Forgot Password?</button>
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
