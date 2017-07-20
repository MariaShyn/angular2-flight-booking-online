import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Flight } from '../classes/flight';

@Injectable()
export class FlightsService {

  constructor(private http: Http) { }

  getFlights(departure: string, destination: string, date: string, onlyDirect: boolean): Promise<Flight[]> {
    const params = new URLSearchParams();
    params.set('departure', departure);
    params.set('date', date);
    params.set('destination', destination);
    params.set('onlyDirect', onlyDirect + '');

    return this.http
      .get('api/flights', {search: params})
      .toPromise()
      .then(response => {
        return response.json() as Flight[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
