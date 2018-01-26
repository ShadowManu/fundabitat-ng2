import { Component } from '@angular/core';

import { PublicationsService, Publication } from 'app/core';

@Component({
  selector: 'fd-publications',
  templateUrl: 'publications.component.html',
  styleUrls: ['publications.component.scss']
})
export class PublicationsComponent {
  publications$ = this.pubSvc.fetchPublications();

  constructor(private pubSvc: PublicationsService) { }
}
