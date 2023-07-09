import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handelClick = async (e) => {
    e.preventDefault();
    
    let newUser;
    
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dhb7jpopr/image/upload",
          data
        );
        
        const { public_id, url } = uploadRes.data;
        newUser = {
          username,
          password,
          email,
          img: url,
          public_id,
        };
      } catch (err) {
        console.log(err);
        return;
      }
    } else {
      newUser = {
        username,
        password,
        email,
      };
    }
    
    try {
      const res = await axios.post("https://blog-upp.onrender.com/api/auth/register", newUser);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handelClick}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}