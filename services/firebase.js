import config from '@root/firebaseconfig';
import { initializeApp } from 'firebase/app';

class Firebase {
  constructor() {
    if(!this.instance) this.instance = this;
    return this.instance;
  }

  get app() {
    return initializeApp(config);
  }

}
const FirebaseService = new Firebase();
export default FirebaseService;