export interface BaseCheckInValues {
	name: string;
	cid: string;
}
export interface CheckInValues extends BaseCheckInValues{
	checkInDate: string;
	checkInTime: string;
}

export interface CheckInFormValues extends BaseCheckInValues{
	checkInDate: Date;
	checkInTime: Date;
}
