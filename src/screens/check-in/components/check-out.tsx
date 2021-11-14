import * as React from 'react';
import CheckOutForm from './check-out-form';
import {CheckOutFormValues} from '../models/interfaces';
import dayjs from 'dayjs';
import {DayJsFormats} from '../../../utils/constants/enums';
import {CHECK_IN_N_OUT_CALLS} from '../api/API';
import {Alert, Snackbar} from '@mui/material';

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
			console.log(checkOutInfo);
			setSnackToShow(<Alert severity="success">Check Out Successful!</Alert>);
			return;
			// await CHECK_IN_N_OUT_CALLS.checkOut(checkOutInfo);
		}
		setShowSnack(true);
	};
	return <>
		<CheckOutForm handleSubmit={onCheckOut}/>
		<Snackbar open={showSnack} autoHideDuration={6000} onClose={() => setShowSnack(false)}>
			{snackToShow}
		</Snackbar>
	</>;
};
export default CheckOut;
