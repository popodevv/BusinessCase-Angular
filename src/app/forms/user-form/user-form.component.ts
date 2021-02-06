import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserJsonld } from 'src/models/user-jsonId';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public user: User= {
    email: '',
    firstName: '',
    lastName: '',
    phone: undefined,
    siret: undefined,
    garages: [],
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.httpClient.post<UserJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users', this.user).subscribe((user) => {
      // Use a html message (<div>) and ngIf to inform the user creation.
      alert('User created.');

      // Redirect list / details
    });
  }

}