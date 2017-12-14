import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  signIn(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.snackBar.open('Iniciaste sesión correctamente', 'Cerrar', { duration: 4000 });
      this.router.navigateByUrl('/admin');
    })
    .catch((err) => {
      this.snackBar.open('Error al iniciar sesión', 'Cerrar', { duration: 4000 });
      // tslint:disable-next-line:no-console
      console.error(err);
    });
  }

  signOut() {
    this.fireAuth.auth.signOut()
    .then(() => {
      this.snackBar.open('Cerraste sesión correctamente', 'Cerrar', { duration: 4000 });
      this.router.navigateByUrl('/');
    })
    .catch(console.error.bind(console));
  }

  get authState() { return this.fireAuth.authState; }
}
