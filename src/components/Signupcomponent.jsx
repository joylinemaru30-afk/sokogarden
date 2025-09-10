import axios from 'axios';
import React, { useState } from 'react'

const Signupcomponent = () => {
    // hooks to capture the diffrent state of our application
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[password,setpassword]=useState("");
    // add three additional hooks to manage the state of your application
    const[loading,setloading]=useState("");
    const[success,setsuccess]=useState("");
    const[error,seterror]=useState("");
    const submit =async(e)=>{
      //prevent the site from reloading when the person click the signup button
      e.preventDefault();
      // update the loading hook with new message that the user shall see on the browser
      setloading("please wait as we upload your data.... ")

      try{
        // create a form data object that will hold all the data from the hooks 
        const data=new FormData();
        
        // add the diffrent details into the new object created
        data.append("username",username)
        data.append("email",email)
        data.append("password",password)
        data.append("phone",phone)

        // post your data to the backend API
        const response=await axios.post("https://joykosgei.pythonanywhere.com/api/signup",data)
        // set back the loading hook to empty
        setloading("")

        // by pressumption, we assume the regisrtration proccess went on well
        // therefore we update the success hook with a new message 

        setsuccess("user registered successfully")
        // clear the hooks for them to take in the new data
        setusername("")
        setphone("")
        setphone("")
        setemail("")
        setpassword("")

      }
      catch(error){
        // set the loading hook back to default(empty)
        setloading("")
        // if there was an error encountered during the registration proccess update the error hook
        seterror("SORRY,REGISTRATION FAILED AN EEROR OCCURED")

      }
      
    }
  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-6 p-4 shadow card">
            <h1>signup</h1>
            {loading}
            {success}
            {error}
            <form onSubmit={submit}>
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
          value={phone}
          onChange={(n)=>setphone(n.target.value)}
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