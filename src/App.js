import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ScreenA from "./pages/ScreenA";
import ScreenB from "./pages/ScreenB";
import Settings from "./pages/Settings";
import NewQuickLink from "./pages/NewQuickLink";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import userReducer from "./redux/userSlice"

function App() {
  const isLoggedIn = useSelector(state => state.userAction.isLoggedIn)

  return (
    <div className="main-container">
      <nav className={"navbar"}>
        {isLoggedIn && <Navbar/>}
      </nav>
      <section>
        <Routes>
          {isLoggedIn && <Route path="/" element={<ScreenA/>}/>}
          {isLoggedIn && <Route path="/screenB" element={<ScreenB/>}/>}
          {isLoggedIn && <Route path="/settings" element={<Settings/>}/>}
          {isLoggedIn && <Route path="/newQuickLink" element={<NewQuickLink/>}/>}
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="*" element={<Navigate to='/signIn' replace />}/>
        </Routes>
      </section>
      <aside>
      {isLoggedIn && <Sidebar/>}
      </aside>
    </div>
  );
}



export default App;

