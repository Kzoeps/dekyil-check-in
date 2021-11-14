import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuthState} from '../../../screens/login/auth-context';
import {ReactElement} from 'react';

export const AuthGuard = ({children}: Record<string, ReactElement>) => {
	const {isAuthenticated} = useAuthState();
	console.log(`AuthenticatedRoute: ${isAuthenticated}`);
	return (
		isAuthenticated ? children : <Navigate to="/login"/>
	);
};
export default AuthGuard;
