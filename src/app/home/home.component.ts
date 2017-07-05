import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import planeDirection from './external-scripts/plane-direction'
import cloudAnimation from './external-scripts/header-animation'


// import { Flight }                from '../flight';
// import { FlightService }         from '../flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-responsive.component.css'],
  // providers: [FlightService]

})
export class HomeComponent {
  // flights: Flight[];

  // constructor(private flightService: FlightService) { }
  //
  // search(departure: string, arrival: string, date: string, direct: boolean): void {
  //   this.flightService
  //     .getFlights(departure, arrival, date, direct)
  //     .then(flights => {
  //       this.flights = flights;
  //       console.log(flights);
  //     });
  //
  // }

  ngAfterViewInit(): void {
      planeDirection();
      cloudAnimation();
  }
}
