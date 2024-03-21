import React, { useEffect } from 'react'
import { useState } from 'react';

const expensivecallculation =(num)=>{
  console.log("calculating....");
  for(let i=0;i<10000000;i++){
    num+=1;
  }
  return num;
}//this takes 3-4 seconds


function Register() {
  const [todos,settodos]=useState(0);// to get data acees we are wirting this
  const [count,setCount]=useState([]);
   const calculation= useMemo(()=>expensivecallculation(count),[count]);
   //aboove the  memeoziation is done..it is storing the value inside the cacahe so it will be displayed very quick
  //function that we are alrady declared
  const increment=()=>{
    setCount((c)=> c + 1);
  }
  const addtodo=()=>{
    settodos((t)=>[...t,"new todo"]); //spreading operator ---used to push data inside the array in yhe use state
  };

return (
<div> 
     <div>
       <h2>My Tool</h2>
        {todos.map((todo,index)=>{
         return <p key={index}>{todo}</p>
})}
<button onClick={addtodo}>AddTodo</button>
  </div>
  <hr/>
  <div>
  Count:{Count}
  <button onClick={increment}>+</button>
  <h2>Expensive calculation</h2>
  {calculation}
</div>
</div>
);
}



export default Register


// ****************************this is done in the conditional rendering*****************************************

// return (
//   // if the age is above 12 then only show the form else snd ma=essaage that go  away from this
//   <form>
//   {/* conditional statement */}
//   {age>12 && emailId=="nikhil@gmail.com"?(
//  <div>
//     <input type="email" placeholder="enter the email"></input>
//     <button onclick={handleRegister}>Submit</button>
// </div>
//   ):(
//       <h1>you are not Nikhil go to hell ..</h1>
//   )}
//   </form> 
// )
// }

// export default Register


// **************************************HOOK***********************************************************************88
// function Register() {
//   //Hooks
//  //Usestate()
//  const[email, setemail]=useState()  // data inserted in the form will be excessed here --manages states
//  const[password, setpassword]=useState()  
//  const[age,setage]=useState(13)

// function handleRegister(event){
//  event.preventDefault();///to unable the relaod of screen
//    console.log("hello world")
// }

// function increaseAge(){
//  setage(age + 1);
// }

// // this is expecting the usestate
// //  useEffect(()=>{   we can also replace by dec;aringthe 13 in the  usestate itself
// //   setage(13); 
// //  },[]);

// // this will be displayed on the page
//    useEffect(()=>{
//      console.log("age:",age);
//    },[age])
//  return (
//    // if the age is above 12 then only show the form else snd ma=essaage that go  away from this
//    <form>

  
//   {age>18?(
//  <div>
//  <h1>{age}</h1>
  
//      <input className="form-input" 
//      type="email"
//       placeholder="enter the email"
//      value={email}
//      onChange={(e)=>setemail(e.target.value)} //e.target.value ---- fromthese we can get data that we are inserted
//       ></input>

//       {/* //for the password */}
//      <input className="form-input" 
//      type="password"
//       placeholder="enter the password"
//       value={password}
//       onChange={(e)=>setpassword(e.target.value)} 
//       ></input>
//      <button onclick={handleRegister}>Submit</button>
//  </div>
//   ):(
// <h1>you marla u cannot go to this becz ur minor</h1>
//   )}
  
//   <button onclick={increaseAge}>increase</button>
//    </form> 
//  )
// } 
