import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInUser } from "../services/auth";

const SignIn = ({setUser, user}) => {
  const initialState = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialState);
  let navigate = useNavigate();
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      const payload = await SignInUser(formValues);
      setFormValues(initialState);
      setUser(payload);
      navigate("/");
    }
  };

  return (
    <div className='sign-form'>
      <form className="sign-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
          />
        </div>
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
