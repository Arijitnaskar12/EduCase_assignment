import React from 'react'

const Profile = ({userData}) => {
  return (
    <div className='main profile'>
    <div>
    <h1 className='heading'>Account Settings</h1>
    </div>
    <div className="details">
    <div className='userinfo'>
    <img src='https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc'></img>
        <div>
          <h3>{userData.fullName}</h3>
          <h4>{userData.email}</h4>
     </div>
    </div>
    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad eveniet quos dolores earum reiciendis magni odit, eos tenetur molestiae.
    </p>         
    </div>
    </div>
  )
}

export default Profile