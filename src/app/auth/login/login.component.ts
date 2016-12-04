import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private snack: MdSnackBar
  ) { }

  login() {
    this.auth.login(
      { email: this.email, password: this.password },
      { provider: AuthProviders.Password, method: AuthMethods.Password }
    )
    .then(() => {
      this.router.navigate(['/']);
      // this.router.navigate(['/admin']);
    })
    .catch(() => {
      let ref = this.snack.open('Autenticación Fallida. Revise sus credenciales.', 'Intenta de nuevo');

      // TODO USE DURATION PARAMETER INSTEAD OF REF IN MATERIAL ALPHA11
      setTimeout(() => ref.dismiss(), 3000);
    });
  }
}
