import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { SwapiService } from '../swapi.service';


@Component({
  selector: 'app-vehicleindex',
  templateUrl: './vehicleindex.component.html',
  styleUrls: ['./vehicleindex.component.css']
})
export class VehicleindexComponent implements OnInit {

  page:number = 1;
  vehicles: Vehicle[]; 
  personSelected: Vehicle;
  constructor(private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.vehicles = [];
    this.getVehicles();
  }

  getVehicles(): void {
    this.swapiAPI.getVehicles(this.page)
                      .subscribe(dados => {
                          for (let i = 0; i < dados.results.length; i++){
                            let currentVehicle = dados.results[i];
                            currentVehicle.id = currentVehicle.url.split('/')[5];
                            this.vehicles.push(currentVehicle)
                          }
                      });
    this.page++;
  }
}