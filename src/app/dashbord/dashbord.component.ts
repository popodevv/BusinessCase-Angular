import { Component, Input, OnInit, Output } from '@angular/core';
import { AnnonceCollectionFilter } from 'src/models/annonce-collection-filter';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  public annonce: number|null =null;
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
