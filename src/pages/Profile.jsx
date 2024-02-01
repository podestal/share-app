import React from 'react'
import useUser from '../hooks/useUser'

const Profile = () => {

  const {user} = useUser()

  return (
    <div className='main-body'>
      <h2>{user?.username}</h2>
      <p>{user?.active}</p>
    </div>
  )
}

export default Profile