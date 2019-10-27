import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SwapiService } from '../swapi.service';
// import { NavbarComponent } from './navbar/navbar.component';
import { Angular2SwapiModule } from 'angular2-swapi';
// import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsComponent } from './peopledetails/peopledetails.component';
import { PeopleIndexComponent } from './peopleindex/peopleindex.component';
import { VehicleindexComponent } from './vehicleindex/vehicleindex.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';

const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'people/:personid', component: PeopleDetailsComponent },
        { path: 'people', component: PeopleIndexComponent},
        { path: 'vehicles/:vehicleid', component: VehicledetailsComponent },
        { path: 'vehicles', component: VehicleindexComponent }
      ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, Angular2SwapiModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HomeComponent, PeopleDetailsComponent, PeopleIndexComponent, VehicleindexComponent, VehicledetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SwapiService]
})
export class AppModule { }
