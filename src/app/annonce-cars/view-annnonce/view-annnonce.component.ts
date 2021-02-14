import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';

@Component({
  selector: 'app-view-annnonce',
  templateUrl: './view-annnonce.component.html',
  styleUrls: ['./view-annnonce.component.scss']
})
export class ViewAnnnonceComponent implements OnInit {

  public indexAnnonce = 0;
  public annonceView : AnnonceJsonld|null = null;  

  constructor(
    private route : ActivatedRoute,
    private httpClient: HttpClient,
    private router : Router) { }

  ngOnInit(): void {
    this.indexAnnonce = this.route.snapshot.params['id'];
    this.loadAnnonceDetails(this.indexAnnonce);
  }

  public loadAnnonceDetails(index:number): void {
    this.httpClient.get<AnnonceJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings/'+index)
      .subscribe(
        (response) => {
          this.annonceView = response ;          
        },
        (error)=> {
          console.log("le message d'erreur : "+ error);          
        }
      )
  } 

}
