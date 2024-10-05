import { useState } from "react";

import loginImage from "../assets/logo-login.jpg";
import "./WelcomePage.css";

export default function LoginPage({
  setPage,
  page,
  users,
  setCurrentUser,
  currentUser,
}) {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    firstname: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    let hasError = false;

    const validUser = users.find(
      (item) =>
        item.username === inputValue.username &&
        item.password === inputValue.password
    );
    setCurrentUser(validUser);
    if (!inputValue.username) {
      errors.username = "Username darf nicht leer sein";
      hasError = true;
    }

    if (!inputValue.password) {
      errors.password = "Password darf nicht leer sein";
      hasError = true;
    }

    if (hasError) {
      setErrorMessage(errors);
      return;
    }
    if (currentUser) {
      setPage("categories");
      setInputValue({
        username: "",
        password: "",
      });
      setErrorMessage({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="login">
      <div className="login-text">
        <h2>Let&#39;s play quiz!</h2>
        <img id="theme-image" src={loginImage} alt="Quiz App" />

        <p>Enter your information below</p>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={inputValue.username}
              onChange={(e) =>
                setInputValue({ ...inputValue, username: e.target.value })
              }
              style={{
                border: errorMessage.username ? "1px solid red" : "",
              }}
            />
            {errorMessage.username && !inputValue.username ? (
              <p>{errorMessage.username}</p>
            ) : undefined}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={inputValue.password}
              onChange={(e) =>
                setInputValue({ ...inputValue, password: e.target.value })
              }
              style={{
                border: errorMessage.username ? "1px solid red" : "",
              }}
            />
          </div>

          {errorMessage.password && !inputValue.password ? (
            <p>{errorMessage.password}</p>
          ) : undefined}
          <div className="button-row">
            <button type="submit">Login</button>
            <button
              onClick={() => {
                setPage("register");
              }}
            >
              Registrieren
            </button>
            <button
              onClick={() => {
                setPage("categories");
              }}
            >
              Quiz Start!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
