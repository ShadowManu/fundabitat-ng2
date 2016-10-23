import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {
  data: FirebaseObjectObservable<any>;

  constructor(
      private headerSvc: HeaderService,
      private fire: AngularFire
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Quienes Somos');
    this.data = this.fire.database.object('/about');
  }

}
