import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
// const setActive1 = ({isActive})=>({border: isActive ? '1px solid red' : ''})
// const setActive = ({ isActive }) => (isActive ? "activeLink" : "");
const SideImg = () => {
  return (
    <>
    <div className="itemSizeBlock">
      <div className="itemSize">
        <NavLink to="/users" className='navLinkSmall'>
          Find Users
        </NavLink>
      </div>
      <div className="itemSize">
        <NavLink to="/profile" className='navLinkSmall'>
          Profile
        </NavLink>
      </div>
      <div className="itemSize">
        <NavLink to="/friends" className='navLinkSmall'>
          Friends
        </NavLink>
      </div>
      <div className="itemSize">
        <NavLink to="/messages" className='navLinkSmall'>
          Messages
        </NavLink>
      </div>
      <div className="itemSize">
        <NavLink to="/news" className='navLinkSmall'>
          News
        </NavLink>
      </div>
      <div className="itemSize">
        <NavLink to="/music" className='navLinkSmall'>
          Music
        </NavLink>
      </div>
      <div className="itemSize">
        <NavLink to="/settings" className='navLinkSmall'>
          Settings
        </NavLink>
      </div>
    </div>
    </>
  );
};

export default SideImg;
