import { useState } from "react";

function RegistrationForm({ setUsers, users, page, setPage }) {
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    let hasError = false;

    if (!inputValue.firstname) {
      errors.firstname = "Firstname darf nicht leer sein";
      hasError = true;
    }

    if (!inputValue.lastname) {
      errors.lastname = "Lastname darf nicht leer sein";
      hasError = true;
    }
    if (!inputValue.username) {
      errors.username = "Username darf nicht leer sein";
      hasError = true;
    }
    if (!inputValue.email) {
      errors.email = "Email darf nicht leer sein";
      hasError = true;
    }
    if (!inputValue.password) {
      errors.password = "Password darf nicht leer sein";
      hasError = true;
    }
    if (hasError) {
      setErrorMessage(errors);
      return;
    } else {
      setErrorMessage({
        username: "",
        password: "",
      });
    }
    const newUser = {
      firstname: inputValue.firstname,
      lastname: inputValue.lastname,
      username: inputValue.username,
      email: inputValue.email,
      password: inputValue.password,
    };

    setUsers([...users, newUser]);
    setInputValue({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    });
    setPage("login");
  };

  return (
    <div className="register">
      <h2>Registration Forms</h2>

      <p> Full out the form for registration</p>
      <div className="register-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>Firstname:</label>
            <input
              type="text"
              name="firstname"
              value={inputValue.firstname}
              onChange={(e) =>
                setInputValue({ ...inputValue, firstname: e.target.value })
              }
              style={{
                border: errorMessage.firstname ? "1px solid red" : "",
              }}
            />
            {errorMessage.firstname && !inputValue.firstname ? (
              <p>{errorMessage.firstname}</p>
            ) : undefined}
          </div>
          <div>
            <label>Lastname:</label>
            <input
              type="text"
              name="lastname"
              value={inputValue.lastname}
              onChange={(e) =>
                setInputValue({ ...inputValue, lastname: e.target.value })
              }
              style={{
                border: errorMessage.lastname ? "1px solid red" : "",
              }}
            />
            {errorMessage.lastname && !inputValue.lastname ? (
              <p>{errorMessage.lastname}</p>
            ) : undefined}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
              style={{
                border: errorMessage.email ? "1px solid red" : "",
              }}
            />
            {errorMessage.email && !inputValue.email ? (
              <p>{errorMessage.email}</p>
            ) : undefined}
          </div>
          <div>
            <label>Username:</label>
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
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={inputValue.password}
              onChange={(e) =>
                setInputValue({ ...inputValue, password: e.target.value })
              }
              style={{
                border: errorMessage.password ? "1px solid red" : "",
              }}
            />
            {errorMessage.password && !inputValue.password ? (
              <p>{errorMessage.password}</p>
            ) : undefined}
          </div>

          <button type="submit">Register</button>
        </form>

        {/* <div>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.firstname} {user.lastname}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default RegistrationForm;
