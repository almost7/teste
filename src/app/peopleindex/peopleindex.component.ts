import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-peopleindex',
  templateUrl: './peopleindex.component.html',
  styleUrls: ['./peopleindex.component.css']
})
export class PeopleIndexComponent implements OnInit {
  page:number = 1;
  people: Person[]; 
  personSelected: Person;
  constructor(private swapiAPI: SwapiService) { }

  ngOnInit() {
    this.people = [];
    this.getPeople();
  }

  getPeople(): void {
    this.swapiAPI.getPeople(this.page)
                      .subscribe(dados => {
                          for (let i = 0; i < dados.results.length; i++){
                            let currentPerson = dados.results[i];
                            currentPerson.id = currentPerson.url.split('/')[5];
                            this.people.push(currentPerson)
                          }
                      });
    this.page++;
  }
}