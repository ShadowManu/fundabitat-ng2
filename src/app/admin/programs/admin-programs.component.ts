import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import { assign, values } from 'lodash';

@Component({
  selector: 'fd-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.scss']
})
export class AdminProgramsComponent {
  sections$ = this.firestore.collection('program-sections').snapshotChanges()
  .do(a => console.log(a));

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  onCreateSection(form: NgForm) {
    this.firestore.collection('program-sections').add(form.value)
    .then(() => this.snackBar.open('Sección creada exitosamente', 'Cerrar', { duration: 4000 }))
    .catch(() => this.snackBar.open('Error al crear sección', 'Cerrar', { duration: 4000 }));
  }

  onCreateProgram(form: NgForm) {
    console.log(form.value);

    // this.fire.database.list(`/programs/${section}/programs`)
    // .push({ title, description, location })
    // .then(() => this.snackBar.open('Programa creada exitosamente', undefined, { duration: 2000 }))
    // .catch(() => this.snackBar.open('El programa no pudo crearse', undefined, { duration: 2000 }));

    // this.newProgram.reset();
  }
}
