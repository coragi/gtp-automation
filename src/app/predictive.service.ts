import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PredictiveService {

	private URL_server: string = environment.apiURL;
	private apiEndpoint: string = '/api/model/';
	constructor(private http: HttpClient) { }

	callModel(text: string) {
		return this.http.get(this.URL_server + this.apiEndpoint + text);
	}

}
