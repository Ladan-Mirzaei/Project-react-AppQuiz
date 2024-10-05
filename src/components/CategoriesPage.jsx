import "./QuestionsPage.css";
import { capitalQuizQuestions } from "../data/capitalQuestions";
import { generalKnowledgeQuizQuestions } from "../data/generalKnowledgeQuestions";
import { movieQuizQuestions } from "../data/movieQuestions";
import { programmingQuizQuestions } from "../data/programmingQuestions";

const CategoriesPage = ({
  setPage,
  setSelectedCategory,
  setQuizQuestions,
  currentUser,
}) => {
  const handleCategorySelect = (category) => {
    let questions;
    switch (category) {
      case "capitals":
        questions = capitalQuizQuestions;
        break;
      case "general":
        questions = generalKnowledgeQuizQuestions;
        break;
      case "movies":
        questions = movieQuizQuestions;
        break;
      case "programming":
        questions = programmingQuizQuestions;
        break;
    }
    setQuizQuestions(questions);
    setSelectedCategory(category);
    setPage("quiz");
  };

  return (
    <div className="quiz-container">
      <p className="logged">
        Logged in as: {currentUser.firstname} {currentUser.lastname}
      </p>
      <h1 className="quiz-title">Select a Quiz Category</h1>
      <h2></h2>
      <div className="options-container">
        <button onClick={() => handleCategorySelect("capitals")}>
          Capitals
        </button>
        <button onClick={() => handleCategorySelect("general")}>
          General Knowledge
        </button>
        <button onClick={() => handleCategorySelect("movies")}>Movies</button>
        <button onClick={() => handleCategorySelect("programming")}>
          Programming
        </button>
      </div>
    </div>
  );
};

export default CategoriesPage;
