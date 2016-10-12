import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class HeaderService {

  whenTitleChanges: BehaviorSubject<string> = new BehaviorSubject<string>('FUNDABITAT');

  setTitle(title: string) {
    this.whenTitleChanges.next(title);
  }

}
