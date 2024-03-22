import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction('counter/incrementByAmount')//action

const initialState = { value: 0 }//initial 
const counterReducer = createReducer(initialState, (builder) => {//store have initial values
  builder.addCase(incrementByAmount, (state, action) => {
      state.value += action.payload   //value will be added that we have passed
    })
})// action.payload = 5
export default rootReducer;
export {incrementByAmount}