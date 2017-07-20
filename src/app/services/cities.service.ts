import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from '../classes/city';

@Injectable()
export class CitiesService {

  constructor(private http: Http) { }

  getAirlines(): Promise<City[]> {
    return this.http
      .get('api/cities')
      .toPromise()
      .then(response => {
        return response.json() as City[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
