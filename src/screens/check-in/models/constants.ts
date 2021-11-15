import * as Yup from 'yup';

export const CHECK_IN_INITIAL_VALUES = {
	roomNo: '',
	noOfPersons: '',
	nationality: '',
	contactNo: '',
	permanentAddress: '',
	purposeOfVisit: '',
	comingFrom: '',
	nextDestination: '',
	vehicleNo: '',
	checkInDate: '',
	checkInTime: '',
	name: '',
	cid: ''
};

export const CHECK_OUT_INITIAL_VALUES = {
	checkOutDate: '',
	checkOutTime: '',
	checkInId: '',
};

export const CHECK_IN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
	roomNo: Yup.string().required('Room No is required'),
	noOfPersons: Yup.string().required('No of Persons is required'),
	nationality: Yup.string().required('Nationality is required'),
	contactNo: Yup.string().required('Contact Number is required').matches(/^([17][7])[1-9]{6}$/, 'Not a valid number'),
	permanentAddress: Yup.string().required('Permanent address is required'),
	purposeOfVisit: Yup.string().required('Purpose of visit is required'),
	comingFrom: Yup.string().required('Location source is required'),
	nextDestination: Yup.string().required('Next destination is required'),
	vehicleNo: Yup.string().required('Vehicle number is required'),
	checkInDate: Yup.string().required('Check In Date is required'),
	checkInTime: Yup.string().required('Check In Time is required'),
	name: Yup.string().required('Name is required'),
	cid: Yup.string().required('CID is required'),
})
