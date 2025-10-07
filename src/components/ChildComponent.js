import React from 'react'

const ChildComponent = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
        <form onSubmit={() => setIsLoggedIn(!isLoggedIn)}>
            <label>Username:</label>
            <input type='text' placeholder='enter your name' />
            <label>Password:</label>
            <input type='password' placeholder='enter your password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default ChildComponent