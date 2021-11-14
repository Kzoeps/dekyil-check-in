import {doc, setDoc} from 'firebase/firestore';
import {db} from '../../../utils/constants/firebase';
import {CheckInValues} from '../models/interfaces';

export const CHECK_IN_N_OUT_CALLS = {
	checkIn: (checkInInfo: CheckInValues, id: string): Promise<void> => setDoc(doc(db, 'checkIn', id), checkInInfo)
};
