import React, { useState } from 'react'
import './App.css'

function App() {
  const [point, setPoint] = useState([])
  const [erasedPoints, setErasedPoints] = useState([])

  const handleAddPoint = (e) => {
    console.log(e);

    setPoint([...point, <div className='point' style={{ top: e.clientY, left: e.clientX}}>
    </div>])

    console.log(point);
  }

  const handleErasePoint = () => {
    if(!point.length) return;

    const filteredArr = point.filter((item, i ) => i !== point.length - 1 )
    const erasedPoint = point.slice(-1)

    setPoint([...filteredArr])
    setErasedPoints([...erasedPoints, erasedPoint])
  }

  const recreatePoint = () => {
    setPoint([...point, ...erasedPoints.slice(-1)])

    const slicedErasedPoints = erasedPoints.slice(0, -1)
    setErasedPoints(slicedErasedPoints)
  }

  return (
    <React.Fragment>

      <button className='undo' onClick={handleErasePoint}>Undo Last Point</button>
      <button className="recreate" onClick={recreatePoint}>Recreate Point</button>

      <div className="App" onClick= {handleAddPoint}>
        {...point}
      </div>
    </React.Fragment>
  )
}

export default App
