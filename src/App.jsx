import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage";
import WelcomePage from "./components/WelcomePage.jsx";
import AdvertisementPage from "./components/Ads-page.jsx";
import ResultPage from "./components/ResultsPage.jsx";
import RegiserPage from "./components/RegistrationPage.jsx";
import CategoriesPage from "./components/CategoriesPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import { users as initialUsers } from "./data/Users.js";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState({
    firstname: "Guest",
    lastname: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  // const [allAnswers, setAllAnswers] = useState([]);

  return (
    <div>
      {page === "welcome" && (
        <WelcomePage
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          page={page}
          users={users}
          setUsers={setUsers}
        />
      )}
      {page === "login" && (
        <LoginPage
          setPage={setPage}
          page={page}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          users={users}
          setUsers={setUsers}
        />
      )}
      {page === "register" && (
        <RegiserPage
          setPage={setPage}
          page={page}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          users={users}
          setUsers={setUsers}
        />
      )}
      {page === "categories" && (
        <CategoriesPage
          setPage={setPage}
          setSelectedCategory={setSelectedCategory}
          setQuizQuestions={setQuizQuestions}
          currentUser={currentUser}
        />
      )}
      {page === "quiz" && (
        <QuestionPage
          setPage={setPage}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
          selectedCategory={selectedCategory}
          quizQuestions={quizQuestions}
          currentUser={currentUser}
        />
      )}

      {page === "ads" && (
        <div>
          <AdvertisementPage
            setPage={setPage}
            currentUser={currentUser}
          ></AdvertisementPage>
        </div>
      )}

      {page === "result" && (
        <div>
          <ResultPage
            setPage={setPage}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            quizQuestions={quizQuestions}
            // allAnswers={allAnswers} // Pass down the answers for the result page
            // userName={currentUser.name}
            currentUser={currentUser}
          ></ResultPage>
        </div>
      )}
    </div>
  );
}
