import * as React from 'react';
import {LocalizationProvider} from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import {Field, Form, Formik} from 'formik';
import {CHECK_IN_INITIAL_VALUES} from '../models/constants';
import {TextField} from 'formik-mui';
import {Button, InputAdornment} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {MobileDatePicker, TimePicker} from 'formik-mui-lab';
import {GenericFunction} from '../../../utils/types/models';

export const CheckInForm = ({handleSubmit}: { handleSubmit: GenericFunction }) => {
	return (
		<div>
			<LocalizationProvider dateAdapter={DateAdapter}>
				<Formik
					initialValues={CHECK_IN_INITIAL_VALUES}
					onSubmit={handleSubmit}
				>
					{({submitForm}) => (
						<Form>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="name"
								   label="Name"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <AccountCircle/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="cid"
								   label="CID"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <AccountCircle/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={MobileDatePicker}
								   name="checkInDate"
								   label="Check In Date"
								   type="date"
								   inputFormat="DD-MM-YYYY"/>
							<br/>
							<br/>
							<Field component={TimePicker}
								   label="Check In Time"
								   name="checkInTime"/>
							<br/>
							<br/>
							<Button variant="contained" color="primary" onClick={submitForm}>
								Check In
							</Button>
						</Form>
					)}
				</Formik>

			</LocalizationProvider>
		</div>
	);
};

export default CheckInForm;
