import React, { useState } from 'react';

const SignUp = ({setUserdata}) => {
  const [user, setUser] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setUser(prevUser => ({
      ...prevUser,
      agency: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserdata({...user});
  };

  return (
    <div>
      <div className='main customClass'>
        <h1>Create your PopX Account</h1>
        <form onSubmit={handleSubmit} className='formData'>
          <fieldset>
            <legend>Full Name<span className='tick'>*</span></legend>
            <input type="text" name="fullName" placeholder='Enter Your Fullname' required onChange={handleChange} />
          </fieldset>
          <fieldset>
            <legend>Phone number<span className='tick'>*</span></legend>
            <input type="text" name="phoneNumber" placeholder='Enter Your Phone Number' required onChange={handleChange} />
          </fieldset>
          <fieldset>
            <legend>Email address<span className='tick'>*</span></legend>
            <input type="email" name="email" placeholder='Enter Your Email' required onChange={handleChange} />
          </fieldset>
          <fieldset>
            <legend>Password<span className='tick'>*</span></legend>
            <input type="password" name="password" placeholder='Enter Your Password' required onChange={handleChange} />
          </fieldset>
          <fieldset>
            <legend>Company Name</legend>
            <input type="text" name="companyName" placeholder='Enter Your Company Name' onChange={handleChange} />
          </fieldset>
          <div>
            <label htmlFor="agency">Are you an Agency?<span className='tick'>*</span></label>
            <div className='radios'>
              <input type="radio" name="agency" id="yes" value="Yes" onChange={handleRadioChange} />Yes
              <input type="radio" name="agency" id="no" value="No" onChange={handleRadioChange} />No
            </div>
          </div>
          <button type="submit" className='blubtn btn crbtn'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
