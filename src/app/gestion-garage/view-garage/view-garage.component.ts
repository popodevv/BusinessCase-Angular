import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageJsonld } from 'src/models/garage-jsonId';

@Component({
  selector: 'app-view-garage',
  templateUrl: './view-garage.component.html',
  styleUrls: ['./view-garage.component.scss']
})
export class ViewGarageComponent implements OnInit {

  public garageView : GarageJsonld|null = null;
  public indexGarage = 0;


  constructor(
    private httpClient: HttpClient,
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.indexGarage = this.route.snapshot.params['id'];
    this.loadGarageDetails(this.indexGarage);
  }

  public loadGarageDetails(index : number): void {
    this.httpClient.get<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages/'+index)
      .subscribe(
        (response) => {
          this.garageView = response;
        },
        (err) => { console.error(err);
        }
      );
  }
}
