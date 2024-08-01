import React, { useState } from 'react'

const XLoginpage = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [issubmitted,setIssubmitted] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(username === 'user' && password === 'password'){
            setIssubmitted(true)
            setError("")
        }
        else{
            setError("Invalid username or password")
        }
    }

  return (
    <div>
        <h1>Login Page</h1>
        {issubmitted ? 
        (
            <p>Welcome, {username}!</p>
        ):(

            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
            <div>
            <label>Username:</label>
             <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
            <label>Password:</label>
             <input type='text' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>
            </form>
        )}
        

    </div>
  )
}

export default XLoginpage