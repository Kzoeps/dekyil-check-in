import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckIn from "./screens/check-in";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<CheckIn/>}>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
