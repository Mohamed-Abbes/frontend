import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import ContactForm from "./pages/ContactForm";
import About from "./pages/about/About";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route exact path="/posts"  element={<Home />} />
          <Route exact path="/register" element={(user  ? <Home /> : <Register />)}/>
          <Route exact path="/login" element={(user  ? <Home /> : <Login />)}/>
          <Route exact path="/post/:postId" element={<Single />} />
          <Route exact path="/write" element={user  ? <Write /> : <Login />}/>
          <Route exact path="/settings" element={(user  ? <Settings /> : <Register />)}/>
          <Route exact path="/contact" element={<ContactForm />}/>
          <Route exact path="/about" element={<About />}/>

        </Routes>
    </Router>
  );
}

export default App;