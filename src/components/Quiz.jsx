import React from 'react'

function Quiz({optionClicked,questions,currentQuestion}) {
  return (
    <>
       {/* Quiz Question */}
        <div className="questionCard">
          <h2>
            Question:<br /> <span>{currentQuestion + 1} out of {questions.length}</span>
          </h2>
          <h3 className="questionText">{questions[currentQuestion].text}</h3>
          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
    </>
  )
}

export default Quiz