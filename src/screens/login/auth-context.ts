import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {createContext, useContext, useEffect, useState} from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = (props: any) => {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
		return () => unsubscribe();
	}, [])

	return AuthContext.Provider({user, error, ...props});
};

export const useAuthState = () => {
	const auth: any = useContext(AuthContext)
	return { ...auth, isAuthenticated: auth.user != null }
};
