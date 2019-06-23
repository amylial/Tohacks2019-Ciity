import app, { GoogleAuthProvider } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from 'firebase';
import config from '../config';

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
    
    doSignInWithGmail = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithRedirect(provider);
    }

    jobs = () => this.db.ref('Jobs/');

    user = (uid) => this.db.ref('')
}


export default Firebase;