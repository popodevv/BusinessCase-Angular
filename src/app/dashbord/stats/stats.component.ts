import { Component, OnInit } from '@angular/core';
import { AnnonceCollectionFilter } from 'src/models/annonce-collection-filter';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {


  public annonces : Array<AnnonceJsonld> = [];


  
  public filters: AnnonceCollectionFilter = {
    id: 0,
    title: '',
    description: '',
    releaseyear:'',
    km: 0,
    price:'',
    brand:'',
    model:'',
    fuel:'',
    garage:'',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
