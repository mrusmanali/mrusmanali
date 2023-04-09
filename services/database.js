import { map } from "lodash";
import FirebaseService from "./firebase";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

class Database {
  constructor() {
    if(!this.instance) this.instance = this;
    return this.instance;
  }

  async fetchList(name) {
    let db = getFirestore(FirebaseService.app);
    let querySnapshot = await getDocs(collection(db, name));
    return map(querySnapshot.docs, doc => ({id: doc.id, ...doc.data()}));
  }

  addDocument(name, data) {
    let db = getFirestore(FirebaseService.app);
    return addDoc(collection(db, name), data);
  }
}
const DatabaseService = new Database();
export default DatabaseService;