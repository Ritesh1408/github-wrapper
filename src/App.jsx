import React, { useState } from 'react'
import './App.css'
import axios from 'axios';

const App = () => {

  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState();

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const response = await axios.get('https://api.github.com/users/' + username);
    console.log(response.data);
    setUserInfo(response.data);
  }

  return (
    <div>
      <div className="container">
        <h1 className='heading'>GitHub Wrapper</h1>
        <form className='formCard' onSubmit={handleFormSubmit}>
          <input type='text' onChange={e => setUsername(e.target.value)}/>
          <button>Search</button>
        </form>
        {userInfo && (<div className="userDetailsCard">
          <div className="userDetailsBody">
            <p className="name">{userInfo.name}</p>
            <em className='username'>{userInfo.login}</em>
            <div className='follow'>
              <p>Followers: {userInfo.followers}</p>
              <p>Followings: {userInfo.following}</p>
            </div>
            <div className='profession'>
              <p> 💼 {userInfo.company}</p>
              <p> ✍️ {userInfo.bio}</p>
            </div>
            <div className='location'>
              <p>📍 {userInfo.location}</p>
              <p>🌐 www.riteshroushan.com</p>
            </div>  
          </div>
          <div className="userImg">
            <img src={userInfo.avatar_url} alt="Profile.img" />
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default App;
