import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [loginMessage, setLoginMessage] = useState(""); // Add state to store the login message

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://blog-api-hi3m.onrender.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setLoginMessage("LOGIN_SUCCESS"); // Set the login message to "LOGIN_SUCCESS"
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setLoginMessage("LOGIN_FAILURE"); // Set the login message to "LOGIN_FAILURE"
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <div className="loginMessage">
        {loginMessage === "LOGIN_SUCCESS" && (
          <span className="successMessage">Login successful!</span>
        )}
        {loginMessage === "LOGIN_FAILURE" && (
          <span className="errorMessage">Login failed!</span>
        )}
      </div>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
