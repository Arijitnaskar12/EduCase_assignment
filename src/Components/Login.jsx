import React, { useState } from 'react'

const Login = ({setUserdata}) => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails(prevUser => ({
          ...prevUser,
          [name]: value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setUserdata({...loginDetails});
      };
  return (
   <div className='main customClass'>
    <h1>Signin to your PopX Account</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <form onSubmit={handleSubmit} className='formData'>
    <fieldset>
    <legend>Email Address</legend>
    <input type="email" name='email' placeholder='Enter Your Email' required onChange={handleChange}/>
    </fieldset>
    <fieldset>
    <legend>Password</legend>
    <input type="Password" name='password' placeholder='Enter Your Password' required onChange={handleChange}   />
    </fieldset>
    <button className='blubtn btn'>Login</button>
    </form>
 </div>
  )
}
export default Login