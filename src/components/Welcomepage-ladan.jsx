// import Login from "./Login.jsx";
import welcomeImage from "../assets/welcome.jpg";
import { useState } from "react";
import { users } from "./Users.js";

export default function WelcomePage({ setPage }) {
  //   const [showLoginForm, setShowLoginForm] = useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });
  const [submitData, setSubmitData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    let validUser = users.find(
      (item) =>
        item.username === inputValue.username &&
        item.password === inputValue.password
    );
    console.log(validUser);
    //   isValidUser = false;

    let errors = {
      username: false,
      password: false,
    };

    if (validUser) {
      setErrorMessage("");
      console.log("Login erfolgreich!");
      setLoggedIn(true);

      setInputValue({
        username: "",
        password: "",
      });
      setErrorMessage({
        username: "",
        password: "",
      });
    } else {
      setErrorMessage("Ungültige E-Mail oder Passwort.");
      console.log("Login nicht erfolgreich!");
      console.log(errorMessage);

      //   setErrorMessage(errors);
    }
  };

  return (
    <>
      {!loggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={inputValue.username}
              onChange={(e) =>
                setInputValue({ ...inputValue, username: e.target.value })
              }
            />
            {errorMessage.username && !inputValue.username ? (
              <p>Username darf nicht leer sein</p>
            ) : undefined}
          </div>
          <div>
            <label htmlFor="emdescriptionail">Password: </label>
            <textarea
              type="text"
              name="password"
              value={inputValue.password}
              onChange={(e) =>
                setInputValue({ ...inputValue, password: e.target.value })
              }
            />
            {errorMessage.password && !inputValue.password ? (
              <p>Password darf nicht leer sein</p>
            ) : undefined}{" "}
          </div>

          <button type="submit" onClick={() => setSubmitData(inputValue)}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <p>Sie haben sich erfolgreich angemeldet!</p>
          <img src={welcomeImage} alt="Quiz App" className="welcome-image" />
          <p>Test your knowledge and enjoy the quiz!</p>
          <button
            onClick={() => {
              setPage("Questions");
            }}
          >
            Zur nächsten Seite
          </button>
        </div>
      )}
    </>
  );
}
