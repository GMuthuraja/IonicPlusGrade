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
    // let payload = {
    //   "pnr": pnr,
    //   "apiKEY": "Hv0ghh4TPHupO53LDsisZWks",
    //   "lastName": lname
    // }

    return this.http.get("http://115.110.226.234/OMEGAAPI/api/lookup/GetPlusGrade?pnr=" + pnr + "&lastName=" + lname);
    //return this.http.post("https://request-api.stage.plusgrade.com/v1/offer/y1u3muiXSV/pnr", payload);
  }
}
