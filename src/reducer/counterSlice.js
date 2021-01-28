import {  createSlice, 
          createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';

export const getPost = createAsyncThunk(
  'users/getPost',
  async (param, thunkAPI) => {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
      thunkAPI.dispatch(incrementByAmount(param));
      return response.data
    }
    catch(err) {
      return thunkAPI.rejectWithValue('哦豁不知道怎么回事反正就是跑不通了')
    }

  }
)

export const errGet = createAsyncThunk(
  'users/errGet',
  async(param, thunkAPI) => {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/postss')
      thunkAPI.dispatch(incrementByAmount(param));
      return response.data
    }
    catch(err) {
      return thunkAPI.rejectWithValue('哦豁不知道怎么回事反正就是跑不通了')
    }    
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    incrementByAmount: (state,action) => {
      return (state + action.payload)
    }
  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {

      console.log('fulfilled');
      return state
    },
    [getPost.rejected]: (state, action) => {
      console.log(action.payload);
      return state
    },
    [getPost.pending]: (state, action) => {
      console.log('pending');
      return state
    },
    [errGet.rejected]: (state, action) => {
      console.log(action.payload);
      return state
    },  
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

