import {addDoc, collection, doc, setDoc} from 'firebase/firestore';
import {db} from '../../../utils/constants/firebase';
import {CheckInValues} from '../models/interfaces';
import {DocumentReference} from '@firebase/firestore';
import {DocumentData} from '@firebase/firestore-types';
import {hri} from 'human-readable-ids';

export const CHECK_IN_N_OUT_CALLS = {
	checkIn: (checkInInfo: CheckInValues): Promise<DocumentReference<DocumentData>> => setDoc(doc(db, 'checkIn', ), checkInInfo)
};
