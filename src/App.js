import Header from "./components/ui/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/ui/Sidebar";
import "./styles/App.scss";



function App() {
  return (
    <div className="content">
      <Header/>
      <Sidebar/>
      <Profile/>
      

    </div>
  );
}

export default App;
