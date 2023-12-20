import { useEffect, useState } from 'react'
import ExampleUseEffect from "./components/ExampleUseEffect/ExampleUseEffect"
import ExampleLocalStorage from './components/ExampleLocalStorage/ExampleLocalStorage'

function App() {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(null)

   useEffect(() => {
    const value = localStorage.getItem('count')
    setValue(parseInt(value))

   }, [])
  return (
    <>
      <h1>localStorage en App: {value}</h1>
      <button onClick={() => setShow(prev => !prev)}>
        mostrar ejemplo
      </button>
      { show ? <ExampleLocalStorage /> : null }
    </>
  )
}

export default App
