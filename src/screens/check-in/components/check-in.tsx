import * as React from 'react';
import CheckInForm from './check-in-form';

export const CheckIn = () => {
	const onFormSubmit = () => {
	};
	return (
		<div>
			<CheckInForm handleSubmit={onFormSubmit}/>
		</div>
	);
};

export default CheckIn
