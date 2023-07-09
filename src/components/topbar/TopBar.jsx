import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const navigate = useNavigate();
  const handelLogout = () => {
    try {
      localStorage.removeItem("user");
      navigate('/login');
    } catch (error) {}
    
  };
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <Link className="link" to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>

          <Link className="link" to="/contact">
            <li className="topListItem">CONTACT</li>
          </Link>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handelLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/330790557_238497228520568_3593155148345157246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WScrwY8WIOsAX_Dndy_&_nc_ht=scontent.ftun14-1.fna&oh=00_AfBSRo_luWKZzdLZQB0EKU7CE2Kp-6oX_37FTUOaTc-2zQ&oe=649E0BD5"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
