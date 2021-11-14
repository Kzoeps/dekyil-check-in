import {collection, getDocs} from 'firebase/firestore';
import {CollectionNames} from '../../../utils/constants/enums';
import {db} from '../../../utils/constants/firebase';

export const DASHBOARD_API = {
	getCheckIns: (): Promise<any> => getDocs(collection(db, CollectionNames.checkIns))
};
