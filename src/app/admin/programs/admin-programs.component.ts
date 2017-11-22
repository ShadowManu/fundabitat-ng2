import { Component, ViewChild, TemplateRef } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgramsService, Program } from 'app/core';

@Component({
  selector: 'fd-admin-programs',
  templateUrl: './admin-programs.component.html',
  styleUrls: ['./admin-programs.component.scss']
})
export class AdminProgramsComponent {
  sections$ = this.programsSvc.fetchSections();
  sectionsWithPrograms$ = this.programsSvc.fetchAll();

  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  dialogRef: MatDialogRef<any>;
  selectedProgram: Program;

  constructor(
    private programsSvc: ProgramsService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  onCreateProgram(program: Program) {
    this.programsSvc.createProgram(program)
    .then(() => this.snackBar.open('Programa creado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch(() => this.snackBar.open('Error al crear el programa', 'Cerrar', { duration: 4000 }));
  }

  onDeleteIntent(program: Program) {
    this.selectedProgram = program;
    this.dialogRef = this.matDialog.open(this.dialogTemplate);
  }

  onDeleteProgram() {
    let id = this.selectedProgram.$id;

    this.programsSvc.deleteProgram(id)
    .then(() => this.snackBar.open('Programa borrado exitosamente', 'Cerrar', { duration: 4000 }))
    .catch(() => this.snackBar.open('Error al borrar el programa', 'Cerrar', { duration: 4000 }))

    .then(() => this.dialogRef.close());
  }
}
