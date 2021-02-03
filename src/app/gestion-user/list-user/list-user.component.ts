import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserCollection } from 'src/models/user-collection';
import { UserJsonld } from 'src/models/user-jsonId';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users : Array<UserJsonld> = [];

  public prevLink : string|null = null;
  public nextLink : string|null = null;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
      this.loadPage('/api/users?page=1');
 }

  public loadNextPage(): void { 
    if (this.nextLink !== null) {
      this.loadPage(this.nextLink);
    }
  }

private loadPage(page:string): void {
  this.httpClient.get<UserCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + page).subscribe((data) => {
  this.users = data['hydra:member'];

  if (data['hydra:view']['hydra:next'] === undefined){
      this.nextLink = null;
    }else{
      this.nextLink = data['hydra:view']['hydra:next'];
    }
    });
  }


  public loadPrevPage(): void { 
    if (this.prevLink !== null) {
      this.loadPage(this.prevLink);
    }
  }





} 

