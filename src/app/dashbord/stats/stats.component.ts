import { Component, OnInit } from '@angular/core';
import { AnnonceCollectionFilter } from 'src/models/annonce-collection-filter';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';

@Component({
  selector: 'app-stats',
  moduleId: module.id,
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {


  public annonces : Array<AnnonceJsonld> = [];


  
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

  constructor() { }

  ngOnInit(): void {
  }

}
