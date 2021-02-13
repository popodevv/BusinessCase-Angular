import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { AnnonceCollection } from 'src/models/annonce-collection';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';
import { GarageCollection } from 'src/models/garage-collection';
import { GarageJsonld } from 'src/models/garage-jsonId';
import { UserCollection } from 'src/models/user-collection';
import { UserJsonld } from 'src/models/user-jsonId';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  public totalAnnonce :number|null = null;
  public arraylistAnnonce : Array<AnnonceJsonld> = [];
  
  public totalUser :number|null = null;
  public arraylistUser : Array<UserJsonld> = [];

  public totalGarage :number|null = null;
  public arraylistGarage : Array<GarageJsonld> = [];
 


  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {    
  
    this.httpClient.get<AnnonceCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings?page=1&order%5Bid%5D=desc')
    .subscribe(
      (result)=> { 
        this.totalAnnonce = result['hydra:totalItems'];
        let array = result['hydra:member'];
        for (let i=0; i<7; i++){
          this.arraylistAnnonce.push(array[i]);
        }
      },
       (err) => {console.error(err);
      }
    );
    
    this.httpClient.get<UserCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users?page=1&order%5Bid%5D=desc')
    .subscribe(
      (result)=> { 
        this.totalUser = result['hydra:totalItems'];
        let array = result['hydra:member'];
        for (let i=0; i<10; i++){
          this.arraylistUser.push(array[i]);
        }
      },
       (err) => {console.error(err);
      }
    );
    this.httpClient.get<GarageCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages?page=1&order%5Bid%5D=desc')
    .subscribe(
      (result)=> { 
        this.totalGarage = result['hydra:totalItems'];
        let array = result['hydra:member'];
        for (let i=0; i<10; i++){
          this.arraylistGarage.push(array[i]);
        }
      },
       (err) => {console.error(err);
      }
    );
  }
}