import { useState } from 'react'

// import './App.css'

import Counter from './MiniProjects/Counter'
import Cards from './MiniProjects/Components/Cards'
import BgChange from './MiniProjects/BgChange'
import PasswordGenerator from './MiniProjects/PasswordGenerator'
import CurrrencyConverter from './MiniProjects/CurrrencyConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <Cards username="Aman" btnText="click me"/>
      <Cards username="Alvish" btnText="click here"/> */}
      {/* <BgChange/> */}
      {/* <PasswordGenerator/> */}
      < CurrrencyConverter />
    </>
  )
}

export default App
