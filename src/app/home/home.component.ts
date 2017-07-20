import {AfterViewInit, Component} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import planeDirection from './external-scripts/plane-direction';
import cloudAnimation from './external-scripts/header-animation';


import { Flight } from '../classes/flight';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-responsive.component.css'],
  providers: [FlightsService]

})
export class HomeComponent implements AfterViewInit {
  flights: Flight[];

  constructor(private flightService: FlightsService) { }

  search(departure: string, arrival: string, date: string, direct: boolean): void {
    this.flightService
      .getFlights(departure, arrival, date, direct)
      .then(flights => {
        this.flights = flights;
        this.flights.forEach(function (item) {
          item.time_arrival = new Date(item.time_arrival);
          item.time_departure = new Date(item.time_departure);
          item.date_arrival = new Date(item.date_arrival);
          item.date_departure = new Date(item.date_departure);
        });
      });

  }

  ngAfterViewInit(): void {
      planeDirection();
      cloudAnimation();
  }
}
