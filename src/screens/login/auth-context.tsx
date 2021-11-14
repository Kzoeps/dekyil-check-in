import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {createContext, ReactElement, useContext, useEffect, useState} from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}:Record<string, ReactElement>) => {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
		return () => unsubscribe();
	}, [])

	return <AuthContext.Provider value={{user, error}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
export const useAuthState = () => {
	const auth: any = useContext(AuthContext)
	return { ...auth, isAuthenticated: auth.user != null }
};
