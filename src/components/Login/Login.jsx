import React from "react";
import styles from './Login.module.scss'
const Login = () => {
  return (
    <div>
      <h1>Not Authorized</h1>
      <div className={styles.login}>  
        <div>
          <span>
            email: <input type="text" />
          </span>
        </div>
        <div>
          <span>
            password: <input type="password" />
          </span>
        </div>
         <button className={styles.sendBtn}>
            Auth
          </button>
          <button  className={styles.removeBtn}>
            Cancel
          </button>
      </div>
    </div>
  );
};

export default Login;
