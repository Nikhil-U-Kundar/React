import React from 'react'
import store from '../Store/store'
import { incrementByAmount } from '../Store/reducer'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
function Contact() {
    const value = useSelector(state=>state.value);
  return (
    <div>
   <h1>{value}</h1> /{/* / ncremantsthis line displyed in page and inncreemnt it also it will increment*/}
   <button onClick={()=>store.dispatch(incrementByAmount(5))}>increase count by 5</button>
   <button><Link to="/register"></Link>link to register</button>
    </div>
  )
}

export default Contact

//reduc persisit
