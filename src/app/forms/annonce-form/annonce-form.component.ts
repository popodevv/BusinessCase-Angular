import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/models/annonce';
import { AnnonceJsonld } from 'src/models/annonce-jsonId';

@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss']
})
export class AnnonceFormComponent implements OnInit {

  public annonce: Annonce ={
    title: '',
    description: '',
    releaseyear: '',
    km: '',
    price: '',
    brand: '',
    model: '',
    fuel: '',
    garage :'',
  }

  constructor(
    private httpClient : HttpClient,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.httpClient.post<AnnonceJsonld>('https://hb-bc-dwwm-2020.deploy.this-serv.com/api/listings', this.annonce).subscribe((user) => {
      // Use a html message (<div>) and ngIf to inform the user creation.
      alert('Annonce created.');

      // Redirect list / details
    });
  }


}
