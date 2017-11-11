import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private snackbar: MatSnackBar
  ) { }

  onSubmit(form: NgForm) {
    let { email, password } = form.value;

    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.snackbar.open('Iniciaste sesión correctamente', 'Cerrar', { duration: 4000 });
      this.router.navigateByUrl('/admin');
    });
  }
}
