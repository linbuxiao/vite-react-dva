import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementAsync } from './reducer/counterSlice'
import './App.css'

function App() {
  const state = useSelector(state  => state)
  const dispatch = useDispatch()
  console.log(state);
  return (
    <div className="App">
      <div onClick={() => dispatch(increment())}>
        同步增加：{state.counter}
      </div>
      <div onClick={() => dispatch(incrementAsync(5))}>
        异步增加：{state.counter}
      </div>
      {/* fake中也具有increment方法，但不会影响 */}
      <div>同名混淆: {state.fake}</div>
    </div>
  )
}

export default App
