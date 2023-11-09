import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import "./styles/App.scss";
import Messages from "./components/Messages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/news" element= {<News/>}/>
            <Route path="/music" element = {<Music/>}/>
            <Route path="/settings" element = {<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
