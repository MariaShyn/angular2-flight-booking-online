import { Component, OnInit } from '@angular/core';
import placeChoice from './external-scripts/place-choice'

@Component({
  selector: 'app-plane-places',
  templateUrl: './plane-places.component.html',
  styleUrls: ['./plane-places.component.css', './plane-places-responsive.component.css']
})
export class PlanePlacesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
     placeChoice();
  }
}


