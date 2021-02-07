import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Garage } from 'src/models/garage';
import { GarageJsonld } from 'src/models/garage-jsonId';

@Component({
  selector: 'app-garage-form',
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.scss']
})
export class GarageFormComponent implements OnInit {

  public garage : Garage = {
    name: '',
    street: '',
    streetComplement: '',
    postalCode: '',
    city: '',
    owner: undefined,
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.httpClient.post<GarageJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/garages', this.garage).subscribe((user) => {
      // Use a html message (<div>) and ngIf to inform the user creation.
      alert('User created.');

      // Redirect list / details
    });
  }

}