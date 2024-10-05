import welcomeImage from "../assets/welcome.jpg";
import "./WelcomePage.css";

export default function WelcomePage({ setPage }) {
  return (
    <>
      <div className="welcome-container">
        <h2>Welcome to Quiz App !</h2>
        <img src={welcomeImage} alt="Quiz App" className="welcome-image" />

        <p>Test your knowledge and enjoy the quiz!</p>

        <button
          onClick={() => {
            setPage("login");
          }}
        >
          Login
        </button>
      </div>
      {/* )} */}
    </>
  );
}
