import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {db} from '../../../utils/constants/firebase';
import {CheckInValues, CheckOutValues} from '../models/interfaces';
import {UpdateData} from '@firebase/firestore-types';

// promise any since firestore types seems outdated.
export const CHECK_IN_N_OUT_CALLS = {
	checkIn: (checkInInfo: CheckInValues, id: string): Promise<void> => setDoc(doc(db, 'checkIn', id), checkInInfo),
	getCheckIn: (checkInId: string): Promise<any> => getDoc(doc(db, 'checkIn', checkInId)),
	checkOut: (checkOutInfo: CheckOutValues, id: string): Promise<void> => updateDoc(doc(db, 'checkIn', id), checkOutInfo as UpdateData)
};
