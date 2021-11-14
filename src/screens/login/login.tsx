import * as React from 'react';
import {useEffect, useRef} from 'react';
import LoginForm from './components/login-form';
import {LoginFormValues} from './models/models';
import {AUTH_API_CALLS} from './api/API';
import {Alert, Snackbar} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export const LoginContainer = () => {
	const [showSnack, setShowSnack] = React.useState(false);
	const snackMessage = useRef(<Alert severity="success">Sign In Successful</Alert>);
	const navigate = useNavigate();
	const login = async ({email, password}: LoginFormValues) => {
		try {
			await AUTH_API_CALLS.login(email, password);
			snackMessage.current = <Alert severity="success">Sign In Successful</Alert>;
			navigate('dashboard')
		} catch (e: any) {
			snackMessage.current = <Alert severity="error">{e.message}</Alert>;
		} finally {
			setShowSnack(true);
		}
	};

	useEffect(() => {
		return () => {
			setShowSnack(false);
		};
	}, []);
	return <>
		<LoginForm handleSubmit={login}/>
		<Snackbar open={showSnack} autoHideDuration={6000} onClose={() => setShowSnack(false)}>
			{snackMessage.current}
		</Snackbar>
	</>;
};

export default LoginContainer;
