import * as React from 'react';
import Tab from '@mui/material/Tab';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Tabs from '@mui/material/Tabs';
import { Box } from '@mui/material';

export const CheckInNOutTabs = ({value, handleChange}: { value: unknown, handleChange: (...args: any[]) => any }) => {
	return <>
		<Box sx={{width: 250, mx: "auto"}}>
			<Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="icon label tabs example">
				<Tab icon={<CheckroomIcon/>} label="CHECK IN"/>
				<Tab icon={<ExitToAppIcon/>} label="CHECK OUT"/>
			</Tabs>
		</Box>
	</>;
}
export default CheckInNOutTabs
