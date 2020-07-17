import { Observable, of as observableOf } from 'rxjs';

import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { NGXLogger } from 'ngx-logger';
import { catchError, filter, map, shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable({
	providedIn: 'root'
})
export class HttpService {
  
	private readonly apiRoot: string = environment.apiBase;
	constructor(private readonly http: HttpClient) {}

	doPost(endpoint, payload) {
		const url = `${this.apiRoot}/${endpoint}`;
		return this.http.post(url, payload).pipe(map((response: any) => response));
	}

	doGet(endpoint) {
		// let headers = new HttpHeaders();
		// headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
		const url = `${this.apiRoot}/${endpoint}`;
		return this.http.get(url).pipe(map((response: JSON) => response));
	}
	clientCreation(endpoint,payload) {
		const url = `${this.apiRoot}/${endpoint}`;
		return this.http.post(url, payload).pipe(map((response: any) => response));
	  }
}
