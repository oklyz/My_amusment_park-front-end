import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()

  const initialState = {
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmPassword: '',
    avatar:null
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser(formValues)
    setFormValues(initialState)
    navigate('/sign-in')
  }

  return (
    <div className='sign-form'>
      <img src='./image.png' alt="profile-picture" />
      <form onSubmit={handleSubmit}>
        <div className='image-holder'>
          <label htmlFor="avatar">Profile Picture</label>
          <input type="file" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input
            name="firstname"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={formValues.firstname}
            required
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor="lastname">Last Name</label>
          <input
          name='lastname'
          type='text'
          placeholder='Last Name'
          onChange={handleChange}
          value={formValues.lastname}
          required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            value={formValues.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
            required
            autoComplete="off"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
            autoComplete="off"
          />
        </div>
        <button
          disabled={
            !formValues.firstname || 
            !formValues.lastname ||
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword)}
              >Sign up
        </button>
      </form>
    </div>
  )
}

export default SignUp