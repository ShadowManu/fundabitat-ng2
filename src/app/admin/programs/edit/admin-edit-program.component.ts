import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore, AngularFirestoreDocument as AFD } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { normalizeDocArray, Program } from 'app/core';

@Component({
  selector: 'fd-admin-edit-program',
  templateUrl: 'admin-edit-program.component.html',
  styleUrls: ['admin-edit-program.component.scss']
})
export class AdminEditProgramComponent {
  sections$ = this.firestore.collection('program-sections').snapshotChanges().map(normalizeDocArray);
  program$: Observable<Program>;
  document: AFD<Program>;

  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    let id =  this.route.snapshot.params.id;

    this.document = this.firestore.doc<Program>(`programs/${id}`);
    this.program$ = this.document.valueChanges();
  }

  onEditProgram(program: Program) {
    this.document.update(program)
    .then(() => this.snackBar.open('Programa editado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch((err) => {
      this.snackBar.open('Error al editar el programa', 'Cerrar', { duration: 4000 });
      // tslint:disable-next-line:no-console
      console.error(err);
    });
  }
}
