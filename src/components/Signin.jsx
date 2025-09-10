import React, { useState } from 'react'

const Signin = () => {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-4 card shadow">
        <h1>signin</h1>
        <form >
          <input type="text"
          className="form-control"
          placeholder="enter your email here"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          
          />
          {email}
          <br />
          <input type="text" 
          className="form-control"
          placeholder="enter your password here"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          
          />
          {password}
          <br />
          <button type="submit" className="btn btn-success">signup</button>
        
        </form>
        
    </div>
    </div>

  )
}

export default Signin