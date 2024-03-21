import React from 'react'
import Usercard from "../components/Usercard"
import data from "../utils/data"
function Userlist() {
    
  return (
    <div>
      {data.map((name,email,age)=>{
        <Usercard name={name} email={email} age={age}/>
      })}
    </div>
  )
}

export default Userlist
