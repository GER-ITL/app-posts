import styles from './Sidebar.module.scss'

const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
        <a href="/profile">Profile</a>
        <a href="/messages">Messages</a>
        <a href="/news">News</a>
        <a href="/music">Music</a>
        <a href="/settings">Settings</a>
    </div>
  )
}

export default Sidebar