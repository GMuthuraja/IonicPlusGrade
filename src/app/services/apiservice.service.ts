import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  PNRNumber: any;

  constructor(private http: HttpClient) { }


  setPNRNumber(pnr) {
    this.PNRNumber = pnr;
  }

  getPNRNumber() {
    return this.PNRNumber;
  }

  getVerifyPNR(pnr, lname) {
    let payload = {
      "pnr": pnr,
      "apiKEY": "Hv0ghh4TPHupO53LDsisZWks",
      "lastName": lname
    }

    return this.http.post("https://cors-anywhere.herokuapp.com/https://request-api.stage.plusgrade.com/v1/offer/y1u3muiXSV/pnr", payload);
  }
}
