import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {

  constructor(private api: ApiserviceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    request = request.clone({
      setHeaders: {
        "x-api-key": "Hv0ghh4TPHupO53LDsisZWks",
        "x-pnr": this.api.getPNRNumber(),
        "content-type": "application/json",
        "accept": "application/json"
      }
    });

    return next.handle(request);
  }
}
