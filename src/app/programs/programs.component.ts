import { Component } from '@angular/core';

import { HeaderService } from '../header/header.service';
import { FirebaseListObservable } from "angularfire2";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fd-programs',
  templateUrl: 'programs.component.html',
  styleUrls: ['programs.component.scss']
})
export class ProgramsComponent {
  programs: FirebaseListObservable<any>;

  // TODO put in database
  pctaa: any = [
    {
      year: "2011",
      name: "Creación y puesta en marcha del SISTEMA RETAM – Página web + Base de Datos sobre Tecnologías " +
      "Apropiadas y Apropiables de la Amazonia, en: Construcción, Saneamiento Básico Ambiental y Energías Alternas.",
      others: "Bolivia, Brasil, Colombia , Ecuador, Guyana, Perú, Suriname y Venezuela. OEA, FFPG, CAF, UNAMAZ",
      image: "assets/images/programs/PCTAA/2011.png"
    },
    {
      year: "2010",
      name: "2ª Etapa. Base de Datos sobre Tecnologías Apropiadas y Apropiables de la Amazonia de en: Construcción, " +
      "Saneamiento Básico Ambiental y Energías Alternas.",
      others: "Ecuador, Guyana, Perú y Suriname. OEA, FFPG, CAF, UNAMAZ",
      image: "assets/images/programs/PCTAA/2010.png"
    },
    {
      year: "2007-2010",
      name: "Tecnologías Apropiadas y Apropiables de la Amazonia, en: Construcción, Saneamiento Básico Ambiental y " +
      "Energías alternas. Las experiencias amazónicas para la puesta en marcha de la Red de Tecnologías Apropiadas " +
      "del Amazonas RETAM (2ª etapa).",
      others: "Amazonia de Ecuador, Guyana, Perú y Suriname. OEA, FFPG, CAF, UNAMAZ",
      image: "assets/images/programs/PCTAA/2007-2010.png"
    },
    {
      year: "2001-2002",
      name: "Formación de las familias de las 7 Comunidades JIWI-Guahibo del corredor vial Samariapo- Boca del río " +
      "Sipapo, en la elaboración de la línea de materiales de construcción con tierra cocida, a través de la " +
      "Metodología Participativa.",
      others: "Estado Amazonas, Venezuela. Programa Sobremarcha-CIARA.",
      image: "assets/images/programs/PCTAA/2001-2002.png"
    },
    {
      year: "2000",
      name: "1ª Etapa. Base de Datos sobre Tecnologías Apropiadas y Apropiables de la Amazonia de Bolivia, Brasil, " +
      "Colombia y Venezuela en: Construcción, Saneamiento Básico Ambiental y Energías Alternas.",
      others: "FAO , TCA / SP Venezuela",
      image: "assets/images/programs/PCTAA/2000.png"
    },
    {
      year: "1997–1999",
      name: "Tecnologías Apropiadas y Apropiables de la Amazonia, en: Construcción, Saneamiento Básico Ambiental y " +
      "Energías alternas. Las experiencias amazónicas para la creación de la Red de Tecnologías Apropiadas del " +
      "Amazonas RETAM (1ª etapa).",
      others: "FAO, TCA / SP Venezuela",
      image: "assets/images/programs/PCTAA/1997-1999.png"

    },
    {
      year: "1998",
      name: "Generación y Transferencia de Tecnologías sobre Plantas útiles del Amazonas, y Sistemas de Producción " +
      "Indígena. En el marco del proyecto RLA/92/6/32 Capacitación para el Aprovechamiento Sustentable de la " +
      "Biodiversidad Amazónica.",
      others: "PNUD, TCA / SP Perú, SADA AMAZONAS / MARNR Venezuela",
      image: "assets/images/programs/PCTAA/1998.png"
    },
    {
      year: "1990-1995",
      name: "15.000 Años de Vivienda Indígena en Venezuela. Proyecto regional entre Venezuela, Colombia y Brasil.",
      others: "UNESCO, OEA",
      image: "assets/images/programs/PCTAA/1990-1995.png"
    },
  ];

  ads: any = [
    {
      year: "1997",
      name: "Establecimiento de un Huerto piloto de Plantas Medicinales, Alimenticias, Frutales y Árboles de " +
      "crecimiento rápido con las mujeres Jiwi-Guahibo del corredor vial Sipapo-Puente Samariapo, estado Amazonas",
      others: "EMBAJADA DE ALEMANIA –Proyectos de pequeña envergadura.",
      image: "assets/images/programs/AS/huerto-piloto.png"
    },
    {
      year: "1997",
      name: "Cursos teórico-prácticos de Bacteriología Clínica: enterobacterium, vibriones y micobacterium por " +
      "cultivos básicos (para médicos y bioanalistas de la Dirección Regional de Salud del estado Amazonas).",
      others: "Cooperación Técnica y Científica de la Embajada de Francia (a nivel regional andino). Caracas, " +
      "Université de Toulouse, Département d´Epidemiologie. Francia. PROCED –Proyecto franco-ecuatoriano de " +
      "erradicación del cólera y enfermedades diarréicas (a nivel regional andino). Quito, INH –Instituto Nacional " +
      "de Higiene, Ecuador.",
      image: "assets/images/programs/AS/teorico-practicos.png"
    },
    {
      year: "1996",
      name: "Cursos intensivos de diagnóstico directo con microscopio en zonas indígenas del estado Amazonas.",
      others: "Cooperación Técnica y Científica de la Embajada de Francia (a nivel regional andino). Caracas, PROCED " +
      "-Proyecto franco-ecuatoriano de erradicación del cólera y enfermedades diarréicas (a nivel regional andino)." +
      " Quito, INH –Instituto Nacional de Higiene. Ecuador.",
      image: "assets/images/programs/AS/intensivos-diagnostico.png"
    },
  ];

  fea: any = [
    {
      year: "Desde 2011",
      name: "Creación y puesta en marcha del SISTEMA ANAR.",
      others: "Aplicaciones de:",
      image: ""
    },
    {
      year: "",
      name: "• Realidad Aumentada sobre las Manifestaciones Rupestres venezolanas.",
      others: "Ingeniería de Computación USB",
      image: "assets/images/programs/FEA/desde-2011-ra.png"
    },
    {
      year: "",
      name: "• Base de Datos Geoespacial sobre las Manifestaciones Rupestres venezolanas.",
      others: "INGEOLAN, Ingeniería de Computación USB",
      image: "assets/images/programs/FEA/desde-2011-bd.png"
    },
    {
      year: "",
      name: "• Software Interactivo sobre las Manifestaciones Rupestres venezolanas.",
      others: "Ingeniería de Computación USB",
      image: ""
    },
    {
      year: "Desde 2008",
      name: "Proyecto Educativo: Las Manifestaciones Rupestres y la Escuela.",
      others: "Escuela de Antropología y Escuela de Educación UCV.",
      image: "assets/images/programs/FEA/desde-2008.png"
    },
    {
      year: "1998",
      name: "Estudio de Diseño RECICLARTE.",
      others: "Talleres diversos, permanentes, en colegios, escuelas y grupos comunitarios.",
      image: "assets/images/programs/FEA/1998.png"
    },
    {
      year: "1997",
      name: "Primer Congreso Continental de Escritores Indígenas en Lenguas indígenas de América.",
      others: "UNESCO, F.C.I.L - Fondo Canadiense para Iniciativas Locales-, Embajada de Canadá, Venezuela; ORPIA " +
      "Organización Regional de Pueblos Indígenas del Amazonas-, SADA-AMAZONAS / M.A.R.N.R.",
      image: "assets/images/programs/FEA/1997.png"
    },
    {
      year: "1994-1997",
      name: "Atención integral a la a población indígena Jiwi-Guahibo (Amazonia de Venezuela y Colombia).",
      others: "OEA",
      image: "assets/images/programs/FEA/1994-1997.png"
    },
    {
      year: "Desde 1985",
      name: "Creación y actualización continua del ANAR –Archivo Nacional de Arte Rupestre.",
      others: "",
      image: "assets/images/programs/FEA/desde-1985.png"
    },
  ];

  constructor(
    private headerSvc: HeaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Programas y Proyectos');
    this.route.data.subscribe(({ programs }) => { this.programs = programs; });
  }
}
