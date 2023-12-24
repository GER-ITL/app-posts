import React from "react";
import styles from "./Login.module.scss";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls";
import { requiredField } from "../../utils/validators";

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Log In</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} action="">
      <div className={styles.login}>
        <div>
          <div>
            <Field
              validate={[requiredField]}
              className={styles.input}
              placeholder={"Login..."}
              name="login"
              type="text"
              component={Input}
            />
          </div>
          <Field
            validate={[requiredField]}
            className={styles.input}
            placeholder={"Password..."}
            name="password"
            type="password"
            component={Input}
          />
          <div>
            <Field
              type="checkbox"
              className={styles.input}
              component={Input}
              name="rememberMe"
            />{" "}
            remember me
          </div>
        </div>
        <div>
          <button className={styles.sendBtn}>Log In</button>
          <button className={styles.removeBtn}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default Login;
