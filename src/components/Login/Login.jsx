import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/reducers/auth-reducer'
import { requiredField } from '../../utils/validators'
import { Input } from '../common/FormControls'
import s from '../common/FormControls.module.scss'
import styles from './Login.module.scss'
const Login = props => {
	const onSubmit = formData => {
		const { email, password, rememberMe } = formData
		props.login(email, password, rememberMe)
	}
	if (props.isAuth) {
		return <Navigate replace to={'/profile'} />
	}
	return (
		<div>
			<h1>Log In</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit} action=''>
			<div className={styles.login}>
				<div>
					<div>
						<Field
							validate={[requiredField]}
							className={styles.input}
							placeholder={'email...'}
							name='email'
							type='text'
							component={Input}
						/>
					</div>
					<Field
						validate={[requiredField]}
						className={styles.input}
						placeholder={'password...'}
						name='password'
						type='password'
						component={Input}
					/>
					<div>
						<Field
							type='checkbox'
							className={styles.input}
							component={Input}
							name='rememberMe'
						/>
						remember me
					</div>
				</div>
				{error ? <div className={s.formError}>{error}</div> : ''}

				<div>
					<button className={styles.sendBtn}>Log In</button>
					<button className={styles.removeBtn}>Cancel</button>
				</div>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
