import { useState } from 'react'
import FaceExpression from './features/expression/pages/FaceExpression'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FaceExpression/>
    </>
  )
}

export default App
