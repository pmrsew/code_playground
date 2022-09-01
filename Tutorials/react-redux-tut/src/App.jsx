import {useSelector, useDispatch} from 'react-redux'
import {actions} from "./store/index.js"


export default function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  function increase(){
    dispatch(actions.increase())
  }
  function decrease(){
    dispatch(actions.decrease())
  }
  function addBy(){
    //7 is the payload to the action ADD
    dispatch(actions.addBy(7))
  }
  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={addBy}>Add 7</button>
    </div>
  )
}
