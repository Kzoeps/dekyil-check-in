import * as React from 'react';
import {Typography} from '@mui/material';
import GuestList from './components/guest-list';
import {GUEST_LIST_COLUMNS} from './models/constants';


export const Dashboard = () => {

	return (
		<div>
			<Typography variant="h3">Dashboard</Typography>
			<GuestList column={GUEST_LIST_COLUMNS}/>
		</div>
	);
};

export default Dashboard;
