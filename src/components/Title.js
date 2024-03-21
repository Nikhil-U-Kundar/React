import React from 'react'


//code optimisation tips
 //1. props is --object
function Title(props) {
  return 
  <div><h1>
  {props.name}</h1>
  </div> ///wheneve we get name from screen we can pass to component to here
}

export default Title;
