import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ScreenA from "./pages/ScreenA";
import ScreenB from "./pages/ScreenB";
import Settings from "./pages/Settings";
import NewQuickLink from "./pages/NewQuickLink";

function App() {
  return (
    <div className="main-container">
      <nav className={"navbar"}>
        <Navbar/>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<ScreenA/>}/>
          <Route path="/screenB" element={<ScreenB/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/newQuickLink" element={<NewQuickLink/>}/>

        </Routes>
      </section>
      <aside>
        <Sidebar/>
      </aside>
    </div>
  );
}



export default App;

