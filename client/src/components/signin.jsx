import { SignInPlayer } from '../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn({ player, setPlayer, setIsLoggedIn }) {

  let navigate = useNavigate()
  // this form is so we have a local state where we can house the form information
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const signInFormHandleChange = async (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const signInFormHandleSubmit = async (event) => {
    event.preventDefault()
    // the payload is capturing the newly bcrypted token
    const payload = await SignInPlayer(formValues)
    setFormValues({ email: '', password: '' })
    // setting the App state with the payload so we can check session later
    setPlayer(payload)
    setIsLoggedIn(true)
    navigate('/groups')
  }

  return (
    <section>
      <form onSubmit={signInFormHandleSubmit}>
        <input type="text" name='email' value={formValues.email} placeholder="Email" onChange={signInFormHandleChange} />
        <input type="text" name='password' value={formValues.password} placeholder="Password" onChange={signInFormHandleChange} />
        <button type="submit">Log In</button>
      </form>
    </section>
  )
}