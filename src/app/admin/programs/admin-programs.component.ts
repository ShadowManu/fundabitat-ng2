import { Component, ViewChild, TemplateRef } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  dialogRef: MatDialogRef<any>;
  selectedProgram: Program;

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  onCreateProgram(program: Program) {
    this.firestore.collection('programs').add(program)
    .then(() => this.snackBar.open('Programa creado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch(() => this.snackBar.open('Error al crear el programa', 'Cerrar', { duration: 4000 }));
  }

  onDeleteIntent(program: Program) {
    this.selectedProgram = program;
    this.dialogRef = this.matDialog.open(this.dialogTemplate);
  }

  onDeleteProgram() {
    let program = this.selectedProgram;
    let id = program.$id;

    this.firestore.doc<Program>(`programs/${id}`).delete()
    .then(() => this.snackBar.open('Programa borrado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch(() => this.snackBar.open('Error al borrar el programa', 'Cerrar', { duration: 4000 }))

    .then(() => this.dialogRef.close());
  }
}
