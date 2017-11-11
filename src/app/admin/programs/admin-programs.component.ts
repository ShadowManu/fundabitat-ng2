import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { assign, values } from 'lodash';

import { mixDocuments, normalizeDocArray, Program } from 'app/core';

@Component({
  selector: 'fd-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.scss']
})
export class AdminProgramsComponent {
  sections$ = this.firestore.collection('program-sections').snapshotChanges().map(normalizeDocArray);

  sectionsWithPrograms$ = combineLatest(
    this.firestore.collection('program-sections').snapshotChanges(),
    this.firestore.collection('programs').snapshotChanges(),
    mixDocuments
  );

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  onCreateProgram(program: Program) {
    this.firestore.collection('programs').add(program)
    .then(() => this.snackBar.open('Programa creado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch(() => this.snackBar.open('Error al crear el programa', 'Cerrar', { duration: 4000 }));
  }
}
