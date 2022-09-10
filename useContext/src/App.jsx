import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Store } from './components/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <Home/>
   </div>
  )
}

export default App
