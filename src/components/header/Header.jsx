import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Read & Share</span>
        <span className="headerTitleLg">Blog Up</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}