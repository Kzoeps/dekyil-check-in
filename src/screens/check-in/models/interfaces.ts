export interface BaseCheckInValues {
	name: string;
	cid: string;
	roomNo: string;
	noOfPersons: string;
	nationality: string,
	contactNo: string,
	permanentAddress: string,
	purposeOfVisit: string,
	comingFrom: string,
	nextDestination: string,
	vehicleNo: string,
}
export interface CheckInValues extends BaseCheckInValues{
	checkInDate: string;
	checkInTime: string;
}

export interface CheckInFormValues extends BaseCheckInValues{
	checkInDate: Date;
	checkInTime: Date;
}

export interface BaseCheckoutValues {
	checkInId: string;
}

export interface CheckOutFormValues extends BaseCheckoutValues {
	checkOutDate: Date;
	checkOutTime: Date;
}

export interface CheckOutValues extends BaseCheckoutValues {
    checkOutDate: string;
    checkOutTime: string;
}

export interface GuestCheckInInfo extends CheckInFormValues {
	checkOutDate?: string;
	checkOutTime?: string;
	uniqueId?: string;
}
