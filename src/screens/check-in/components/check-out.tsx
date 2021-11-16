import * as React from 'react';
import CheckOutForm from './check-out-form';
import {CheckOutFormValues} from '../models/interfaces';
import dayjs from 'dayjs';
import {DayJsFormats} from '../../../utils/constants/enums';
import {CHECK_IN_N_OUT_CALLS} from '../api/API';
import {Alert, Box, Snackbar} from '@mui/material';

export const CheckOut = () => {
	const [showSnack, setShowSnack] = React.useState(false);
	const [snackToShow, setSnackToShow] = React.useState(<Alert severity="error">Check In Id does not exists!</Alert>)
	const handlePayloadCreation = (values: CheckOutFormValues) => ({
		...values,
		checkOutDate: dayjs().format(DayJsFormats.date),
		checkOutTime: dayjs().format(DayJsFormats.time)
	});
	const onCheckOut = async (values: CheckOutFormValues) => {
		const checkIn = await CHECK_IN_N_OUT_CALLS.getCheckIn(values.checkInId);
		if (checkIn.exists()) {
			const checkOutInfo = handlePayloadCreation(values);
			await CHECK_IN_N_OUT_CALLS.checkOut(checkOutInfo, values.checkInId);
			setSnackToShow(<Alert severity="success">Check Out Successful!</Alert>);
		} else {
			setSnackToShow(<Alert severity="error">Check In Id does not exists!</Alert>);
		}
		setShowSnack(true);
	};
	return <>
		<Box sx={{mx: 'auto', width: 250}}>
			<CheckOutForm handleSubmit={onCheckOut}/>
			<Snackbar open={showSnack} autoHideDuration={6000} onClose={() => setShowSnack(false)}>
				{snackToShow}
			</Snackbar>
		</Box>
	</>;
};
export default CheckOut;
