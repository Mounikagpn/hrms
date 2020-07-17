import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DebugRenderer2 } from '@angular/core/src/view/services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable(
{
  providedIn:"root"
} 
)
export class CustomInterceptor implements HttpInterceptor {
  constructor() {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const oauth2_client_id = localStorage.getItem('clientid');
    const oauth2_client_secret = localStorage.getItem('clientSecret');
    if (localStorage.getItem('access-token')) {

      if ((req.url.toLocaleLowerCase().indexOf('/empdetails') !== -1)||(req.url.toLocaleLowerCase().indexOf('/dashboard') !== -1) ) {
        req = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' +
            localStorage.getItem('access-token')).set('Content-Type', 'application/json'),
          responseType: 'json',
        });
      }


    return next.handle(req)
     
  }
}

}