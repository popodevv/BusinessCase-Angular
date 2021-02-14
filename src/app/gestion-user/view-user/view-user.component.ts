import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { UserJsonld } from 'src/models/user-jsonId';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public userView : UserJsonld|null = null;

  public indexGarage = 0;

  constructor(    
    private HttpClient : HttpClient,
    private route : ActivatedRoute,) { }

    ngOnInit(): void {
      this.indexGarage = this.route.snapshot.params['id'];
    this.loadGarageDetails(this.indexGarage);
  }

  public loadGarageDetails(index : number): void {
    this.HttpClient.get<UserJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/users/'+index)
      .subscribe(
        (response) => {
          this.userView = response;
        },
        (err) => { console.error(err);
        }
      );
  }
  }