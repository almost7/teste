import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Vehicle } from './vehicle';

@Injectable()
export class SwapiService {
  private personSelected = new BehaviorSubject(null);
  private vehicleSelected = new BehaviorSubject(null);
  private apiUrl = 'https://swapi.co/api/';
  private finisher = '?format=json';

  constructor(private http : HttpClient) { 
  }
  //People
  getPeople(page:number): Observable<Person[]> {
    return this.http
           .get<Person[]>(this.apiUrl + 'people/'+this.finisher+'&page='+page);
  }

  getPerson(): Observable<Person> {
    return this.personSelected;
  }

  getPersonById(id:number): Observable<Person> {
    return this.http.get<Person>(this.apiUrl + 'people/' + id+ '/' + this.finisher);
  }

  //Vehicles
  getVehicles(page:number): Observable<Vehicle[]> {
    return this.http
           .get<Vehicle[]>(this.apiUrl + 'vehicles/'+this.finisher+'&page='+page);
  }

  getVehicle(): Observable<Vehicle> {
    return this.vehicleSelected;
  }

  getVehicleById(id:number): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.apiUrl + 'vehicles/' + id+ '/' + this.finisher);
  }
  
}