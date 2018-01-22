import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/Observable';

import { normalizeCollection, Program, ProgramsService } from 'app/core';

@Component({
  selector: 'fd-admin-edit-program',
  templateUrl: 'admin-edit-program.component.html',
  styleUrls: ['admin-edit-program.component.scss']
})
export class AdminEditProgramComponent implements OnInit {
  id: string;
  sections$ = this.programsSvc.fetchSections();
  program$: Observable<Program>;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private programsSvc: ProgramsService
  ) { }

  ngOnInit() {
    this.id =  this.route.snapshot.params.id;
    this.program$ = this.programsSvc.fetchProgram(this.id);
  }

  onEditProgram(program: Program) {
    this.programsSvc.editProgram(this.id, program)
    .then(() => this.snackBar.open('Programa editado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch((err) => {
      this.snackBar.open('Error al editar el programa', 'Cerrar', { duration: 4000 });
      // tslint:disable-next-line:no-console
      console.error(err);
    });
  }
}
