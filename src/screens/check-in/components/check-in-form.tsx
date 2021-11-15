import * as React from 'react';
import {LocalizationProvider} from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import {Field, Form, Formik} from 'formik';
import {CHECK_IN_FORM_VALIDATION_SCHEMA, CHECK_IN_INITIAL_VALUES} from '../models/constants';
import {TextField} from 'formik-mui';
import {Button, InputAdornment} from '@mui/material';
import {
	AccountCircle,
	ContactMail, DriveEta,
	FingerprintOutlined,
	FlightLand,
	FlightTakeoff,
	Home,
	Language, PeopleAlt,
	Phone, VpnKey
} from '@mui/icons-material';
import {MobileDatePicker, TimePicker} from 'formik-mui-lab';
import {GenericFunction} from '../../../utils/types/models';

export const CheckInForm = ({handleSubmit}: { handleSubmit: GenericFunction }) => {
	return (
		<div>
			<LocalizationProvider dateAdapter={DateAdapter}>
				<Formik
					initialValues={CHECK_IN_INITIAL_VALUES}
					onSubmit={handleSubmit}
					validationSchema={CHECK_IN_FORM_VALIDATION_SCHEMA}
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
								   label="CID/Passport Number"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <FingerprintOutlined/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="nationality"
								   label="Nationality"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <Language/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="contactNo"
								   label="Contact Number"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <Phone/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="permanentAddress"
								   label="Permanent Address"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <Home/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="purposeOfVisit"
								   label="Purpose of visit"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <ContactMail/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="comingFrom"
								   label="Coming from"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <FlightLand/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="nextDestination"
								   label="Next Destination"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <FlightTakeoff/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="vehicleNo"
								   label="Vehicle Number"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <DriveEta/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="noOfPersons"
								   label="Number of persons"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <PeopleAlt/>
										   </InputAdornment>
									   )
								   }}
							/>
							<br/>
							<br/>
							<Field component={TextField}
								   required
								   name="roomNo"
								   label="Room Number"
								   variant="outlined"
								   InputProps={{
									   startAdornment: (
										   <InputAdornment position="start">
											   <VpnKey/>
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
							<Field component={MobileDatePicker}
								   name="checkOutDate"
								   label="Check Out Date"
								   type="date"
								   inputFormat="DD-MM-YYYY"/>
							<br/>
							<br/>
							<Button variant="contained" color="primary" onClick={submitForm}>
								Submit
							</Button>
						</Form>
					)}
				</Formik>

			</LocalizationProvider>
		</div>
	);
};

export default CheckInForm;
