import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/models/annonce';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';

@Component({
  selector: 'app-forms-modif-cars',
  templateUrl: './forms-modif-cars.component.html',
  styleUrls: ['./forms-modif-cars.component.scss']
})
export class FormsModifCarsComponent implements OnInit {

  public annonce: AnnonceJsonld|null = null;

  public violationList: ConstraintViolationList|null = null;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClient.get<AnnonceJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings/' + params.id).subscribe({
        next: (annonce: AnnonceJsonld) => {
          this.annonce = annonce;
        },
        error: (err: HttpErrorResponse) => {
          // You have to handle error better than this ;) .
          alert(err.status + ' - ' + err.statusText);
        },
      });
    });
  }

  public submit(annonce: Annonce): void {
    this.httpClient.put<AnnonceJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings/' + this.annonce?.id, annonce).subscribe({
      next: (createdAnnonce) => {
        this.router.navigate(['annonce/listannonce']);
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
