import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import QuizStart from "./components/QuizStart";

function App() {
  // States
  const [start,setStart] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Questions data 
  const questions = [
    {
      text: "HTML stands for",
      options: [
        { id: 0, text: "Hypermark Language", isCorrect: false },
        { id: 1, text: "Hypermix language", isCorrect: false },
        { id: 2, text: "Hypertext Markup Language", isCorrect: true },
        { id: 3, text: "Hypertension Language", isCorrect: false },
      ],
    },
    {
      text: "Which tag is used to create a check box",
      options: [
        { id: 0, text: "<checkbox>", isCorrect: false },
        { id: 1, text: '<input type="checkbox">', isCorrect: true },
        { id: 2, text: '<type="checkbox"', isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Which tag is used to write the javascript code",
      options: [
        { id: 0, text: "<script>", isCorrect: true },
        { id: 1, text: "<sp>", isCorrect: false },
        { id: 2, text: "<javascript>", isCorrect: false },
        { id: 3, text: "<java>", isCorrect: false },
      ],
    },
    {
      text: "Purpose of designing the Javascript",
      options: [
        { id: 0, text: "To Perform Server Side Scripting Opertion", isCorrect: false },
        { id: 1, text: "To add interactivity to HTML Pages", isCorrect: true },
        { id: 2, text: "To Style HTML Pages", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: false },
      ],
    },
    {
      text: "Everything in react is",
      options: [
        { id: 0, text: "Component", isCorrect: true },
        { id: 1, text: "Model", isCorrect: false },
        { id: 2, text: "Method", isCorrect: false },
        { id: 3, text: "Package", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  const handleClick = () => {
    setStart(true);
  }

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the quiz back to default */
  const restartQuiz = () => {
    setStart(false);
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      { start ?
       (
        showResults ? (
        <QuizResult 
          score={score}
          questions={questions}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Quiz 
          optionClicked={optionClicked}
          questions={questions}
          currentQuestion={currentQuestion}
        />
      )
       )
       : 
      (
        <QuizStart 
          handleClick={handleClick}
        />
      )
      }
    </div>
  );
}

export default App;