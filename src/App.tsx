import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckInNOut from "./screens/check-in/check-in-n-out";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<CheckInNOut/>}>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
