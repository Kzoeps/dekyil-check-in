import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckInNOut from './screens/check-in/check-in-n-out';
import app from './utils/constants/firebase';
import LoginContainer from './screens/login/login';
import { Dashboard } from './screens/dashbaord/dashboard-container';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CheckInNOut/>}/>
				<Route path="/login" element={<LoginContainer/>}/>
				<Route path="/dashboard" element={<Dashboard/>}/>
			</Routes>
		</Router>
	);
}

export default App;
