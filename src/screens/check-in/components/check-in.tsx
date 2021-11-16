import * as React from 'react';
import CheckInForm from './check-in-form';
import {CheckInFormValues} from '../models/interfaces';
import dayjs from 'dayjs';
import {CHECK_IN_N_OUT_CALLS} from '../api/API';
import {generateId} from '../../../utils/functions/misc';
import BasicModal from '../../../utils/components/common-modal/common-modal';
import {useRef} from 'react';
import {DayJsFormats} from '../../../utils/constants/enums';

export const CheckIn = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const checkInId = useRef('');
	const handlePayloadCreation = (values: CheckInFormValues) => {
		return {
			...values,
			checkInDate: dayjs().format(DayJsFormats.date),
			checkInTime: dayjs().format(DayJsFormats.time),
			checkOutDate: dayjs().format(DayJsFormats.date)
		};
	};

	const onFormSubmit = async (values: CheckInFormValues) => {
        const checkInInfo = handlePayloadCreation(values);
		const id = generateId();
		await CHECK_IN_N_OUT_CALLS.checkIn(checkInInfo, id);
		checkInId.current = id;
		setIsModalOpen(true)
	};
	return (
		<div>
			<CheckInForm handleSubmit={onFormSubmit}/>
			<BasicModal open={isModalOpen} header={`Check in ID: ${checkInId.current}`}
						description="Please save this ID. You will need this during checkout" buttonText="OK"
						onButtonClick={() => setIsModalOpen(false)}/>
		</div>
	);
};

export default CheckIn
