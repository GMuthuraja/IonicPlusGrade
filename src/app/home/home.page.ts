import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  myPNR: any;
  myLastname: any;
  results: any;

  constructor(private api: ApiserviceService) { }

  getPNRStatus() {
    if (!this.myPNR || !this.myLastname) {
      this.results = "PNR and Last Name is must!";
      return;
    }

    this.api.setPNRNumber(this.myPNR);
    this.results = "Please wait...";
    this.api.getVerifyPNR(this.myPNR, this.myLastname).subscribe((res) => {
      this.results = JSON.stringify(res);
    }, (error) => {
      this.results = JSON.stringify(error);
    });
  }

}
