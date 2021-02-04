import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserCollection } from 'src/models/user-collection';
import { UserJsonld } from 'src/models/user-jsonId';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  
  public users: Array<UserJsonld> = [];

  public prevLink: string|null = null;
  public nextLink: string|null = null;

  public lastPage: number|null = null;

  public filters = {
    email: '',
    lastName: '',
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.loadPage('/api/users?page=1');
  }

  public applyFilters(page: number = 1): void {
    let url = '/api/users?page=' + page;

    // Object.keys(this.filters) => ['email', 'lastName', 'bsrasrui']
    // Object.keys get an array of all attribute's name from a given object.
    for (const key of Object.keys(this.filters)) {
      // You can access an object's attribute with an array syntax like.
      if (key in this.filters) {
        const val = this.filters[key];

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
    // this.loadPage('/api/users?page=' + pageNumber);
  }

  public get getPageNumbers(): Array<number> {
    const arr: Array<number> = [];

    if (this.lastPage !== null) {
      for (let i = 1; i <= this.lastPage; i++) {
        arr.push(i);
      }
    }

    return arr;
  }

  private loadPage(page: string): void {
    this.httpClient.get<UserCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + page).subscribe((data) => {
      this.users = data['hydra:member'];

      if (data['hydra:view']['hydra:next'] === undefined) {
        this.nextLink = null;
      } else {
        this.nextLink = data['hydra:view']['hydra:next'];
      }

      if (data['hydra:view']['hydra:previous'] === undefined) {
        this.prevLink = null;
      } else {
        this.prevLink = data['hydra:view']['hydra:previous'];
      }

      if (data['hydra:view']['hydra:last'] === undefined) {
        this.lastPage = null;
      } else {
        const regex = /\?.*page=([0-9]+)/;
        const str = data['hydra:view']['hydra:last'];

        // An array
        // first element => the full regex
        // second element => only the content inside the first ()
        const matches = str.match(regex);

        if (matches === null) {
          this.lastPage = null;
        } else {
          this.lastPage = parseInt(matches[1]);
        }
      }
    });
  }
}
