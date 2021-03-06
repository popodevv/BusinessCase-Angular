import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';
import { GarageCollection } from 'src/models/garage-collection';
import { GarageCollectionFilter } from 'src/models/garage-collection-filter';
import { GarageJsonld } from 'src/models/garage-jsonId';

@Component({
  selector: 'app-list-garage',
  templateUrl: './list-garage.component.html',
  styleUrls: ['./list-garage.component.scss']
})


export class ListGarageComponent implements OnInit {
  
  public listGarage: number= 0;
  public garages : Array<GarageJsonld> = [];
  
  public prevLink : string|null = null;
  public nextLink : string|null = null;

  public lastPage : number|null = null;

  public filters : GarageCollectionFilter = {
    email: '',
    name: '',
    id: '',
    street: '',
    streetcomplement:'',
    postalcode:'',
    city:'',
    owner:'',
  };

  public violationList: ConstraintViolationList|null = null;


  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.loadPage('/api/garages?page=1');
      this.httpClient.get<GarageCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages?page=1&order%5Bid%5D=desc')
      .subscribe((total)=>{
      this.listGarage = total['hydra:totalItems'];
      });
 }

 public applyFilters(page: number = 1): void {
  let url = '/api/garages?page=' + page;

    for (const key of Object.keys(this.filters)) {
      if (key in this.filters) {
        const val = this.filters[key as keyof GarageCollectionFilter];

        if (val !== '') {
          url += '&' + key + '=' + val;
        }
      }
    }
    this.loadPage(url);
}

  public loadNextPage(): void { 
    if (this.nextLink !== null) {
      this.loadPage(this.nextLink);
    }
  }
  public loadPreviousPage(): void { 
    if (this.prevLink !== null) {
      this.loadPage(this.prevLink);
    }
  }

public loadPageByNumber(pageNumber: number): void {
  this.applyFilters(pageNumber);
}


public get getPageNumbers(): Array<number> {
  const arr: Array<number> = [];

  if (this.lastPage !== null){
  for (let i = 1; i <= this.lastPage; i++) {
    arr.push(i);
  } 
}
  return arr;
}


private loadPage(page:string): void {
  this.httpClient.get<GarageCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + page).subscribe((data) => {
  this.garages = data['hydra:member'];

  if (data['hydra:view']['hydra:next'] === undefined){
      this.nextLink = null;
    }else{
      this.nextLink = data['hydra:view']['hydra:next'];
    }
  

  if (data['hydra:view']['hydra:previous'] === undefined){
    this.prevLink = null;
  }else{
    this.prevLink = data['hydra:view']['hydra:previous'];
  }

  if (data['hydra:view']['hydra:last'] === undefined){
    this.lastPage = null;
  }else{
    const regex = /\?.*page=([0-9]+)/;
    const str = data ['hydra:view']['hydra:last'];

    //an array
    //first element = the full regex
    //second element = only the content inside the first
    const matches = str.match(regex);
    
    if (matches === null){
      this.lastPage = null;
    }else{
      this.lastPage = parseInt(matches[1]);
    }
    }
  });
}

public deleteGarage(id: number): void {
  if (confirm("Etes-vous sur de vouloir supprimer ce garage ?")){
  this.httpClient.delete('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages/'+ id).subscribe({
    next : () => {
      this.loadPage('/api/garages?page=1');
    },
    error : (err: HttpErrorResponse) => { 
      if (err.status === 404) {
        this.violationList = err.error; 
        alert (err.error['hydra:description']); 
       
      }
      else { 
        alert(err.status + '- An error as occured.');
      }
    },
  });
}
}

public GarageOwner(user : string) : void {
  const regex = /api\/users\/(.+)/;
  const routeCorrected = user.match(regex);
  if (routeCorrected !== null){
    this.router.navigate(['user/viewuser/'+routeCorrected[1]]);
  }
}

}




