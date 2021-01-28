import {  createSlice, 
          createAction  } from '@reduxjs/toolkit'



const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    incrementByAmount: (state,action) => {
      return (state + action.payload)
    }
  }
})
export const { increment, decrement , incrementByAmount } = counterSlice.actions;
// 异步actions
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};



export default counterSlice.reducer

