import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { FirebaseObjectObservable } from 'angularfire2';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'fd-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {
  about: FirebaseObjectObservable<any>;

  constructor(
    private headerSvc: HeaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.headerSvc.setTitle('Quienes Somos');
    this.route.data.subscribe(({ about }) => { this.about = about; })
  }

}
