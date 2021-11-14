import * as React from 'react';
import LoginForm from './components/login-form';

export const LoginContainer = () => {
	const login = (values: unknown) => {
		console.log(values)
	}
	return <>
		<LoginForm handleSubmit={login}/>
	</>
}

export default LoginContainer;
