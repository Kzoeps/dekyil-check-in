import * as React from 'react';
import {useEffect, useState} from 'react';
import {Typography} from '@mui/material';
import GuestList from './components/guest-list';
import {GUEST_LIST_COLUMNS} from './models/constants';
import {DASHBOARD_API} from './api/API';
import {GuestCheckInInfo} from '../check-in/models/interfaces';
import humanId from 'human-id';


export const Dashboard = () => {
	const [checkInLists, setCheckInLists] = useState<GuestCheckInInfo[]>([]);
	useEffect(() => {
		DASHBOARD_API.getCheckIns().then((checkIns) => {
			const localCheckInList: GuestCheckInInfo[] = [];
			checkIns.forEach((checkIn: any) => {
				localCheckInList.push({...checkIn.data(), uniqueId: humanId()});
			});
			setCheckInLists(localCheckInList);
		});
		return () => {
			setCheckInLists([]);
		};
	}, [setCheckInLists]);
	return (
		<div>
			<Typography variant="h3">Dashboard</Typography>
			<GuestList rows={checkInLists} columns={GUEST_LIST_COLUMNS}/>
		</div>
	);
};

export default Dashboard;
