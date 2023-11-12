import { NavLink } from 'react-router-dom'
import  './Sidebar.scss'
// const setActive1 = ({isActive})=>({border: isActive ? '1px solid red' : ''})
const setActive = ({isActive})=> isActive ? 'activeLink' : ''
const Sidebar = (props) => {

  return (
    <div className= 'sidebar'>
        <div className='item'>
          <NavLink to ="/profile" className={setActive} >Profile</NavLink>
        </div>
        <div className='item'>
           <NavLink to ="/friends" className={setActive} >Friends</NavLink>
         </div>
          <div className='item'>
           <NavLink to ="/messages"className={setActive} >Messages</NavLink>
         </div>
         <div className='item'>
           <NavLink to ="/news" className={setActive} >News</NavLink>
         </div>
        <div className='item'>
           <NavLink to ="/music" className={setActive} >Music</NavLink>
         </div>
     <div className='item'>
           <NavLink to ="/settings" className={setActive} >Settings</NavLink>
         </div>

    </div>
  )
}

export default Sidebar