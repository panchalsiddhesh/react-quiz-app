import React from 'react'

function QuizResult({score,questions,restartQuiz}) {
  return (
    <>
        {/* Final Results */}
        <div className="finalResults">
          <h2>Final Result</h2>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartQuiz()}>Restart quiz</button>
        </div>
    </>
  )
}

export default QuizResult