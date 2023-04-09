import { BehaviorSubject } from 'rxjs';
import { filter as rxfilter } from 'rxjs/operators';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseService from './firebase';
import { isNull } from 'lodash';

class Auth {
  constructor() {
    this.auth = null;
    this.user = new BehaviorSubject(null);

    if(!this.instance) this.instance = this;
    return this.instance;
  }

  init() {
    this.auth = getAuth(FirebaseService.app);
    onAuthStateChanged(this.auth, (user) => {
      if(user) this.user.next(user);
      else this.user.next(null);
    })
  }

  get $user() {
    return this.user.asObservable().pipe(
      rxfilter(user=>!isNull(user))
    );
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
const AuthService = new Auth;
export default AuthService;