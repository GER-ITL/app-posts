import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import "./styles/App.scss";
import Messages from "./components/Messages/Messages";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App({ state,  dispatch }) {

  const { friendsPage, profilePage, messagesPage, newsPage } = state

  return (
    <div className="content">
      <Header />
      <Sidebar state={friendsPage} />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={profilePage}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/messages"
            element={<Messages state={messagesPage} />}
          />
          <Route path="/news" element={<News state={newsPage} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/friends"
            element={<Friends friendsPage={friendsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
