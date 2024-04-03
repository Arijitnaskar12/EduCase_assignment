import { useState } from 'react'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'


function App() {
  const [flag, setFlag] = useState({signup:false,login:false});
  const[userData,setUserdata]=useState(null);
  return (
    <div className='app'>
    {
      userData?<Profile userData={userData}/>:flag.login?<Login setUserdata={setUserdata}/>:flag.signup?<SignUp setUserdata={setUserdata}/>:<Home flag={flag} setFlag={setFlag}/>
    }
      </div>
  )
}

export default App
