import {ColumnConfig} from './models';

export const GUEST_LIST_COLUMNS: Readonly<ColumnConfig[]> = [
	{
		field: 'checkInId',
		display: 'Check In ID'
	},
	{
		field: 'name',
		display: 'Name'
	},
	{
		field: 'cid',
		display: 'CID'
	},
	{
		field: 'checkInDate',
		display: 'Check In Date'
	},
	{
		field: 'checkInTime',
		display: 'Check In Time'
	},
	{
		field: 'checkOutDate',
		display: 'Check Out Date'
	},
	{
		field: 'checkOutTime',
		display: 'Check Out Time'
	}
]

export {};
