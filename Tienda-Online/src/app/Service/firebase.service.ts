import { initializeApp } from 'firebase/app';
import { Auth,getAuth } from 'firebase/auth';
import { Firestore,getFirestore } from 'firebase/firestore';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseConfig = {

    authDomain: 'tienda-online-674e7.firebaseapp.com',

    databaseURL: 'https://tienda-online-674e7-default-rtdb.firebaseio.com',

    projectId: 'tienda-online-674e7',

    storageBucket: 'tienda-online-674e7.firebasestorage.app',

    messagingSenderId: '818073072143',

    appId: '1:818073072143:web:91aaedcaa931be16b7297a',
  };

  public auth: Auth;
  public firebase: Firestore;
  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
