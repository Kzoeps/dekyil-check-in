import * as React from 'react';
import CheckInForm from './check-in-form';
import {CheckInFormValues} from '../models/interfaces';
import dayjs from 'dayjs';
import {CHECK_IN_N_OUT_CALLS} from '../api/API';

export const CheckIn = () => {
	const onFormSubmit = async (values: CheckInFormValues) => {
		const checkInDate = dayjs(values.checkInDate).format('DD/MM/YYYY');
		const checkInTime = dayjs(values.checkInTime).format('HH:mm');
		const checkedInInfo = await CHECK_IN_N_OUT_CALLS.checkIn({...values, checkInDate, checkInTime});
		const id = checkedInInfo.id;
	};
	return (
		<div>
			<CheckInForm handleSubmit={onFormSubmit}/>
		</div>
	);
};

export default CheckIn
