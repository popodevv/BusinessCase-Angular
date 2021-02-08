import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';
import { Garage } from 'src/models/garage';
import { GarageJsonld } from 'src/models/garage-jsonId';

@Component({
  selector: 'app-add-new-garage',
  templateUrl: './add-new-garage.component.html',
  styleUrls: ['./add-new-garage.component.scss']
})
export class AddNewGarageComponent implements OnInit {


  public garage: Garage = {
    name: '',
    street: '',
    streetComplement: '',
    postalCode: '',
    city: '',
    owner: '',
  };

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(garage: Garage): void {
    this.httpClient.post<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages', garage).subscribe({
      next: (createdgarage) => {

        this.router.navigate(['/garage/listgarage']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.violationList = err.error;
          // alert(this.violationList['hydra:description']);
        } else {
          // Inform the user that an error occurred (display a better message then my example).
          alert(err.status + ' - An error occurred.');
        }
      },
    });
  }

}


