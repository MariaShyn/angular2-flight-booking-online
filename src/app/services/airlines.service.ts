import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Airline } from '../classes/airline';

@Injectable()
export class AirlinesService {

  constructor(private http: Http) { }

  getAirlines(): Promise<Airline[]> {
    return this.http
      .get('api/aircompanies')
      .toPromise()
      .then(response => {
        return response.json() as Airline[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
