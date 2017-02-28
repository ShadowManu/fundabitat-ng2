import { Component } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
  selector: 'fd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  title: string = 'FUNDABITAT';
  images: string[];

  constructor(private headerSvc: HeaderService ) {
    this.headerSvc.whenTitleChanges.subscribe((title: string) => {
      this.title = title;
    })

    // TODO ADD Missing (7th and 9th) image since its jpg
    let simples: string[] = Array(8).fill(0).map((e, i) => `/assets/images/header/${i+1}.png`);
    this.images = simples.concat(simples);
  }

}
