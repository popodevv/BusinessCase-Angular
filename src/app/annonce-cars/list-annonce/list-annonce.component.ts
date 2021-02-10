import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnonceCollection } from 'src/models/annonce-collection';
import { AnnonceCollectionFilter } from 'src/models/annonce-collection-filter';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';


@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss']
})
export class ListAnnonceComponent implements OnInit {


  public annonces : Array<AnnonceJsonld> = [];

  public prevLink: string|null = null;
  public nextLink: string|null = null;

  public lastPage: number|null = null;
  
  public filters: AnnonceCollectionFilter = {
    id: '',
    title: '',
    description: '',
    releaseyear:'',
    km:'',
    price:'',
    brand:'',
    model:'',
    fuel:'',
    garage:'',
  };

  constructor(
    private httpClient: HttpClient,
    ) { }

  ngOnInit(): void {
    this.loadPage('/api/listings?page=1');

    }
    public applyFilters(page: number = 1): void {
      let url = '/api/listings?page=' + page;
  
      for (const key of Object.keys(this.filters)) {
        if (key in this.filters) {
          const val = this.filters[key as keyof AnnonceCollectionFilter];
  
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
  
      if (this.lastPage !== null) {
        for (let i = 1; i <= this.lastPage; i++) {
          arr.push(i);
        }
      }
      return arr;
    }
    private loadPage(page: string): void {
      this.httpClient.get<AnnonceCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com' + page).subscribe((data) => {
        this.annonces = data['hydra:member'];
  
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