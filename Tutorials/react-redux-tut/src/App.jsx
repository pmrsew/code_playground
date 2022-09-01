import {useSelector} from 'react-redux'

export default function App() {
  const counter = useSelector((state)=>state.counter)
  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
    </div>
  )
}
