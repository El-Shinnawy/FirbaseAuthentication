import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.isLoggedIn = this._isLoggedIn();
  }
  
  _isLoggedIn():boolean {
    return localStorage.getItem('token') != undefined;
  }

  login(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('token', JSON.stringify(res.user));
      return res;
    });
  }

  register(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      localStorage.setItem('token', JSON.stringify(res.user));
      return res;
    });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }
}
