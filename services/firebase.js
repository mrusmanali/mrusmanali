import config from 'firebaseconfig';
import { initializeApp } from 'firebase/app';

class Firebase {
  constructor() {
    this.app = null;
    if(!this.instance) this.instance = this;
    return this.instance;
  }

  init() {
    this.app = initializeApp(config);
  }

}
const FirebaseService = new Firebase();
export default FirebaseService;