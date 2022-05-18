// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxtHByUAVDqmZghuJw6ZSAUYPO4sr_j_g',
  authDomain: 'doctorappointment-4a42b.firebaseapp.com',
  projectId: 'doctorappointment-4a42b',
  storageBucket: 'doctorappointment-4a42b.appspot.com',
  messagingSenderId: '171141967788',
  appId: '1:171141967788:web:4fb0d22da3123d582a9409',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
