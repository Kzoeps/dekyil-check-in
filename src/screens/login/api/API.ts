import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const AUTH_API_CALLS = {
	login: (email: string, password: string): Promise<any> => signInWithEmailAndPassword(getAuth(), email, password),
	signUp: (email: string, password: string): Promise<any> => createUserWithEmailAndPassword(getAuth(), email, password)
}
