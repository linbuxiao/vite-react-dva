import { 
          configureStore,
          combineReducers,
        } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'
import fakeSlice from './fakeSlice'



// const rootReducer = createReducer(0, {
//   [increment]: (state,action) => {
//     console.log(action)
//     return (state + action.payload)
//   },
//   [decrement]: state => state - 1
// })

const rootReducer = combineReducers({
  counter : counterSlice,
  fake: fakeSlice
})




const store = configureStore({
  reducer: rootReducer,
});

export default store