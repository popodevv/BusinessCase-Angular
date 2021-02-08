import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';
import { Garage } from 'src/models/garage';
import { GarageJsonld } from 'src/models/garage-jsonId';

@Component({
  selector: 'app-forms-modif-garage',
  templateUrl: './forms-modif-garage.component.html',
  styleUrls: ['./forms-modif-garage.component.scss']
})
export class FormsModifGarageComponent implements OnInit {

  public garage: GarageJsonld|null = null;

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe((params) => {
      this.httpClient.get<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages/' + params.id).subscribe({
        next: (garage: GarageJsonld) => {
          this.garage = garage;
        },
        error: (err: HttpErrorResponse) => {
          alert(err.status + ' - ' + err.statusText);
        },
      });
    });
  }

  public submit(garage: Garage): void {
    this.httpClient.put<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages/' + this.garage?.id, garage).subscribe({
      next: (createdGarage) => {
        this.router.navigate(['/garage/listgarage']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.violationList = err.error;
        } else {
          alert(err.status + ' - An error occurred.');
        }
      },
    });
  }
}