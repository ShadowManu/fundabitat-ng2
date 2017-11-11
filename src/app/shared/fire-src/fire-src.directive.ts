import { Directive, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

// tslint:disable:directive-selector
@Directive({
  selector: '[fireSrc]'
})
export class FireSrcDirective implements OnDestroy {
  storage = this.fire.storage();

  srcEvents = new Subject<string>();
  srcSubscription: Subscription;

  constructor(
    private fire: FirebaseApp,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.srcSubscription = this.srcEvents
    .switchMap(fireSrc => fromPromise(this.storage.ref(fireSrc).getDownloadURL()))
    .subscribe(imgSrc => this.applySrc(imgSrc));
  }

  ngOnDestroy() {
    this.srcEvents.unsubscribe();
  }

  @Input()
  set fireSrc(fireSrc: string) {
    if (!fireSrc) return;
    this.srcEvents.next(fireSrc);
  }

  private applySrc(src: string) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'src', src);
  }
}