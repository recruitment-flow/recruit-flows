import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  activeRequests: number = 0;
  showLoader: boolean = false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.loaderObservable.subscribe(show => {
      if (show) {
        this.startLoader();
      } else {
        this.stopLoader();
      }
    })
  }

  startLoader() {
    this.activeRequests++;

    if (this.activeRequests > 0) {
      this.showLoader = true;
    }

  }
  stopLoader() {
    this.activeRequests--;
    if (this.activeRequests <= 0) {
      this.showLoader = false;
    }
  }

}
