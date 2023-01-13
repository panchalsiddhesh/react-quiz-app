import React from 'react'

function QuizStart({handleClick}) {
  return (
    <>
        <div className="startCard">
        <button onClick={handleClick} className='startButton'>Start</button>
        </div>
    </>
  )
}

export default QuizStart