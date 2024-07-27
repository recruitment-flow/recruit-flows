import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderObserver!: Observer<boolean>;
  public loaderObservable: Observable<boolean>;

  constructor() {
    this.loaderObservable = new Observable((observer: Observer<boolean>) => {
      this.loaderObserver = observer;
    });
  }

  showLoader() {
    if (this.loaderObserver) {
      this.loaderObserver.next(true);
    }
  }

  hideLoader() {
    if (this.loaderObserver) {
      this.loaderObserver.next(false);
    }
  }
}

