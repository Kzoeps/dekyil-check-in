import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const AUTH_API_CALLS = {
	login: (email: string, password: string): Promise<any> => signInWithEmailAndPassword(getAuth(), email, password)
}
