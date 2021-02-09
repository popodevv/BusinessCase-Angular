import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/models/annonce';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';

@Component({
  selector: 'app-add-new-annonce',
  templateUrl: './add-new-annonce.component.html',
  styleUrls: ['./add-new-annonce.component.scss']
})
export class AddNewAnnonceComponent implements OnInit {
  
  public annonce: Annonce = {
  title: '',
  description: '',
  releaseyear: '',
  km: '',
  price: '',
  brand: '',
  model: '',
  fuel: undefined,
  garage :'',
}

public violationList: ConstraintViolationList|null = null;


  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(annonce: Annonce): void {
    this.httpClient.post<AnnonceJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings', annonce).subscribe({
      next: (createdAnnonce) => {
        this.router.navigate(['/annonce/listannonce']);
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
