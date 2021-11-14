import * as React from 'react';
import CheckInForm from './check-in-form';
import {CheckInFormValues} from '../models/interfaces';
import dayjs from 'dayjs';
import {CHECK_IN_N_OUT_CALLS} from '../api/API';
import {generateId} from '../../../utils/functions/misc';

export const CheckIn = () => {
	const handlePayloadCreation = (values: CheckInFormValues) => {
		return {
			...values,
			checkInDate: dayjs().format('YYYY-MM-DD'),
			checkInTime: dayjs().format('HH:mm'),
		};
    };

	const onFormSubmit = async (values: CheckInFormValues) => {
        const checkInInfo = handlePayloadCreation(values);
		const id = generateId();
		await CHECK_IN_N_OUT_CALLS.checkIn(checkInInfo, id);
	};
	return (
		<div>
			<CheckInForm handleSubmit={onFormSubmit}/>
		</div>
	);
};

export default CheckIn
