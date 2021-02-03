import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GarageCollection } from 'src/models/garage-collection';
import { GarageJsonld } from 'src/models/garage-jsonId';

@Component({
  selector: 'app-list-garage',
  templateUrl: './list-garage.component.html',
  styleUrls: ['./list-garage.component.scss']
})


export class ListGarageComponent implements OnInit {
  
  
  public garages : Array<GarageJsonld> = [];

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.httpClient.get<GarageCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages?page=15').subscribe((data) =>{
   this.garages = data['hydra:member'];
    });
  }
}
