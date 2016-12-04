import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
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
    private auth: AngularFireAuth,
    private snack: MdSnackBar
  ) { }

  login() {
    this.auth.login(
      { email: this.email, password: this.password },
      { provider: AuthProviders.Password, method: AuthMethods.Password }
    )
    .then((state: FirebaseAuthState) => {
      // NO OP FOR NOW. TODO REROUTE;
    })
    .catch(() => {
      this.snack.open('Autenticación Fallida. Revise sus credenciales.');
    });
  }
}
