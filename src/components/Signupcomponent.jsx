import React, { useState } from 'react'

const Signupcomponent = () => {
    // hooks to capture the diffrent state of our application
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[number,setnumber]=useState("");
    const[password,setpassword]=useState("");
  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-6 p-4 shadow card">
            <h1>signup</h1>
            <form>
          <input type="text"
          className='form-control'
          required
          placeholder='Enter  username here'
          value={username}
          onChange={(e)=>setusername(e.target.value)}
          
          />
          <br />
          {/* {username} */}

          <input type="email"
          className='form-control'
          required
          placeholder='Enter the email address here '
          value={email}text
          onChange={(r)=>setemail(r.target.value)}
          
          
          />
          <br />
          {/* {email} */}

          <input type="number" 
          className='form-control'
          required
          placeholder='Enter your phone number here'
          value={number}
          onChange={(n)=>setnumber(n.target.value)}
          />
          <br />
          {/* {number} */}
        
          <input type="password"
          className='form-control'
          required
          placeholder='Enter your password here'
          value={password}
          onChange={(n)=>setpassword(n.target.value)}
          />
          <br />
          
          {/* {password} */}

          <button type="submit" className="btn btn-primary">signup</button>

        </form>
        </div>
    </div>
  )
}

export default Signupcomponent