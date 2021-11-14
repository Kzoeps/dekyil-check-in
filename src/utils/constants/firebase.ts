import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

export const firebaseConfig = {
	apiKey: 'AIzaSyDh7oooJxbJZKf4ReYwVzfaW_ljdexZjjk',
	authDomain: 'dekyil-check-in.firebaseapp.com',
	projectId: 'dekyil-check-in',
	storageBucket: 'dekyil-check-in.appspot.com',
	messagingSenderId: '886740703026',
	appId: '1:886740703026:web:a614cf7f4bfd0c9155292b',
	measurementId: 'G-DGE9RWR25T'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app

