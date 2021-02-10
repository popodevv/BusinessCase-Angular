import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
  title = 'Angular Form Validation login';

  public angForm : FormGroup|null = null;

  constructor(private fb: FormBuilder ) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }
}