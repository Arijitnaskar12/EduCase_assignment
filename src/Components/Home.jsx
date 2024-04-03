import React from 'react'

const Home = ({flag,setFlag}) => {
  return (
    <div className="main">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="btns">
        <button className='btn blubtn' onClick={()=>setFlag({login:false,signup:true})}>Create Account</button>
        <button className='btn grybtn' onClick={()=>setFlag({login:true,signup:false})}>Already Registered?Login</button>
        </div>
        </div>
  )
}

export default Home