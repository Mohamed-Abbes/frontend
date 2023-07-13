import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handelLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handelLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {user.profilePic ? (
              <img className="topImg" src={user.profilePic} alt="Profile" />
            ) : (
              <img
                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                alt="Avatar"
                className="topImg"
              />
            )}
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
      </div>
    </div>
  );
}