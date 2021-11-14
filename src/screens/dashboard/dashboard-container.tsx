import * as React from 'react';
import {Typography} from '@mui/material';
import GuestList from './components/guest-list';


export const Dashboard = () => {

	return (
		<div>
			<Typography variant="h3">Dashboard</Typography>
			<GuestList rows={} columns={}/>
		</div>
	);
};

export default Dashboard;
