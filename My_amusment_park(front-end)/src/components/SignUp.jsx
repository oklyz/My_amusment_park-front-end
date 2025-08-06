import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

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
    console.log(formValues)
    await RegisterUser({
      firstName: formValues.firstname,
      lastName: formValues.lastname,
      password: formValues.password,
      email: formValues.email,
      confirmPassword: formValues.confirmPassword
    })
    setFormValues(initialState)
    navigate('/sign-in')
  }

  return (
    <div className='sign-form-up'>
      
      <form onSubmit={handleSubmit} className='up'>
        
        <div className="input-wrapper">
          
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
          
          <input placeholder='password'
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
            required
            autoComplete="off"
          />
        </div>
        <div className="input-wrapper">
          
          <input placeholder='confirmPassword'
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
            autoComplete="off"
          />
        </div>
        <button className='b-up'
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