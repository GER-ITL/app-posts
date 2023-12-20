import Sidebar from "./components/ui/Sidebar";
import "./styles/App.scss";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/ui/HeaderContainer";
import LoginPage from "./components/Login/Login";
function App() {
  // const { friendsPage, newsPage } = store.getState()

  return (
    <div className="content">
      <HeaderContainer />
      <Sidebar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          <Route path="/music" element={<MusicContainer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<FriendsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
