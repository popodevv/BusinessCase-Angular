import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnonceCollection } from 'src/models/annonce-collection';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';


@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss']
})
export class ListAnnonceComponent implements OnInit {


  public annonces : Array<AnnonceJsonld> = [];

  constructor(
    private httpClient: HttpClient,
    ) { }

  ngOnInit(): void {
    this.httpClient.get<AnnonceCollection>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings?page=1').subscribe((data) => {
      this.annonces = data['hydra:member'];
    });
    
  }

}

