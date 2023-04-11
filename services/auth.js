import { hasIn, isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import FirebaseService from '@root/services/firebase';
import { filter as rxfilter, map as rxmap } from 'rxjs/operators';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

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
      if(!isNull(user)) this.user.next(user);
      else this.user.next({});
    })
  }

  get $user() {
    return this.user.asObservable().pipe(
      rxfilter(user => !isNull(user)),
      rxmap(user => hasIn(user, ['uid']))
    );
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
const AuthService = new Auth;
export default AuthService;