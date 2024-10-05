import { useState } from "react";
// import {useEffect} from "react"
import "./ResultsPage.css";

const ResultPage = ({
  // userName, // Now we receive userName correctly
  currentUser,
  correctAnswers,
  setPage,
  setCorrectAnswers,
  quizQuestions,
  // allAnswers,
}) => {
  const totalQuestions = quizQuestions.length;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  // Calculate user performance message
  let message = "";
  if (scorePercentage >= 80) {
    message = "Good work!";
  } else if (scorePercentage >= 60) {
    message = "Not bad!";
  } else {
    message = "Ohh, try again!";
  }

  // Sorting users by correct answers (example)
  // const users = [
  //   { name: "User1", correct: 10 },
  //   { name: "User2", correct: 9 },
  //   { name: "User3", correct: 8 },
  //   { name: "User4", correct: 7 },
  //   { name: "User5", correct: 6 },
  //   { name: "User6", correct: 5 },
  // ];

  // const topUsers = users.sort((a, b) => b.correct - a.correct).slice(0, 5);

  const handleTryAgain = () => {
    setPage("categories");
    setCorrectAnswers(0);
  };

  // UseEffect to check if allAnswers have been updated
  // useEffect(() => {
  //   if (!allAnswers || allAnswers.length === 0) {
  //     console.error("No answers available to display.");
  //   }
  // }, [allAnswers]);

  return (
    <div className="result-page">
      <h2 className="result-title">
        Result for: {currentUser.firstname} {currentUser.lastname}
      </h2>
      <p>
        Your score: {correctAnswers} out of {totalQuestions}
      </p>
      <p>{message}</p>

      {/* Top 5 users */}
      {/* <h3>Top 5 Users</h3>
      <table className="top-users-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Correct Answers</th>
          </tr>
        </thead>
        <tbody>
          {topUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.correct}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* Incorrect answers */}
      {/* <h3>{userName} Incorrect Answers</h3>
      <table className="incorrect-answers-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {allAnswers
            .filter((answer) => !answer.isCorrect) // Show only incorrect answers
            .map((answer, index) => (
              <tr key={index}>
                <td>{answer.question}</td>
                <td>{answer.selectedAnswer}</td>
                <td>{answer.correctAnswer}</td>
              </tr>
            ))}
        </tbody>
      </table> */}

      {/* Correct answers */}
      {/* <h3>{userName} Correct Answers</h3>
      <table className="correct-answers-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {allAnswers
            .filter((answer) => answer.isCorrect) // Show only correct answers
            .map((answer, index) => (
              <tr key={index}>
                <td>{answer.question}</td>
                <td>{answer.selectedAnswer}</td>
                <td>{answer.correctAnswer}</td>
              </tr>
            ))}
        </tbody>
      </table> */}

      {/* Try Again Button */}
      <button onClick={handleTryAgain} className="retry-button">
        Try Again
      </button>
    </div>
  );
};

export default ResultPage;
