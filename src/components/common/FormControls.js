import React from 'react'
import { Field } from 'redux-form'
import styles from './FormControls.module.scss'

const FormControl = ({ input, meta: { touched, error }, children }) => {
	const hasError = touched && error
	return (
		<div className={styles.formControl}>
			<div>{children}</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

const Textarea = props => {
	const { input, meta, child, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

// export const Input = ({ input, meta, ...props }) => {
// 	const hasError = meta.touched && meta.error
// 	return (
// 		<div className={styles.formControl}>
// 			<div>
// 				<input {...input} {...props} />
// 			</div>
// 			{hasError && <span>{meta.error}</span>}
// 		</div>
// 	)
// }

export const Input = props => {
	const { input, meta, child, ...restProps } = props
	return (
		<FormControl {...props}>
			<input {...input} {...restProps}></input>
		</FormControl>
	)
}

export const createField = (
	placeholder,
	name,
	validators,
	component,
	props = {},
	text = ''
) => (
	<div>
		<Field
			placeholder={placeholder}
			name={name}
			validate={validators}
			component={component}
			{...props}
		/>
		{text}
	</div>
)
export default Textarea
