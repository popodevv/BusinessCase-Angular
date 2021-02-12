import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {
  title = 'Angular Form Validation login';


  public angForm = new FormGroup({
    name : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  get name() {return this.angForm.get('email')};
  get key() {return this.angForm.get('password')};


  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       key: ['', Validators.required ]
    });
  }
}