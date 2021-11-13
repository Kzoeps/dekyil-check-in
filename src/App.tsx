import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import CheckIn from "./screens/check-in";
import { Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<CheckIn/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
