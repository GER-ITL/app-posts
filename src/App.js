import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import "./styles/App.scss";
import MessagesContainer from './components/Messages/MessagesContainer'
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App({ store }) {
  const { friendsPage, newsPage } = store.getState()

  return (
    <div className="content">
      <Header />
      <Sidebar state={friendsPage} />
      <div className="content-wrapper">
        <Routes>
          <Route path="/profile" element={<Profile store={store} />} />
          <Route path="/messages" element={<MessagesContainer store={store} />} />
          <Route path="/news" element={<News state={newsPage} />} />
          <Route path="/music" element={<Music store={store} />} />
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
