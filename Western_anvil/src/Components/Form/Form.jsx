import React, { useContext } from 'react'
import userContext from "../../Context/AuthContext"
const Form = ({handleSubmit}) => {
  const {setEmail,setPassword,user}=useContext(userContext)
  console.log(user)
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Email</label>
        <input required  type="email" onChange={(e)=>setEmail(e.target.value)}/>
      </p>
      <p>
        <label>Password</label>
        <input required type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </p>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form