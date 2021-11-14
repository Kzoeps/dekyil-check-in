import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckInNOut from './screens/check-in/check-in-n-out';
import LoginContainer from './screens/login/login';
import {Dashboard} from './screens/dashboard/dashboard-container';
import AuthGuard from './utils/components/auth/AuthGuard';
import { AuthContextProvider } from './screens/login/auth-context';

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<CheckInNOut/>}/>
					<Route path="/login" element={<LoginContainer/>}/>
					<Route path="/dashboard" element={<AuthGuard><Dashboard/></AuthGuard>}/>
				</Routes>
			</Router>
		</AuthContextProvider>
	);
}

export default App;
