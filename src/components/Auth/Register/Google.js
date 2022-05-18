import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../firebase.init.js'
const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }
  if (loading) {
    return <p>Loading...</p>
  }
  if (user) {
    console.log(user)
  }
  return (
    <>
      <div class="divider">OR</div>
      <button class="btn btn-wide btn-xs" onClick={() => signInWithGoogle()}>
        Login with google
      </button>
    </>
  )
}

export default Google
