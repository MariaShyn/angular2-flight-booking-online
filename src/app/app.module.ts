import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AuthComponent } from './auth/auth.component';
import { BookingComponent } from './booking/booking.component';
import { PlanePlacesComponent } from './plane-places/plane-places.component';

const ROUTES = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'airlines',
      component: AirlinesComponent
  },
  {
      path: 'booking',
      component: BookingComponent
  },
  {
      path: 'auth',
      component: AuthComponent
  },
  {
      path: 'places',
      component: PlanePlacesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    AirlinesComponent,
    AuthComponent,
    BookingComponent,
    PlanePlacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
