import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Airline } from '../classes/airline';
import { AirlinesService } from '../services/airlines.service';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css', './airlines-responsive.component.css'],
  providers: [AirlinesService]
})

export class AirlinesComponent implements OnInit {

  airlines: Airline[];
  selectedAirline: Airline;

  constructor( private airlinesService: AirlinesService) { }

  getAirlines(): void {
    this.airlinesService
      .getAirlines()
      .then(airlines => {
        this.airlines = airlines;
        this.selectedAirline = this.airlines[0];
      });
  }

  onSelect(airline: Airline): void {
    this.selectedAirline = airline;
  }

  ngOnInit(): void {
    this.getAirlines();
  }

}
