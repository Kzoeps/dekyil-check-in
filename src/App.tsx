import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckInNOut from './screens/check-in/check-in-n-out';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: 'AIzaSyDh7oooJxbJZKf4ReYwVzfaW_ljdexZjjk',
	authDomain: 'dekyil-check-in.firebaseapp.com',
	projectId: 'dekyil-check-in',
	storageBucket: 'dekyil-check-in.appspot.com',
	messagingSenderId: '886740703026',
	appId: '1:886740703026:web:a614cf7f4bfd0c9155292b',
	measurementId: 'G-DGE9RWR25T'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CheckInNOut/>}>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
